/**
 * Shared cannibal URL helpers — redirect-only pageIds (no Astro HTML).
 * Used by sync-cannibal-redirects.mjs and validate-sitemaps.mjs.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const ROUTING_FILE = path.join(ROOT, 'src/data/i18n/routing.ts');
export const CANNIBAL_MAP_FILE = path.join(ROOT, 'src/data/seo-cannibal-map.ts');

export function readCannibalTargets() {
	const src = readFileSync(CANNIBAL_MAP_FILE, 'utf8');
	const block = src.match(/cannibalRedirectTargets\s*=\s*\{([\s\S]*?)\}\s*as const/);
	if (!block) throw new Error('cannibalRedirectTargets missing in seo-cannibal-map.ts');
	/** @type {Record<string, string>} */
	const targets = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*['"]([\w-]+)['"]/g)) {
		targets[row[1]] = row[2];
	}
	return targets;
}

export function readEnglishPath(routing, pageId) {
	const pathsBlock = routing.match(/export const englishPaths[^=]*=\s*\{([\s\S]*?)\n\};/);
	if (!pathsBlock) throw new Error('englishPaths missing in routing.ts');
	const block = pathsBlock[1];
	const quoted = block.match(new RegExp(`'${pageId}':\\s*'([^']+)'`));
	if (quoted) return quoted[1];
	const bare = block.match(new RegExp(`\\b${pageId}:\\s*'([^']+)'`));
	if (bare) return bare[1];
	throw new Error(`Missing english path for ${pageId}`);
}

export function extractSlugBlock(src, pageId) {
	const re = new RegExp(`\\t'${pageId}':\\s*\\{([\\s\\S]*?)\\n\\t\\},|\\t${pageId}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`);
	const m = src.match(re);
	const block = m?.[1] ?? m?.[2];
	if (!block) throw new Error(`Missing localizedSlugs block for ${pageId}`);
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']+)'/g)) {
		slugs[row[1]] = row[2];
	}
	return slugs;
}

/** All URL paths that must 301 only — never emit index.html in dist. */
export function getCannibalRedirectPaths() {
	const targets = readCannibalTargets();
	const routing = readFileSync(ROUTING_FILE, 'utf8');
	const paths = new Set();

	for (const fromId of Object.keys(targets)) {
		const fromEn = readEnglishPath(routing, fromId);
		const normalized = fromEn.endsWith('/') ? fromEn : `${fromEn}/`;
		paths.add(normalized);

		const fromSlugs = extractSlugBlock(routing, fromId);
		for (const [locale, slug] of Object.entries(fromSlugs)) {
			if (locale === 'en' || !slug) continue;
			paths.add(`/${locale}/${slug}/`);
		}
	}

	return [...paths].sort();
}

/** EN path segments forbidden under src/pages/ (e.g. wallhack → src/pages/wallhack/). */
export function getForbiddenEnPageDirs() {
	const targets = readCannibalTargets();
	const routing = readFileSync(ROUTING_FILE, 'utf8');
	return Object.keys(targets)
		.map((fromId) => readEnglishPath(routing, fromId).replace(/^\/|\/$/g, ''))
		.sort();
}
