#!/usr/bin/env node
/**
 * Import Palia gameplay screenshots → WebP + responsive variants in public/images/.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = path.join(
	process.env.USERPROFILE ?? '',
	'.cursor',
	'projects',
	'c-Users-JUMBO-COMPUTERS-Desktop-warzonecheats-cc',
	'assets',
);
const OUT = path.join(ROOT, 'public', 'images');

/** Raw Palia screenshots + marketing overlay shots. */
const HERO_VALLEY = {
	file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-71104d6d-cff8-4272-a109-cac0c95d6eaa.jpg',
	base: 'palia-gameplay-hero-valley',
	hero: true,
};

const HERO_NIGHT = {
	file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-8bbeb4be-6f78-4da4-beac-9f024676b4fc.jpg',
	base: 'palia-gameplay-hero-night',
	hero: true,
};

const SOURCES = [
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-184deeca-8fea-45ed-a6ba-454d7cd175eb.png',
		base: 'palia-gameplay-kilima-village',
		hero: true,
	},
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-11aabf96-dc37-40bc-9bb7-5ec4bff5e2b6.jpg',
		base: 'palia-gameplay-kilima-panorama',
		hero: false,
	},
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-5adc3189-4505-4388-b421-79fdd7918033.png',
		base: 'palia-gameplay-homestead',
		hero: false,
	},
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-86dd0449-7b6d-4903-b0d2-22da6eda1ca5.png',
		base: 'palia-gameplay-housing-interior',
		hero: false,
	},
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-a80a219a-5b29-41dc-85fe-5160d8957c82.png',
		base: 'palia-gameplay-bahari-landscape',
		hero: false,
	},
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-6ca89afd-3786-419e-b0b4-96c9e405eb82.png',
		base: 'palia-gameplay-ore-mining',
		hero: false,
	},
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-3c74b55d-1438-47fd-9404-1201e6e2f1b0.jpg',
		base: 'palia-gameplay-foraging',
		hero: false,
	},
	{
		file: 'c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_7d97b0d0c1a6fd832507589de8fffcff_images_image-4f3e9fff-d0f5-462e-ac11-de78bc5baa78.png',
		base: 'palia-gameplay-esp-overlay',
		hero: false,
	},
	HERO_VALLEY,
	HERO_NIGHT,
];

const HERO_WIDTHS = [640, 1024, 1536];
const CONTENT_WIDTHS = [480, 640, 960];

async function writeVariants(master, base, widths) {
	const meta = await sharp(master).metadata();
	for (const width of widths) {
		if (meta.width && width > meta.width) {
			const buf = await sharp(master).webp({ quality: 80, effort: 6 }).toBuffer();
			await writeFile(path.join(OUT, `${base}-${width}w.webp`), buf);
			console.log(`  → ${base}-${width}w.webp (master copy)`);
			continue;
		}
		const q = width <= 640 ? 72 : 80;
		const buffer = await sharp(master)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: q, effort: 6 })
			.toBuffer();
		await writeFile(path.join(OUT, `${base}-${width}w.webp`), buffer);
		console.log(`  → ${base}-${width}w.webp (${buffer.length} bytes)`);
	}
}

for (const { file, base, hero } of SOURCES) {
	const source = path.join(ASSETS, file);
	const master = await sharp(source).webp({ quality: 84, effort: 6 }).toBuffer();
	const masterPath = path.join(OUT, `${base}.webp`);
	await writeFile(masterPath, master);
	console.log(`Wrote ${base}.webp (${master.length} bytes)`);
	const widths = hero
		? [...new Set([...CONTENT_WIDTHS, ...HERO_WIDTHS])].sort((a, b) => a - b)
		: CONTENT_WIDTHS;
	await writeVariants(master, base, widths);
}

/** Responsive variants for existing cheat-overlay marketing shots. */
const OVERLAY_MASTERS = [
	'palia-cheats-esp',
	'palia-cheats-aimbot',
	'palia-cheats-wallhack',
	'palia-cheats-radar',
	'palia-cheats-raid',
	'palia-cheats-cover',
	'palia-cheats-aimbot-view',
	'palia-player-esp',
	'palia-bahari-bay',
	'palia-housing',
	'palia-cheats-combat',
	'palia-cheats-hero',
];

for (const base of OVERLAY_MASTERS) {
	const masterPath = path.join(OUT, `${base}.webp`);
	try {
		const master = await sharp(masterPath).webp().toBuffer();
		await writeVariants(master, base, CONTENT_WIDTHS);
	} catch {
		console.warn(`Skip variants — missing ${base}.webp`);
	}
}

console.log('Palia gameplay import complete.');
