#!/usr/bin/env node
/**
 * Rewrites leftover Tarkov/EFT phrasing to Palia search intent in pages-en.mjs.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

const REPLACEMENTS = [
	[/escape from palia cheats/gi, 'palia cheats'],
	[/PMC sessions? and scav-?runs?/gi, 'Kilima and Bahari Bay sessions'],
	[/PMC sessions?/gi, 'multiplayer sessions'],
	[/scav-?runs?/gi, 'co-op sessions'],
	[/scav run/gi, 'fishing run'],
	[/Scavs?/gi, 'wildlife'],
	[/boss(es)?/gi, 'rare nodes'],
	[/extract(s)?/gi, 'map zones'],
	[/Customs/gi, 'Kilima Village'],
	[/Woods/gi, 'Bahari Bay'],
	[/Factory/gi, 'housing plot'],
	[/dorms/gi, 'village center'],
	[/Battlestate Games/gi, 'Singularity 6'],
	[/2D radar/gi, 'wallhack'],
	[/radar hack/gi, 'wallhack'],
	[/radar overlays?/gi, 'wallhack overlays'],
	[/radar-style/gi, 'wallhack'],
	[/, radar/gi, ', wallhack'],
	[/radar and/gi, 'wallhack and'],
	[/and radar/gi, 'and wallhack'],
	[/loot markers/gi, 'resource markers'],
	[/player boxes/gi, 'resource ESP'],
	[/enemy players?/gi, 'ores, fish, and insects'],
	[/enemy squads?/gi, 'resource nodes'],
	[/squad fights?/gi, 'fishing sessions'],
	[/firefights?/gi, 'hunting sessions'],
	[/ARs?, SMGs?, and bolt-actions/gi, 'bows, rods, and tools'],
	[/bolt-actions?/gi, 'hunting tools'],
	[/TTK windows/gi, 'catch windows'],
	[/wipe/gi, 'season'],
	[/queue(ing)?/gi, 'logging in'],
];

let text = await readFile(PAGES_EN, 'utf8');

// Home + key intros — explicit Palia intent
text = text.replace(
	/home: \{[\s\S]*?intro:\s*'[^']*',/,
	`home: {
		title: 'Buy Palia Cheats | Best PC Cheat Menu $35',
		description:
			'Buy palia cheats for Windows PC — ESP, wallhack, fishing tools, teleport, and cheat menu from $35. Instant delivery.',
		h1: 'Buy Palia Cheats for PC',
		intro:
			'Buy palia cheats with resource ESP, wallhack, fishing tools, and teleport in one license. Built for Kilima Village and Bahari Bay on Windows PC with Easy Anti-Cheat maintenance.',`,
);

for (const [pattern, replacement] of REPLACEMENTS) {
	text = text.replace(pattern, replacement);
}

await writeFile(PAGES_EN, text, 'utf8');
console.log('Updated pages-en.mjs with Palia search intent.');
