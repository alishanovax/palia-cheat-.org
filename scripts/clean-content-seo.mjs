#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(ROOT, 'src/data/i18n/content.generated.ts');

const replacements = [
	['before you logging in', 'before you log in'],
	['patch-day logging ins', 'before you log in on patch day'],
	['href=\\"/download/\\"', 'href=\\"/setup/\\"'],
	['href=\\"/best/\\"', 'href=\\"/cheats/\\"'],
	['live matches', 'co-op sessions'],
	['competitive lobbies', 'co-op sessions'],
	[
		'squad pushes and third-party scenarios',
		'long farming routes between villages',
	],
	[
		'long-range AR fights with close-quarters SMG pushes',
		'hunting and fishing minigames with soft aim profiles',
	],
	[
		'On session, co-op sessions, and co-op sessions, that visibility gap is often the difference between a clean third-party and a seasond squad.',
		'In co-op sessions, ESP helps you spot ores, fish, and insects before you commit to a route.',
	],
	[
		'On session, co-op sessions, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a seasond squad.',
		'In co-op sessions, ESP helps you spot ores, fish, and insects before you commit to a route.',
	],
	['Palia Cheats | Palia Cheats for Windows PC', 'Palia Cheats | Palia Hub for Windows PC'],
	[
		'Still researching? Compare <a href=\\"/download/\\">download</a> and <a href=\\"/best/\\">best cheats</a> guides, then open Store when you are ready.',
		'Still researching? Compare <a href=\\"/setup/\\">setup</a> and <a href=\\"/features/\\">features</a>, then open Cheats when you are ready.',
	],
	["Singularity 6' rules", 'Singularity 6 rules'],
	['See players through walls', 'See resources through walls'],
	[
		'spot players and wildlife before they push your angle',
		'spot ores, fish, and insects before you commit to a route',
	],
	['Team and enemy colour coding', 'Category colour coding'],
	['information wars', 'farming routes'],
	['mid-match', 'mid-session'],
	['AR / SMG / hunting tools', 'bows, rods, and hunting tools'],
	['long-range AR beams and close-quarters room clears', 'hunting and fishing minigames'],
	['AR tuning from close-quarters SMG settings', 'bow and rod profile tuning'],
	['vehicle cues', 'map zone cues'],
	['third-party tools', 'unofficial tools'],
	['accent: "2026 — Undetected ESP, Aimbot & Wallhack"', 'accent: "Palia cheats hub for Windows PC"'],
	['accentShort: "Undetected palia cheats 2026"', 'accentShort: "Guides, status & plans"'],
	[
		'subtitle: "Palia cheats with ESP and wallhack for Windows PC — soft aim and EAC maintenance included."',
		'subtitle: "Hub for Palia cheats on Windows PC — compare features, setup guides, and live status. Buy on the Cheats page when you are ready."',
	],
	[
		'statusNote: "Palia Cheats — undetected palia cheats live for Palia on Windows PC."',
		'statusNote: "Palia Cheats is live for Palia on Windows PC."',
	],
	['statusBadge: "Undetected palia cheats"', 'statusBadge: "Live status"'],
	[
		'tagline: "Undetected Palia cheats for PC.\\nESP, wallhack & aimbot."',
		'tagline: "Palia cheats hub for Windows PC.\\nFeatures, setup, and live status."',
	],
	[
		'intro: "Your hub for palia cheats on Windows PC — compare features, guides, and patch status before checkout on <a href=\\"/cheats/\\">Cheats</a>."',
		'intro: "Your hub for Palia on Windows PC — compare features, guides, and status before checkout on <a href=\\"/cheats/\\">Cheats</a>."',
	],
];

let content = await readFile(target, 'utf8');
for (const [from, to] of replacements) {
	content = content.split(from).join(to);
}
await writeFile(target, content);
console.log('clean-content-seo: updated', target);
