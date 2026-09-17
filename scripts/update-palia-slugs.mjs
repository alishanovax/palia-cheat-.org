#!/usr/bin/env node
/** Update EN localized slugs + legacy 301s after slug dedup. */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const REDIRECTS = path.join(ROOT, 'public/_redirects');

const EN_SLUG_UPDATES = {
	undetected: 'palia-cheats-undetected',
	eac: 'palia-eac-bypass',
	'cheats-2026': 'palia-cheats-buyers-guide-2026',
	'cheat-download': 'download-palia-cheats',
	'mod-menu': 'palia-mod-menu',
	'aimbot-hack': 'palia-hunting-aimbot',
	'esp-hack': 'palia-resource-esp',
	'unlock-all': 'palia-unlock-all-guide',
};

const LEGACY_EN = [
	['/palia-esp-hack', '/palia-resource-esp/'],
	['/palia-aimbot-hack', '/palia-hunting-aimbot/'],
	['/undetected-palia-cheats', '/palia-cheats-undetected/'],
	['/eac-bypass', '/palia-eac-bypass/'],
	['/palia-cheats-2026', '/palia-cheats-buyers-guide-2026/'],
	['/palia-cheat-download', '/download-palia-cheats/'],
	['/palia-cheat-menu', '/palia-mod-menu/'],
	['/palia-unlock-all', '/palia-unlock-all-guide/'],
];

let routing = readFileSync(ROUTING, 'utf8');
for (const [pageId, slug] of Object.entries(EN_SLUG_UPDATES)) {
	const key = pageId.includes('-') ? `'${pageId}'` : pageId;
	routing = routing.replace(
		new RegExp(`(${key}:\\s*\\{[\\s\\S]*?\\ten:\\s*)'[^']+'`),
		`$1'${slug}'`,
	);
}

// Replace leftover escape-from-palia-cheats slug prefixes with palia-* per page
const escapeReplacements = [
	[/escape-from-palia-cheats-features/g, 'palia-cheats-features'],
	[/escape-from-palia-cheats-pricing/g, 'palia-cheats-pricing'],
	[/escape-from-palia-cheats-setup/g, 'palia-cheats-setup'],
	[/escape-from-palia-cheats-updates/g, 'palia-cheats-status'],
	[/escape-from-palia-cheats-faq/g, 'palia-cheats-faq'],
	[/escape-from-palia-cheats-support/g, 'palia-cheats-support'],
	[/escape-from-palia-cheats-funktionen/g, 'palia-cheats-funktionen'],
	[/escape-from-palia-cheats-preise/g, 'palia-cheats-preise'],
	[/escape-from-palia-cheats-installation/g, 'palia-cheats-installation'],
	[/escape-from-palia-cheats-updates/g, 'palia-cheats-status'],
	[/escape-from-palia-cheats-funkce/g, 'palia-cheats-funkce'],
	[/escape-from-palia-cheats-ceny/g, 'palia-cheats-ceny'],
	[/escape-from-palia-cheats-instalace/g, 'palia-cheats-instalace'],
	[/escape-from-palia-cheats-aktualizace/g, 'palia-cheats-status'],
	[/escape-from-palia-cheats-funktioner/g, 'palia-cheats-funktioner'],
	[/escape-from-palia-cheats-priser/g, 'palia-cheats-priser'],
	[/beste-escape-from-palia-cheats/g, 'beste-palia-cheats'],
	[/basta-escape-from-palia-cheats/g, 'basta-palia-cheats'],
	[/nejlepsi-escape-from-palia-cheats/g, 'nejlepsi-palia-cheats'],
	[/unentdeckte-escape-from-palia-cheats/g, 'unentdeckte-palia-cheats'],
];

for (const [from, to] of escapeReplacements) {
	routing = routing.replace(from, to);
}

const GLOBAL_SLUG_REPLACEMENTS = [
	['palia-cheat-download', 'download-palia-cheats'],
	['palia-cheat-menu', 'palia-mod-menu'],
	['palia-esp-hack', 'palia-resource-esp'],
	['palia-aimbot-hack', 'palia-hunting-aimbot'],
	['undetected-palia-cheats', 'palia-cheats-undetected'],
	['palia-cheats-2026', 'palia-cheats-buyers-guide-2026'],
	["'eac-bypass'", "'palia-eac-bypass'"],
];
for (const [from, to] of GLOBAL_SLUG_REPLACEMENTS) {
	routing = routing.split(from).join(to);
}
// unlock-all slug tail only (avoid breaking unlock-all-trucos-palia keys)
routing = routing.replace(/'palia-unlock-all'/g, "'palia-unlock-all-guide'");

writeFileSync(ROUTING, routing);

let redirects = readFileSync(REDIRECTS, 'utf8');
const cannibalMarker = '# Auto-generated cannibal locale redirects';
const cannibalStart = redirects.indexOf(cannibalMarker);
if (cannibalStart >= 0) {
	const lineStart = redirects.lastIndexOf('\n', cannibalStart);
	redirects = redirects.slice(0, lineStart >= 0 ? lineStart : cannibalStart).trimEnd() + '\n';
}

const legacyMarker = '# Palia slug migrations (unique URL per page)';
if (!redirects.includes(legacyMarker)) {
	const legacyLines = [legacyMarker, ...LEGACY_EN.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`])];
	redirects = `${redirects.trimEnd()}\n\n${legacyLines.join('\n')}\n`;
}

writeFileSync(REDIRECTS, redirects);
console.log('Updated routing.ts EN slugs, escape-from prefixes, and legacy redirects.');
