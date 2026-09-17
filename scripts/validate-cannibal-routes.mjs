#!/usr/bin/env node
/**
 * Cannibal URLs must be edge 301 only — no Astro HTML stubs with self-canonical.
 * Run on prebuild (src/pages guard) and postbuild (dist guard via validate:sitemaps).
 */
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	getCannibalRedirectPaths,
	getForbiddenEnPageDirs,
} from './lib/cannibal-paths.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = path.join(ROOT, 'src/pages');
const DIST = path.join(ROOT, 'dist');

let failed = 0;

function fail(msg) {
	console.error(`✗ ${msg}`);
	failed += 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

for (const dir of getForbiddenEnPageDirs()) {
	const astro = path.join(PAGES, dir, 'index.astro');
	if (existsSync(astro)) {
		fail(`Forbidden Astro route for cannibal URL: src/pages/${dir}/index.astro (use edge 301 only)`);
	}
}
if (failed === 0) {
	ok(`No Astro stubs under src/pages/ for ${getForbiddenEnPageDirs().length} cannibal EN paths`);
}

if (existsSync(DIST)) {
	let built = 0;
	for (const urlPath of getCannibalRedirectPaths()) {
		const rel = urlPath.replace(/^\/|\/$/g, '');
		const html = path.join(DIST, rel, 'index.html');
		if (existsSync(html)) {
			fail(`Cannibal URL built HTML: ${urlPath} (dist/${rel}/index.html)`);
			built += 1;
		}
	}
	if (built === 0) {
		ok(
			`No dist HTML for ${getCannibalRedirectPaths().length} cannibal redirect paths (EN + locale)`,
		);
	}
}

if (failed) process.exit(1);
