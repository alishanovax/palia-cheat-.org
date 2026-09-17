#!/usr/bin/env node
/**
 * Completes escape-from-palia-cheats SEO audit: add missing pages, fix leftovers, strip checkout from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'palia-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'palia-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'palia-cheat-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'palia-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-palia-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'palia-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'palia-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'palia-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/palia-palia/g, 'palia'],
	[/eac-bypass-palia/g, 'eac-bypass'],
	[/Palia/g, 'Palia'],
	[/Palia/g, 'Palia'],
	[/Call of Duty/g, 'Palia'],
	[/Palia Wallhack/g, 'Palia Wallhack'],
	[/Palia Radar Hack/g, 'Palia Radar Hack'],
	[/Palia Cheat Features/g, 'Palia Cheat Features'],
	[/Palia Cheat Pricing/g, 'Palia Cheat Pricing'],
	[/Palia Cheat Setup/g, 'Palia Cheat Setup'],
	[/Palia Cheat Status/g, 'Palia Cheat Status'],
	[/Palia Cheat Support/g, 'Palia Cheat Support'],
	[/Palia squad fight/g, 'Palia squad fight'],
	[/Palia squad builder/g, 'Palia loadout builder'],
	[/Palia store header/g, 'Palia header'],
	[/Palia wasteland combat/g, 'Palia battle royale combat'],
	[/Palia loadout builder/g, 'Palia loadout builder'],
	[/Palia pricing/g, 'Palia pricing'],
	[/Palia Easy Anti-Cheat/g, 'Palia Easy Anti-Cheat'],
	[/on Palia/g, 'on Palia'],
	[/for Palia/g, 'for Palia'],
	[/Palia guides/g, 'Palia guides'],
	[/Palia guide/g, 'Palia guide'],
	[/Palia hileleri/g, 'Palia hileleri'],
	[/Palia hile/g, 'Palia hile'],
	[/Palia hileleri/g, 'Palia hileleri'],
	[/cheatów Palia/g, 'cheatów Palia'],
	[/cheat Palia/g, 'cheat Palia'],
	[/cheats Palia/g, 'cheats Palia'],
	[/trucos Palia/g, 'trucos Palia'],
	[/triche Palia/g, 'triche Palia'],
	[/trucchi Palia/g, 'trucchi Palia'],
	[/Wallhack Palia/g, 'Palia Wallhack'],
	[/cheat Palia undetected/g, 'cheat Palia undetected'],
	[/cheats Palia undetected/g, 'cheats Palia undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/session and scav-run/g, 'session and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-palia-cheats/g, 'escape-from-palia-cheats'],
	[/escape-from-palia/g, 'palia'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Palia'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Palia anti-cheat'],
];

/** Remove checkout from meta description/title strings only */
function stripcheckoutFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via checkout\.?/gi, '.')
		.replace(/\s*with secure checkout\.?/gi, '.')
		.replace(/\s*via secure checkout\.?/gi, '.')
		.replace(/\s*Checkout via checkout\.?/gi, '')
		.replace(/\s*secure checkout,?\s*/gi, ' ')
		.replace(/\s*checkout delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and checkout delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant checkout Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on checkout/g, 'Buy Palia Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip checkout from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripcheckoutFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripcheckoutFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Palia guides/g, 'Palia guides');
	content = content.replace(/Palia guide/g, 'Palia guide');
	content = content.replace(/Palia hileleri/g, 'Palia hileleri');
	content = content.replace(/Palia hile/g, 'Palia hile');
	content = content.replace(/cheat Palia/g, 'cheat Palia');
	content = content.replace(/cheats Palia/g, 'cheats Palia');
	content = content.replace(/trucos Palia/g, 'trucos Palia');
	content = content.replace(/triche Palia/g, 'triche Palia');
	content = content.replace(/trucchi Palia/g, 'trucchi Palia');
	content = content.replace(/cheatów Palia/g, 'cheatów Palia');
	content = content.replace(/читов Palia/g, 'читов Palia');
	content = content.replace(/читів Palia/g, 'читів Palia');
	content = content.replace(/Paliaチート/g, 'Paliaチート');
	content = content.replace(/Palia 치트/g, 'Palia 치트');
	content = content.replace(/Palia作弊/g, 'Palia作弊');
	content = content.replace(/Palia rehberleri/g, 'Palia rehberleri');
	content = content.replace(/Palia gidsen/g, 'Palia gidsen');
	content = content.replace(/Palia průvodce/g, 'Palia průvodce');
	content = content.replace(/Palia guider/g, 'Palia guider');
	content = content.replace(/Palia related/g, 'Palia related');
	content = content.replace(/Palia ガイド/g, 'Palia ガイド');
	content = content.replace(/Palia 가이드/g, 'Palia 가이드');
	content = content.replace(/Palia指南/g, 'Palia指南');
	content = content.replace(/Palia गाइड/g, 'Palia गाइड');
	content = content.replace(/Palia panduan/g, 'Palia panduan');
	content = content.replace(/Palia คู่มือ/g, 'Palia คู่มือ');
	content = content.replace(/Palia hướng dẫn/g, 'Palia hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts forumUi');
}

console.log('=== Palia Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
