#!/usr/bin/env node
/**
 * Generate missing 480w + 960w WebP variants for all Palia master images.
 * Prevents blank cards when contentImageSrc used to point at missing -480w files.
 */
import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const OUT = path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), 'public', 'images');
const WIDTHS = [480, 960];

const files = new Set(await readdir(OUT));
const masters = [...files].filter(
	(f) => f.endsWith('.webp') && !/-\d+w\.webp$/i.test(f) && f.startsWith('palia'),
);

let created = 0;
for (const masterFile of masters) {
	const base = masterFile.replace(/\.webp$/i, '');
	const masterPath = path.join(OUT, masterFile);
	const master = await sharp(masterPath).webp().toBuffer();
	const meta = await sharp(master).metadata();

	for (const width of WIDTHS) {
		const variant = `${base}-${width}w.webp`;
		if (files.has(variant)) continue;
		if (meta.width && width > meta.width) {
			await writeFile(path.join(OUT, variant), master);
		} else {
			const buf = await sharp(master)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: width <= 640 ? 72 : 80, effort: 6 })
				.toBuffer();
			await writeFile(path.join(OUT, variant), buf);
		}
		created++;
		console.log(`  → ${variant}`);
	}
}

console.log(`ensure-image-variants: ${created} file(s) created`);
