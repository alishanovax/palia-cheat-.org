#!/usr/bin/env node
/**
 * Shorten EN page slugs + sync folders, redirects, and hardcoded hrefs.
 * Run: node scripts/shorten-slugs.mjs
 */
import { readFileSync, writeFileSync, renameSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = path.join(ROOT, 'src/pages');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const REDIRECTS = path.join(ROOT, 'public/_redirects');

/** PageId → canonical short EN path */
const EN_PATHS = {
	home: '/',
	'palia-esp': '/esp/',
	'palia-aimbot': '/aimbot/',
	features: '/features/',
	pricing: '/store/',
	setup: '/setup/',
	updates: '/status/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected/',
	wallhack: '/wallhack/',
	radar: '/teleport/',
	eac: '/eac/',
	'cheats-2026': '/cheats-2026/',
	hacks: '/cheats/',
	'cheat-download': '/download/',
	'mod-menu': '/mod-menu/',
	'soft-aim': '/soft-aim/',
	'best-cheats': '/best/',
	'aimbot-hack': '/hunting-aimbot/',
	'esp-hack': '/resource-esp/',
	'unlock-all': '/unlock-all/',
	privacy: '/privacy/',
	refund: '/refund/',
	terms: '/terms/',
};

/** Old folder name → new folder name under src/pages */
const FOLDER_RENAMES = [
	['palia-cheats-buyers-guide-2026', 'cheats-2026'],
	['palia-cheats-undetected', 'undetected'],
	['download-palia-cheats', 'download'],
	['palia-hunting-aimbot', 'hunting-aimbot'],
	['palia-unlock-all-guide', 'unlock-all'],
	['palia-resource-esp', 'resource-esp'],
	['palia-eac-bypass', 'eac'],
	['best-palia-cheats', 'best'],
	['palia-mod-menu', 'mod-menu'],
	['palia-soft-aim', 'soft-aim'],
	['palia-wallhack', 'wallhack'],
	['palia-teleport', 'teleport'],
	['palia-aimbot', 'aimbot'],
	['palia-cheats', 'cheats'],
	['palia-esp', 'esp'],
	['privacy-policy', 'privacy'],
	['refund-policy', 'refund'],
	['updates', 'status'],
];

/** Old EN path → new EN path (longest first) */
const LEGACY_REDIRECTS = [
	['/palia-cheats-buyers-guide-2026', '/cheats-2026/'],
	['/palia-cheats-undetected', '/undetected/'],
	['/download-palia-cheats', '/download/'],
	['/palia-hunting-aimbot', '/hunting-aimbot/'],
	['/palia-unlock-all-guide', '/unlock-all/'],
	['/palia-resource-esp', '/resource-esp/'],
	['/undetected-palia-cheats', '/undetected/'],
	['/palia-esp-hack', '/resource-esp/'],
	['/palia-aimbot-hack', '/hunting-aimbot/'],
	['/palia-eac-bypass', '/eac/'],
	['/eac-bypass', '/eac/'],
	['/palia-cheats-2026', '/cheats-2026/'],
	['/palia-cheat-download', '/download/'],
	['/palia-cheat-menu', '/mod-menu/'],
	['/palia-unlock-all', '/unlock-all/'],
	['/best-palia-cheats', '/best/'],
	['/palia-mod-menu', '/mod-menu/'],
	['/palia-soft-aim', '/soft-aim/'],
	['/palia-wallhack', '/wallhack/'],
	['/palia-teleport', '/teleport/'],
	['/palia-aimbot', '/aimbot/'],
	['/palia-cheats', '/cheats/'],
	['/palia-esp', '/esp/'],
	['/privacy-policy', '/privacy/'],
	['/refund-policy', '/refund/'],
	['/updates', '/status/'],
];

const HREF_REPLACEMENTS = LEGACY_REDIRECTS.flatMap(([from, to]) => {
	const withSlash = to.endsWith('/') ? to : `${to}/`;
	return [[`${from}/`, withSlash], [from, to.replace(/\/$/, '')]];
});

const GLOB_FILES = [
	'src/data/i18n/routing.ts',
	'src/data/i18n/simple-pages.ts',
	'src/data/site.ts',
	'src/data/site-core.ts',
	'src/data/brand.ts',
	'src/components/LocalizedHome.astro',
	'src/components/LocalizedPage.astro',
	'src/data/seo-canonical.ts',
	'scripts/validate-sitemaps.mjs',
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/constants.mjs',
	'public/locales/en/translation.json',
];

function replaceHrefs(text) {
	let out = text;
	for (const [from, to] of HREF_REPLACEMENTS) {
		// Only replace URL paths in hrefs and explicit route strings — skip image filenames.
		const hrefFrom = `href="${from}`;
		const hrefTo = `href="${to}`;
		if (out.includes(hrefFrom)) out = out.split(hrefFrom).join(hrefTo);
		const hrefFrom2 = `href='${from}`;
		const hrefTo2 = `href='${to}`;
		if (out.includes(hrefFrom2)) out = out.split(hrefFrom2).join(hrefTo2);
		const quoted = `"${from}"`;
		const quotedTo = `"${to}"`;
		if (out.includes(quoted)) out = out.split(quoted).join(quotedTo);
		const routeOnly = from.endsWith('/') ? from : `${from}/`;
		const routeTo = to.endsWith('/') ? to : `${to}/`;
		if (routeOnly !== from && out.includes(routeOnly)) {
			out = out.split(routeOnly).join(routeTo);
		}
	}
	return out;
}

function slugFromPath(p) {
	if (p === '/') return '';
	return p.replace(/^\/|\/$/g, '');
}

function shortenLocaleSlug(slug) {
	if (!slug) return slug;
	let s = slug;
	s = s.replace(/^escape-from-palia-cheats-/, '');
	s = s.replace(/^palia-cheats-/, '');
	s = s.replace(/^unentdeckte-palia-cheats$/, 'undetected');
	s = s.replace(/^beste-palia-cheats$/, 'best');
	s = s.replace(/^basta-palia-cheats$/, 'best');
	s = s.replace(/^nejlepsi-palia-cheats$/, 'best');
	s = s.replace(/-trucos-palia$/, '');
	s = s.replace(/-triche-palia$/, '');
	s = s.replace(/-cheats-palia$/, '');
	s = s.replace(/-trucchi-palia$/, '');
	s = s.replace(/-cheatow-palia$/, '');
	s = s.replace(/-chity-palia$/, '');
	s = s.replace(/-chitov-palia$/, '');
	s = s.replace(/-chitiv-palia$/, '');
	s = s.replace(/^trucos-palia-/, '');
	s = s.replace(/^triche-palia-/, '');
	s = s.replace(/^cheats-palia-/, '');
	s = s.replace(/^cheaty-palia-/, '');
	s = s.replace(/^trucchi-palia-/, '');
	s = s.replace(/^palia-hile-/, '');
	s = s.replace(/^palia-esp-wallhack$/, 'esp');
	s = s.replace(/^download-palia-cheats$/, 'download');
	s = s.replace(/^palia-unlock-all-guide$/, 'unlock-all');
	s = s.replace(/^palia-cheats-buyers-guide-2026$/, 'cheats-2026');
	s = s.replace(/^palia-cheats-undetected$/, 'undetected');
	s = s.replace(/^palia-hunting-aimbot$/, 'hunting-aimbot');
	s = s.replace(/^palia-resource-esp$/, 'resource-esp');
	s = s.replace(/^palia-eac-bypass$/, 'eac');
	s = s.replace(/^palia-mod-menu$/, 'mod-menu');
	s = s.replace(/^palia-soft-aim$/, 'soft-aim');
	s = s.replace(/^palia-wallhack$/, 'wallhack');
	s = s.replace(/^palia-teleport$/, 'teleport');
	s = s.replace(/^palia-cheats$/, 'cheats');
	s = s.replace(/^palia-aimbot$/, 'aimbot');
	s = s.replace(/^palia-esp$/, 'esp');
	return s;
}

function updateRouting() {
	let src = readFileSync(ROUTING, 'utf8');

	// englishPaths block
	const epStart = src.indexOf('export const englishPaths');
	const epEnd = src.indexOf('};', epStart) + 2;
	const epLines = ['export const englishPaths: Record<PageId, string> = {'];
	for (const [id, p] of Object.entries(EN_PATHS)) {
		const key = id.includes('-') || id === 'eac' ? `'${id}'` : id;
		epLines.push(`\t${key}: '${p}',`);
	}
	epLines.push('};');
	src = src.slice(0, epStart) + epLines.join('\n') + src.slice(epEnd);

	// localizedSlugs.en per pageId
	for (const [pageId, enPath] of Object.entries(EN_PATHS)) {
		const enSlug = slugFromPath(enPath);
		const key = pageId.includes('-') || pageId === 'eac' ? `'${pageId}'` : pageId;
		src = src.replace(
			new RegExp(`(${key}:\\s*\\{[\\s\\S]*?\\ten:\\s*)'[^']+'`),
			`$1'${enSlug}'`,
		);
	}

	// Shorten non-EN slugs
	for (const pageId of Object.keys(EN_PATHS)) {
		const key = pageId.includes('-') || pageId === 'eac' ? `'${pageId}'` : pageId;
		const blockRe = new RegExp(`(${key}:\\s*\\{)([\\s\\S]*?)(\\n\\t\\},)`);
		const m = src.match(blockRe);
		if (!m) continue;
		let block = m[2];
		for (const row of [...block.matchAll(/(\w+):\s*'([^']+)'/g)]) {
			const locale = row[1];
			if (locale === 'en') continue;
			const short = shortenLocaleSlug(row[2]);
			if (short !== row[2]) {
				block = block.replace(`${locale}: '${row[2]}'`, `${locale}: '${short}'`);
			}
		}
		src = src.replace(blockRe, `${m[1]}${block}${m[3]}`);
	}

	writeFileSync(ROUTING, src);
}

function renameFolders() {
	for (const [from, to] of FOLDER_RENAMES) {
		const oldPath = path.join(PAGES, from);
		const newPath = path.join(PAGES, to);
		if (!existsSync(oldPath)) continue;
		if (existsSync(newPath)) {
			console.warn(`Skip rename ${from} → ${to} (target exists)`);
			continue;
		}
		renameSync(oldPath, newPath);
		console.log(`Renamed pages/${from} → pages/${to}`);
	}
}

function replaceInFiles() {
	for (const rel of GLOB_FILES) {
		const file = path.join(ROOT, rel);
		if (!existsSync(file)) continue;
		let text = readFileSync(file, 'utf8');
		let changed = false;
		const next = replaceHrefs(text);
		if (next !== text) {
			text = next;
			changed = true;
		}
		if (changed) {
			writeFileSync(file, text);
			console.log(`Updated hrefs in ${rel}`);
		}
	}
}

function updateRedirects() {
	let redirects = readFileSync(REDIRECTS, 'utf8');
	const marker = '# Palia slug migrations (unique URL per page)';
	const cannibalMarker = '# Auto-generated cannibal locale redirects';
	const cannibalStart = redirects.indexOf(cannibalMarker);
	if (cannibalStart >= 0) {
		const lineStart = redirects.lastIndexOf('\n', cannibalStart);
		redirects = redirects.slice(0, lineStart >= 0 ? lineStart : cannibalStart).trimEnd() + '\n';
	}
	const legacyStart = redirects.indexOf(marker);
	if (legacyStart >= 0) {
		const lineStart = redirects.lastIndexOf('\n', legacyStart);
		redirects = redirects.slice(0, lineStart >= 0 ? lineStart : legacyStart).trimEnd() + '\n';
	}
	const lines = [marker, ...LEGACY_REDIRECTS.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`])];
	redirects = `${redirects.trimEnd()}\n\n${lines.join('\n')}\n`;
	writeFileSync(REDIRECTS, redirects);
}

function updateValidateSitemaps() {
	const file = path.join(ROOT, 'scripts/validate-sitemaps.mjs');
	let text = readFileSync(file, 'utf8');
	const newPaths = Object.values(EN_PATHS);
	const enBlock = `const ENGLISH_PATHS = [\n${newPaths.map((p) => `\t'${p}',`).join('\n')}\n\t'/forum/',`;
	text = text.replace(/const ENGLISH_PATHS = \[[\s\S]*?\t'\/forum\/',/, enBlock);

	const redirectOnly = [
		...LEGACY_REDIRECTS.map(([from]) => `'${from}/',`),
	].join('\n\t');
	text = text.replace(
		/const REDIRECT_ONLY_PATHS = new Set\(\[[\s\S]*?\]\);/,
		`const REDIRECT_ONLY_PATHS = new Set([\n\t${redirectOnly}\n]);`,
	);
	writeFileSync(file, text);
	console.log('Updated scripts/validate-sitemaps.mjs');
}

updateRouting();
renameFolders();
replaceInFiles();
updateRedirects();
updateValidateSitemaps();
console.log('Short slug migration complete. Run: npm run generate:i18n && npm run generate:translations');
