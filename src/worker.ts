/**
 * Cloudflare Worker — canonical host + path 301s before static assets.
 * Bulk redirects live in functions/path-redirects.json (+ cannibal-redirects.json),
 * not public/_redirects (Cloudflare limits _redirects to 100 dynamic rules).
 */
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';
import PATH_REDIRECTS from '../functions/path-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'paliacheats.org';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

const LEGACY_HOSTS = new Set([
	'bestpaliacheats.com',
	'www.bestpaliacheats.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

type RedirectMap = Record<string, string>;

function resolvePathRedirect(pathname: string): string | null {
	return (
		(PATH_REDIRECTS as RedirectMap)[pathname] ??
		(CANNIBAL_REDIRECTS as RedirectMap)[pathname] ??
		xmlTrailingSlashRedirect(pathname) ??
		trailingSlashRedirect(pathname)
	);
}

function xmlTrailingSlashRedirect(pathname: string): string | null {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

function trailingSlashRedirect(pathname: string): string | null {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

function needsHostRedirect(request: Request, url: URL): boolean {
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	if (host === `www.${CANONICAL_HOST}` || LEGACY_HOSTS.has(host)) return true;
	return url.protocol === 'http:' && (host === CANONICAL_HOST || LEGACY_HOSTS.has(host));
}

function redirectResponse(target: URL): Response {
	return new Response(null, {
		status: 301,
		headers: {
			Location: target.toString(),
			'Cache-Control': 'public, max-age=86400',
		},
	});
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (needsHostRedirect(request, url)) {
			const target = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
			target.protocol = 'https:';
			target.hostname = CANONICAL_HOST;
			const mapped = resolvePathRedirect(target.pathname);
			if (mapped) target.pathname = mapped;
			return redirectResponse(target);
		}

		const mapped = resolvePathRedirect(url.pathname);
		if (mapped) {
			return redirectResponse(new URL(mapped + url.search, CANONICAL_ORIGIN));
		}

		// Drop stale edge cache for this URL (custom domain caches by Host header).
		const cache = caches.default;
		await cache.delete(request);

		const assetRequest = new Request(request, { cf: { cacheTtl: 0, cacheEverything: false } });
		const response = await env.ASSETS.fetch(assetRequest);
		const contentType = response.headers.get('Content-Type') || '';
		if (!contentType.includes('text/html')) {
			return response;
		}

		const headers = new Headers(response.headers);
		headers.set('Cache-Control', 'no-cache, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');

		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
};
