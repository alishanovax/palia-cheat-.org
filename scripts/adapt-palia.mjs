#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Palia Cheats (paliacheats.org)
 * Run from project root: node scripts/adapt-palia.mjs
 */
import { readFile, writeFile, readdir, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'palia-aimbot'],
	['tarkov-esp', 'palia-esp'],
	['tarkov-wallhack', 'palia-wallhack'],
	['tarkov-radar-hack', 'palia-teleport'],
	['undetected-tarkov-cheats', 'undetected-palia-cheats'],
	['tarkov-cheats-2026', 'palia-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'palia-cheats'],
	['tarkov-cheat-download', 'palia-cheat-download'],
	['tarkov-mod-menu', 'palia-cheat-menu'],
	['tarkov-soft-aim', 'palia-soft-aim'],
	['best-tarkov-cheats', 'best-palia-cheats'],
	['tarkov-aimbot-hack', 'palia-aimbot-hack'],
	['tarkov-esp-hack', 'palia-esp-hack'],
	['tarkov-unlock-all', 'palia-unlock-all'],
	['blog', 'forum'],
];

const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://paliacheats.org'],
	['https://www.tarkovcheats.org', 'https://www.paliacheats.org'],
	['www.tarkovcheats.org', 'www.paliacheats.org'],
	['tarkovcheats.org', 'paliacheats.org'],
	['support@tarkovcheats.org', 'support@paliacheats.org'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fpalia'],
	['/products/escape-from-tarkov', '/products/palia'],
	['project-name=tarkovcheats', 'project-name=paliacheats'],
	['name = "tarkovcheats"', 'name = "paliacheats"'],
	['"name": "tarkov-cheats"', '"name": "palia-cheats"'],
	['tarkov-esp-player-tags', 'palia-esp-resource-tags'],
	['tarkov-wallhack-skeleton', 'palia-wallhack-overlay'],
	['tarkov-aimbot-sniper', 'palia-aimbot-hunting'],
	['tarkov-aimbot-skeleton', 'palia-aimbot-overlay'],
	['tarkov-esp-radar', 'palia-esp-radar'],
	['tarkov-cheats-combat', 'palia-cheats-gameplay'],
	['tarkov-cheats-logo', 'palia-cheats-logo'],
	['tarkov-hero-banner', 'palia-hero-banner'],
	['tarkov-hero-ghost', 'palia-hero-ghost'],
	['tarkov-hero-source', 'palia-hero-source'],
	['undetected-tarkov-cheats', 'undetected-palia-cheats'],
	['best-tarkov-cheats', 'best-palia-cheats'],
	['tarkov-cheat-download', 'palia-cheat-download'],
	['tarkov-cheats-2026', 'palia-cheats-2026'],
	['tarkov-radar-hack', 'palia-teleport'],
	['tarkov-aimbot-hack', 'palia-aimbot-hack'],
	['tarkov-esp-hack', 'palia-esp-hack'],
	['tarkov-unlock-all', 'palia-unlock-all'],
	['tarkov-soft-aim', 'palia-soft-aim'],
	['tarkov-mod-menu', 'palia-cheat-menu'],
	['tarkov-wallhack', 'palia-wallhack'],
	['tarkov-cheats', 'palia-cheats'],
	['tarkov-aimbot', 'palia-aimbot'],
	['tarkov-esp', 'palia-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['pageId="battleye"', 'pageId="eac"'],
	['pageId: \'battleye\'', "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'palia-cheats-buy'],
	['Escape from Tarkov', 'Palia'],
	['Escape From Tarkov', 'Palia'],
	['Tarkov Cheats', 'Palia Cheats'],
	['Tarkov cheats', 'Palia cheats'],
	['Tarkov cheat', 'Palia cheat'],
	['Tarkov hacks', 'Palia cheats'],
	['Tarkov hack', 'Palia cheat'],
	['TarkovCheatsSite', 'PaliaCheatsSite'],
	['Tarkov Intel', 'Palia Forum'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'EAC maintenance'],
	['BattlEye bypass', 'EAC bypass'],
	['BattlEye Bypass', 'EAC Bypass'],
	['BattlEye patches', 'EAC patches'],
	['BattlEye patch', 'EAC patch'],
	['BattlEye updates', 'EAC updates'],
	['BattlEye update', 'EAC update'],
	['after BattlEye', 'after EAC'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['tarkov cheats', 'palia cheats'],
	['tarkov cheat', 'palia cheat'],
	['Customs, Woods, and Streets of Tarkov', 'Kilima Village, Bahari Bay, and Akwinduu'],
	['Customs, Woods and Streets of Tarkov', 'Kilima Village, Bahari Bay and Akwinduu'],
	['extract fights', 'fishing sessions'],
	['extract fight', 'fishing session'],
	['raid rounds', 'game sessions'],
	['PMC raids and Scav runs', 'open-world exploration and multiplayer sessions'],
	['PMC & Scav', 'Kilima & Bahari'],
	['PMC raids and Scav runs', 'open-world exploration and multiplayer sessions'],
	['raid', 'session'],
	['scav run', 'foraging run'],
	['extract and loot markers', 'resource and fishing markers'],
	['high-value loot', 'rare resources'],
	['PMCs', 'players'],
	['extract timer', 'fishing timer'],
	['tarkovImages', 'paliaImages'],
	["from './tarkov'", "from './palia'"],
	["from '../data/tarkov'", "from '../data/palia'"],
	["from '../../data/tarkov'", "from '../../data/palia'"],
	['fetch-tarkov-images', 'fetch-palia-images'],
	['tarkov-hack-overlays', 'palia-hack-overlays'],
	['trucos-tarkov', 'trucos-palia'],
	['triche-tarkov', 'triche-palia'],
	['cheats-tarkov', 'cheats-palia'],
	['trucchi-tarkov', 'trucchi-palia'],
	['cheaty-tarkov', 'cheaty-palia'],
	['chity-tarkov', 'chity-palia'],
	['chitov-tarkov', 'chitov-tarkov'],
	['chitiv-tarkov', 'chitiv-palia'],
	['cheatow-tarkov', 'cheatow-palia'],
	['hile-tarkov', 'hile-palia'],
	['tarkov-hile', 'palia-hile'],
	['Buy Tarkov Cheats', 'Buy Palia Cheats'],
	['Tarkov', 'Palia'],
	['tarkov', 'palia'],
	['/blog/', '/forum/'],
	["rest[0] === 'blog'", "rest[0] === 'forum'"],
	['blogSlug', 'forumSlug'],
	['isBlogIndex', 'isForumIndex'],
	['isBlogPath', 'isForumPath'],
	['getBlogBasePath', 'getForumBasePath'],
	['getBlogLocaleSwitchHref', 'getForumLocaleSwitchHref'],
	['getBlogIndexHreflangAlternates', 'getForumIndexHreflangAlternates'],
	['getBlogPostPath', 'getForumPostPath'],
	['absoluteBlogUrl', 'absoluteForumUrl'],
	['BlogIndexPage', 'ForumIndexPage'],
	['BlogPostPage', 'ForumPostPage'],
	['blogLabel', 'forumLabel'],
	['blogTitle', 'forumTitle'],
	['blogDescription', 'forumDescription'],
	['blogH1', 'forumH1'],
	['blogIntro', 'forumIntro'],
	['blogUi', 'forumUi'],
	['Tarkov Intel blog', 'Palia Forum'],
	['Intel blog', 'Forum'],
	["label: 'Blog'", "label: 'Forum'"],
	["labelKey: 'common.blog'", "labelKey: 'common.forum'"],
	['via checkout Zadeyo', 'via secure checkout'],
	['checkout Zadeyo', 'secure checkout'],
	['Zadeyo checkout', 'secure checkout'],
	['Zadeyo order references', 'order references'],
	['processed by Zadeyo checkout', 'processed by secure checkout'],
	['— checkout via Zadeyo', '— secure checkout'],
	['— checkout en Zadeyo', '— checkout seguro'],
	['Zadeyo', 'checkout'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-warzone.mjs', 'adapt-fortnite.mjs', 'adapt-tarkov.mjs', 'adapt-palia.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
	// Rename [lang]/blog to [lang]/forum
	const langBlog = path.join(ROOT, 'src', 'pages', '[lang]', 'blog');
	const langForum = path.join(ROOT, 'src', 'pages', '[lang]', 'forum');
	try {
		await rename(langBlog, langForum);
		console.log('Renamed [lang]/blog → [lang]/forum');
	} catch (e) {
		console.warn(`Skip [lang]/blog rename: ${e.message}`);
	}
}

async function renameTarkovTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'palia.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → palia.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-palia-images.mjs'],
		['tarkov-hack-overlays.mjs', 'palia-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-palia-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'palia-aimbot': 'palia-aimbot',
		'palia-esp': 'palia-esp',
		'palia-wallhack': 'wallhack',
		'palia-teleport': 'radar',
		'undetected-palia-cheats': 'undetected',
		'palia-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'palia-cheats': 'hacks',
		'palia-cheat-download': 'cheat-download',
		'palia-cheat-menu': 'mod-menu',
		'palia-soft-aim': 'soft-aim',
		'best-palia-cheats': 'best-cheats',
		'palia-aimbot-hack': 'aimbot-hack',
		'palia-esp-hack': 'esp-hack',
		'palia-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'palia');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Palia Cheats (paliacheats.org)...\n');
	await renamePageDirs();
	await renameTarkovTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, fetch images, npm run sync:brand, build.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
