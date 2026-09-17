#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Palia source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['palia-esp', 'palia-esp'],
	['palia-aimbot', 'palia-aimbot'],
	['eac', 'eac'],
	['undetected-palia-cheats', 'undetected-palia-cheats'],
	['palia-wallhack', 'palia-wallhack'],
	['palia-teleport', 'palia-teleport'],
	['palia-cheats-2026', 'palia-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['paliacheats.org', 'paliacheats.org'],
	['trucos-palia', 'trucos-palia'],
	['triche-palia', 'triche-palia'],
	['palia-cheats', 'escape-from-palia-cheats'],
	['cheats-palia', 'cheats-palia'],
	['trucchi-palia', 'trucchi-palia'],
	['cheaty-palia', 'cheaty-palia'],
	['chity-palia', 'chity-palia'],
	['chitov-palia', 'chitov-palia'],
	['chitiv-palia', 'chitiv-palia'],
	['cheatow-palia', 'cheatow-palia'],
	['hile-palia', 'hile-palia'],
	['palia-hile', 'palia-hile'],
	['palia-esp-chity', 'palia-esp-chity'],
	['palia-aimbot-chity', 'palia-aimbot-chity'],
	['unentdeckte-palia-cheats', 'unentdeckte-escape-from-palia-cheats'],
	['cheats-palia-indetectaveis', 'cheats-palia-indetectaveis'],
	['trucchi-palia-indetectabili', 'trucchi-palia-indetectabili'],
	['niewykrywalne-cheats-palia', 'niewykrywalne-cheats-palia'],
	['nedecektiruemye-chity-palia', 'nedecektiruemye-chity-palia'],
	['tespit-edilemeyen-palia-hileleri', 'tespit-edilemeyen-palia-hileleri'],
	['nedecektovani-chity-palia', 'nedecektovani-chity-palia'],
	['cheats-palia-nedetectabile', 'cheats-palia-nedetectabile'],
	['basta-palia-cheats', 'basta-escape-from-palia-cheats'],
	['eac-bypass-trucos-palia', 'eac-bypass-trucos-palia'],
	['eac-bypass-triche-palia', 'eac-bypass-triche-palia'],
	['eac-bypass-cheats-palia', 'eac-bypass-cheats-palia'],
	['eac-bypass-chity-palia', 'eac-bypass-chity-palia'],
	['eac-bypass-palia', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-palia-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-palia-cheats-hero.webp',
	'palia-esp': '/images/escape-from-palia-cheats-esp-wallhack.webp',
	'palia-aimbot': '/images/escape-from-palia-cheats-aimbot-combat.webp',
	features: '/images/escape-from-palia-cheats-package.webp',
	pricing: '/images/escape-from-palia-cheats-cover.webp',
	setup: '/images/palia-loadout-builder.webp',
	updates: '/images/palia-header-art.webp',
	faq: '/images/palia-squad-fight.webp',
	support: '/images/escape-from-palia-cheats-package.webp',
	undetected: '/images/palia-battle-royale-combat.webp',
	wallhack: '/images/escape-from-palia-cheats-esp-wallhack.webp',
	radar: '/images/palia-player-esp.webp',
	'eac': '/images/palia-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-palia-cheats-hero.webp',
	privacy: '/images/escape-from-palia-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-palia-cheats-cover.webp',
	terms: '/images/escape-from-palia-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'palia-esp', 'palia-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'palia-esp' | 'palia-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
