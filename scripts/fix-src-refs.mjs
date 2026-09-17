#!/usr/bin/env node
/** Final pass: fix remaining Palia references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['paliaImages', 'paliaImages'],
	["from '../data/palia'", "from '../data/palia'"],
	["from './palia'", "from './palia'"],
	['/undetected-palia-cheats/', '/undetected-palia-cheats/'],
	['/palia-wallhack/', '/palia-wallhack/'],
	['/palia-teleport/', '/palia-teleport/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/palia-cheats-2026/', '/palia-cheats-2026/'],
	['/palia-aimbot/', '/palia-aimbot/'],
	['/palia-esp/', '/palia-esp/'],
	['/palia-cheats/', '/palia-esp/'],
	['Palia Cheats', 'Palia Cheats'],
	['Palia cheats', 'Palia cheats'],
	['Palia wallhack', 'Palia wallhack'],
	['Palia radar', 'Palia radar'],
	['Palia Aimbot', 'Palia Aimbot'],
	['Palia ESP', 'Palia ESP'],
	['Palia', 'Palia'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['paliacheats.org', 'paliacheats.org'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
