import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { buildOverlaySvg } from './palia-hack-overlays.mjs';

const imagesDir = path.resolve('public/images');
const publicDir = path.resolve('public');

/** Verified IGN Palia screenshot CDN paths. */
const ZA = 'https://sm.ign.com/t/ign_za';
const AP = 'https://sm.ign.com/t/ign_ap';

/**
 * Palia cheats image pipeline:
 * 1. Download real Palia gameplay from IGN
 * 2. Composite ESP / menu overlays for palia cheats marketing
 */
const KEYWORD_ASSETS = [
	{
		file: 'palia-cheats-hero.webp',
		url: `${ZA}/gallery/p/palia-slid/palia-slideshow_shj1.1400.jpg`,
		overlay: 'hero',
	},
	{
		file: 'palia-cheats-aimbot.webp',
		url: `${ZA}/photo/default/palia-media-kit-multiplayer-hunting-1690857654000_6ef2.1400.jpg`,
		overlay: 'aimbot',
	},
	{
		file: 'palia-cheats-esp.webp',
		url: `${ZA}/photo/default/palia-media-kit-fishing-1690857653992_azdq.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'palia-cheats-wallhack.webp',
		url: `${ZA}/photo/default/palia-media-kit-insect-catching-1690857653999_bqa6.1400.jpg`,
		overlay: 'wallhack',
	},
	{
		file: 'palia-cheats-aimbot-view.webp',
		url: `${ZA}/photo/default/palia-media-kit-glider-1690857653993_tmff.1400.jpg`,
		overlay: 'menu',
	},
	{
		file: 'palia-cheats-radar.webp',
		url: `${ZA}/photo/default/palia-media-kit-town-square-1690857654006_26ns.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'palia-cheats-raid.webp',
		url: `${ZA}/photo/default/palia-media-kit-gardening-1690857654008_3yhh.1400.png`,
		overlay: 'hero',
	},
	{
		file: 'palia-cheats-cover.webp',
		url: `${AP}/gallery/p/palia-scre/palia-screenshots_rtq2.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'palia-header-art.webp',
		url: `${ZA}/photo/default/palia-media-kit-crafting-1690857654006_95s4.1400.jpg`,
		overlay: 'menu',
	},
	{
		file: 'palia-player-esp.webp',
		url: `${ZA}/photo/default/palia-media-kit-multiplayer-foraging-1690857654000_zppr.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'palia-bahari-bay.webp',
		url: `${ZA}/photo/default/palia-media-kit-bahari-bay-v1-1690857653991_wb66.1400.png`,
		overlay: 'hero',
	},
	{
		file: 'palia-housing.webp',
		url: `${ZA}/photo/default/palia-media-kit-housing-interiors-1-1690857653995_tk1e.1400.jpg`,
		overlay: 'menu',
	},
];

const REMOVE_PATTERNS = [/^fortnite-/, /^tarkov-/, /^palia-cheats-logo/];

async function fetchBase(url) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function cleanOldImages() {
	try {
		const files = await readdir(imagesDir);
		for (const file of files) {
			if (REMOVE_PATTERNS.some((p) => p.test(file))) {
				await unlink(path.join(imagesDir, file));
			}
		}
	} catch {
		// ignore
	}
}

async function main() {
	await mkdir(imagesDir, { recursive: true });
	await cleanOldImages();

	for (const asset of KEYWORD_ASSETS) {
		console.log(`Fetching ${asset.file}...`);
		const base = await fetchBase(asset.url);
		const resized = sharp(base).resize(1400, null, { withoutEnlargement: true });
		const meta = await resized.metadata();
		const w = meta.width ?? 1400;
		const h = meta.height ?? 788;
		const overlay = Buffer.from(buildOverlaySvg(w, h, asset.overlay));
		const outPath = path.join(imagesDir, asset.file);
		await sharp(await resized.toBuffer())
			.composite([{ input: overlay, top: 0, left: 0 }])
			.webp({ quality: 82 })
			.toFile(outPath);
		console.log(`  → ${outPath}`);
	}

	// Hero responsive sizes
	const heroPath = path.join(imagesDir, 'palia-cheats-hero.webp');
	for (const w of [640, 1024, 1536]) {
		const out = path.join(imagesDir, `palia-cheats-hero-${w}w.webp`);
		await sharp(heroPath).resize(w).webp({ quality: 82 }).toFile(out);
	}
	const heroPng = path.join(imagesDir, 'palia-cheats-hero-full.png');
	await sharp(heroPath).png().toFile(heroPng);
	await sharp(heroPath).resize(1024).webp({ quality: 82 }).toFile(path.join(imagesDir, 'palia-cheats-hero-1024w.webp'));

	// Download store logo (navbar / favicon) — no brand name in alt
	const logoUrl = 'https://zadeyo.com/_next/image?url=%2Frt-removebg-preview.png&w=128&q=75';
	const logoBuf = await fetchBase(logoUrl);
	await sharp(logoBuf).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(imagesDir, 'palia-cheats-logo.png'));
	await sharp(path.join(imagesDir, 'palia-cheats-logo.png')).webp({ quality: 90 }).toFile(path.join(imagesDir, 'palia-cheats-logo.webp'));

	// Favicon
	await sharp(logoBuf).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));

	console.log('\nDone — Palia images ready.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
