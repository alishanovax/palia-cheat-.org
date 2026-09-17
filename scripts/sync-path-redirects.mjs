#!/usr/bin/env node
/**
 * Generates functions/path-redirects.json from public/_redirects (301 rules only).
 * Used by Cloudflare middleware so PATH_REDIRECTS stays in sync with static redirects.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const JSON_OUT = path.join(ROOT, 'functions/path-redirects.json');
const CANNIBAL_REDIRECTS = path.join(ROOT, 'functions/cannibal-redirects.json');
const REVIEW_REDIRECTS = path.join(ROOT, 'functions/review-slug-redirects.json');
const MAX_STATIC_REDIRECTS = 100;

function pair(from, to) {
	const bare = from.replace(/\/$/, '');
	const target = to.endsWith('/') ? to : `${to}/`;
	return {
		[bare]: target,
		[`${bare}/`]: target,
	};
}

function redirectPairs(map) {
	return Object.fromEntries(
		Object.entries(map).flatMap(([from, to]) => {
			const p = pair(from, to);
			return Object.entries(p);
		}),
	);
}

/** Legacy FAQ slugs → short slugs. */
const FAQ_SLUG_REDIRECTS = redirectPairs({
	'/faq/how-are-licenses-delivered': '/faq/delivery',
	'/faq/how-to-contact-support': '/faq/contact',
	'/faq/where-to-check-updates': '/faq/updates',
	'/faq/kilima-and-bahari-bay-support': '/faq/kilima',
	'/faq/esp-wallhack-teleport-or-aimbot': '/faq/included',
	'/faq/what-are-palia-cheats': '/faq/about',
	'/faq/are-palia-cheats-undetected-in-2026': '/faq/undetected',
	'/faq/buy-undetected-palia-cheats-windows-pc': '/faq/buy',
	'/faq/what-is-a-palia-wallhack': '/faq/wallhack',
	'/faq/does-palia-cheats-include-teleport': '/faq/teleport',
	'/faq/eac-anti-cheat-and-palia-cheats': '/faq/eac',
});

/** Legacy forum slugs → short slugs. */
const FORUM_SLUG_REDIRECTS = redirectPairs({
	'/forum/setup-guide': '/forum/setup',
	'/forum/aimbot-settings': '/forum/aimbot',
	'/forum/fishing-esp': '/forum/fishing',
	'/forum/buyers-guide': '/forum/buyers',
	'/forum/cheat-menu': '/forum/menu',
	'/forum/kilima-esp': '/forum/kilima',
	'/forum/bahari-teleport': '/forum/bahari',
	'/forum/premium-vs-free': '/forum/premium',
});

function readJsonRedirects(file) {
	if (!existsSync(file)) return {};
	try {
		return JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		return {};
	}
}

function countStatic301Rules(src) {
	let count = 0;
	for (const line of src.split('\n')) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;
		const parts = trimmed.split(/\s+/);
		if (parts.length >= 3 && parts[2] === '301' && !parts[0].includes('*')) count += 1;
	}
	return count;
}

/** Middleware-only redirects (not in _redirects or trailing-slash helpers). */
const MIDDLEWARE_EXTRA = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	'/forum/patch-notes-buffs-nerfs-vaults': '/forum/palia-patch-notes-guide/',
	'/forum/patch-notes-buffs-nerfs-vaults/': '/forum/palia-patch-notes-guide/',
	'/forum/chapter-7-season-3-skin-leaks-vbucks': '/forum/palia-skin-leaks-guide/',
	'/forum/chapter-7-season-3-skin-leaks-vbucks/': '/forum/palia-skin-leaks-guide/',
	'/forum/hammer-ar-s-tier-data-analysis': '/forum/palia-weapon-tier-list/',
	'/forum/hammer-ar-s-tier-data-analysis/': '/forum/palia-weapon-tier-list/',
	'/forum/zero-build-meta-broken-aggressive-strategies': '/forum/palia-scav-run-aggressive-strategies/',
	'/forum/zero-build-meta-broken-aggressive-strategies/': '/forum/palia-scav-run-aggressive-strategies/',
	'/forum/fncs-meta-watch-tournament-drops': '/forum/palia-tournament-meta-guide/',
	'/forum/fncs-meta-watch-tournament-drops/': '/forum/palia-tournament-meta-guide/',
	'/forum/secret-loot-routes-full-gold': '/forum/palia-loot-routes-guide/',
	'/forum/secret-loot-routes-full-gold/': '/forum/palia-loot-routes-guide/',
	'/forum/bugha-settings-pro-setup': '/forum/palia-pro-settings-guide/',
	'/forum/bugha-settings-pro-setup/': '/forum/palia-pro-settings-guide/',
	'/forum/creative-warmup-maps-pros-use': '/forum/palia-warmup-maps-ranked/',
	'/forum/creative-warmup-maps-pros-use/': '/forum/palia-warmup-maps-ranked/',
	...redirectPairs({
		'/forum/how-to-use-palia-cheats-setup-guide': '/forum/setup',
		'/forum/palia-aimbot-settings-ban-risk': '/forum/aimbot',
		'/forum/palia-fishing-esp-best-settings': '/forum/fishing',
		'/forum/buy-palia-cheats-buyers-guide-2026': '/forum/buyers',
		'/forum/palia-cheat-menu-full-feature-list': '/forum/menu',
		'/forum/palia-resource-esp-kilima-village-guide': '/forum/kilima',
		'/forum/palia-teleport-bahari-bay-coordinates': '/forum/bahari',
		'/forum/palia-premium-cheats-vs-free-trainers': '/forum/premium',
	}),
};

function parseRedirects(src) {
	/** @type {Record<string, string>} */
	const map = {};
	for (const line of src.split('\n')) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;
		const parts = trimmed.split(/\s+/);
		if (parts.length < 3) continue;
		const [from, to, status] = parts;
		if (status !== '301') continue;
		if (from.includes('*')) continue;
		map[from] = to;
	}
	return map;
}

const redirectsSrc = readFileSync(REDIRECTS, 'utf8');
const static301Count = countStatic301Rules(redirectsSrc);
if (static301Count > MAX_STATIC_REDIRECTS) {
	throw new Error(
		`public/_redirects has ${static301Count} 301 rules (max ${MAX_STATIC_REDIRECTS} on Cloudflare). ` +
			'Move extras to functions/path-redirects.json via sync-path-redirects.mjs.',
	);
}

const fromRedirects = parseRedirects(redirectsSrc);
const merged = {
	...fromRedirects,
	...readJsonRedirects(CANNIBAL_REDIRECTS),
	...MIDDLEWARE_EXTRA,
	...FAQ_SLUG_REDIRECTS,
	...FORUM_SLUG_REDIRECTS,
	...readJsonRedirects(REVIEW_REDIRECTS),
};

writeFileSync(JSON_OUT, `${JSON.stringify(merged, null, 2)}\n`);
console.log(
	`Synced ${Object.keys(merged).length} path redirects → functions/path-redirects.json (${static301Count} static _redirects 301 rules)`,
);
