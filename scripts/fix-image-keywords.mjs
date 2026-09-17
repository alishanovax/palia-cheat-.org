#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'palia cheats', espWallhack: 'palia cheats wallhack', aimbotCombat: 'palia cheats aimbot', squadFight: 'palia cheats', playerEsp: 'palia cheats esp', headerArt: 'palia cheats aimbot', cheatsPackage: 'palia cheats radar', rebootFight: 'palia cheats aimbot', battleRoyale: 'palia cheats', battleRoyaleIsland: 'palia cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Palia ESP player tags hack'", "imageAlt: 'palia cheats esp'"],
	["imageAlt: 'Palia ESP radar hack'", "imageAlt: 'palia cheats radar'"],
	["imageAlt: 'Palia aimbot sniper kill'", "imageAlt: 'palia cheats aimbot'"],
	["imageAlt: 'Palia aimbot skeleton targeting'", "imageAlt: 'palia cheats aimbot'"],
	["imageAlt: 'Palia cheats ADS combat'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats setup PC activation'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats updates EAC maintenance'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats FAQ ESP aimbot'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats support license help'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Undetected palia cheats ESP wallhack'", "imageAlt: 'undetected palia cheats'"],
	["imageAlt: 'Palia wallhack skeleton ESP'", "imageAlt: 'palia cheats wallhack'"],
	["imageAlt: 'EAC bypass palia ESP aimbot'", "imageAlt: 'palia cheats eac'"],
	["imageAlt: 'Palia cheats 2026 ESP aimbot'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats combat aimbot'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheat download ESP aimbot'", "imageAlt: 'palia cheats download'"],
	["imageAlt: 'Palia mod menu ESP aimbot'", "imageAlt: 'palia cheats mod menu'"],
	["imageAlt: 'Palia soft aim aimbot settings'", "imageAlt: 'palia cheats soft aim'"],
	["imageAlt: 'Best palia cheats 2026 ESP'", "imageAlt: 'best palia cheats'"],
	["imageAlt: 'Palia aimbot hack combat'", "imageAlt: 'palia cheats aimbot'"],
	["imageAlt: 'Palia ESP hack wallhack'", "imageAlt: 'palia cheats esp'"],
	["imageAlt: 'Palia unlock all ESP aimbot guide'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats privacy policy'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats refund policy'", "imageAlt: 'palia cheats'"],
	["imageAlt: 'Palia cheats terms of use'", "imageAlt: 'palia cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Palia ${meta.altKeyword}`")
	.join("imageAlt: 'palia cheats'")
	.split("galleryTitle: `Palia Cheats ${topicName}`")
	.join("galleryTitle: 'palia cheats'")
	.split("imageAlt: `Palia cheats ${kind} policy`")
	.join("imageAlt: 'palia cheats'")
	.split("galleryTitle: `Palia Cheats ${kind} resources`")
	.join("galleryTitle: 'palia cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
