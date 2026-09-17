#!/usr/bin/env node
/**
 * Syncs 301s for cannibal pageIds → pillar pageIds into functions/cannibal-redirects.json.
 * Workers middleware handles these — NOT public/_redirects (Cloudflare 100-rule limit).
 * Cannibal URLs are redirect-only — never built as Astro HTML.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	extractSlugBlock,
	readCannibalTargets,
	readEnglishPath,
	ROUTING_FILE,
} from './lib/cannibal-paths.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const JSON_OUT = path.join(ROOT, 'functions/cannibal-redirects.json');

const TARGETS = readCannibalTargets();
const routing = readFileSync(ROUTING_FILE, 'utf8');
const map = {};

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromEn = readEnglishPath(routing, fromId);
	const toEn = readEnglishPath(routing, toId);
	const fromBare = fromEn.replace(/\/$/, '');
	map[fromBare] = toEn;
	map[fromEn.endsWith('/') ? fromEn : `${fromEn}/`] = toEn;

	const fromSlugs = extractSlugBlock(routing, fromId);
	const toSlugs = extractSlugBlock(routing, toId);
	for (const [locale, fromSlug] of Object.entries(fromSlugs)) {
		if (locale === 'en') continue;
		const toSlug = toSlugs[locale];
		if (!toSlug) continue;
		const fromPath = `/${locale}/${fromSlug}/`;
		const toPath = `/${locale}/${toSlug}/`;
		map[fromPath] = toPath;
		map[`/${locale}/${fromSlug}`] = toPath;
	}
}

/** Strip legacy cannibal block from _redirects if present (moved to middleware JSON). */
const markerStart = '# Auto-generated cannibal';
let redirects = readFileSync(REDIRECTS, 'utf8');
const start = redirects.indexOf(markerStart);
if (start >= 0) {
	const lineStart = redirects.lastIndexOf('\n', start);
	redirects = redirects.slice(0, lineStart >= 0 ? lineStart : start).trimEnd() + '\n';
	writeFileSync(REDIRECTS, redirects);
}

writeFileSync(JSON_OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(
	`Synced ${Object.keys(map).length} cannibal redirect paths (${Object.keys(TARGETS).length} pageIds) → middleware JSON only`,
);
