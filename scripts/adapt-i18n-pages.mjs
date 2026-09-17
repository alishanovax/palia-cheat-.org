#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Palia source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['palia-esp', 'palia-esp'],
	['palia-aimbot', 'palia-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-palia-cheats', 'undetected-palia-cheats'],
	['palia-wallhack', 'palia-wallhack'],
	['palia-teleport', 'palia-teleport'],
	['palia-cheats-2026', 'palia-cheats-2026'],
	['escape-from-palia-cheats', 'escape-from-palia-cheats'],
	['escape-from-palia', 'palia'],
	['Palia', 'Palia'],
	['Palia', 'Palia'],
	['Palia Cheats', 'Palia Cheats'],
	['Palia cheats', 'Palia cheats'],
	['Palia cheat', 'Palia cheat'],
	['Palia ESP', 'Palia ESP'],
	['Palia Aimbot', 'Palia Aimbot'],
	['Palia wallhack', 'Palia wallhack'],
	['Palia radar', 'Palia radar'],
	['Palia firefights', 'Palia firefights'],
	['Palia combat', 'Palia combat'],
	['Palia patches', 'Palia patches'],
	['Palia updates', 'Palia updates'],
	['Palia setup', 'Palia setup'],
	['Palia license', 'Palia license'],
	['Palia licenses', 'Palia licenses'],
	['Palia sessions', 'Palia sessions'],
	['in Palia', 'in Palia'],
	['for Palia', 'for Palia'],
	['Palia on', 'Palia on'],
	['Palia or', 'Palia or'],
	['Palia\'s', 'Palia\'s'],
	['Palia ', 'Palia '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['EAC maintenance', 'EAC maintenance'],
	['EAC bypass', 'EAC bypass'],
	['EAC Bypass', 'EAC Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@paliacheats.org', 'support@paliacheats.org'],
	['Kilima Village, Bahari Bay, and Akwinduu', 'Kilima Village, Bahari Bay, and Akwinduu'],
	['Kilima Village, Bahari Bay and Akwinduu', 'Kilima Village, Bahari Bay and Akwinduu'],
	['fishing sessions', 'fishing sessions'],
	['fishing session', 'fishing session'],
	['game sessions', 'game sessions'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['fishing timer', 'fishing timer'],
	['open-world exploration and multiplayer sessions', 'open-world exploration and multiplayer sessions'],
	['open-world exploration and multiplayer sessions', 'open-world exploration and multiplayer sessions'],
	['Kilima & Bahari', 'Kilima & Bahari'],
	['rare resources', 'rare resources'],
	['rare resources', 'rare resources'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Palia combat pace'],
	['COD', 'Palia'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Palia Cheats',
	game: 'Palia',
	checkout: 'checkout',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Kilima Village, Bahari Bay, and Akwinduu'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
