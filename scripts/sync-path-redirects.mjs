#!/usr/bin/env node
/**
 * Generates functions/path-redirects.json from public/_redirects (301 rules only).
 * Used by Cloudflare middleware so PATH_REDIRECTS stays in sync with static redirects.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const JSON_OUT = path.join(ROOT, 'functions/path-redirects.json');

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
	'/reviews/palia-esp-zero-build-review-buildsr4k': '/reviews/palia-esp-scav-run-review-buildsr4k/',
	'/reviews/palia-esp-zero-build-review-buildsr4k/': '/reviews/palia-esp-scav-run-review-buildsr4k/',
	'/reviews/palia-teleport-review-vanlifefn': '/reviews/palia-teleport-review-vanlifeeft/',
	'/reviews/palia-teleport-review-vanlifefn/': '/reviews/palia-teleport-review-vanlifeeft/',
	'/reviews/palia-teleport-review-vanlifewz': '/reviews/palia-teleport-review-vanlifeeft/',
	'/reviews/palia-teleport-review-vanlifewz/': '/reviews/palia-teleport-review-vanlifeeft/',
	'/reviews/palia-controller-soft-aim-review-ctrl-player99': '/reviews/palia-soft-aim-review-ctrl-player99/',
	'/reviews/palia-controller-soft-aim-review-ctrl-player99/': '/reviews/palia-soft-aim-review-ctrl-player99/',
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
const fromRedirects = parseRedirects(redirectsSrc);
const merged = { ...fromRedirects, ...MIDDLEWARE_EXTRA };

writeFileSync(JSON_OUT, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`Synced ${Object.keys(merged).length} path redirects → functions/path-redirects.json`);
