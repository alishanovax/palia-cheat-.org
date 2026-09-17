import sharp from 'sharp';

const heroSrc = 'public/images/palia-cheats-hero-source.jpg';
const housingSrc = 'public/images/palia-housing-plot.jpg';

const meta = await sharp(heroSrc).metadata();
const w = meta.width ?? 1920;
const h = meta.height ?? 1080;

const cropH = Math.round(w / 2.5);
const cropTop = Math.max(0, Math.round(h * 0.08));

await sharp(heroSrc)
	.extract({ left: 0, top: cropTop, width: w, height: Math.min(cropH, h - cropTop) })
	.webp({ quality: 85 })
	.toFile('public/images/palia-cheats-hero.webp');

for (const size of [640, 1024, 1536]) {
	await sharp('public/images/palia-cheats-hero.webp')
		.resize(size)
		.webp({ quality: 82 })
		.toFile(`public/images/palia-cheats-hero-${size}w.webp`);
}

await sharp('public/images/palia-cheats-hero.webp').png().toFile('public/images/palia-cheats-hero-full.png');

await sharp(housingSrc)
	.resize(1400, null, { withoutEnlargement: true })
	.webp({ quality: 82 })
	.toFile('public/images/palia-housing-plot.webp');

for (const size of [480, 960]) {
	await sharp('public/images/palia-housing-plot.webp')
		.resize(size)
		.webp({ quality: 82 })
		.toFile(`public/images/palia-housing-plot-${size}w.webp`);
}

const heroMeta = await sharp('public/images/palia-cheats-hero.webp').metadata();
console.log(`Hero banner: ${heroMeta.width}x${heroMeta.height}`);
console.log('Done — user hero + housing plot ready.');
