/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Strip variant suffix to get master asset basename (e.g. palia-gameplay-ore-mining). */
export function contentImageBasename(baseSrc: string): string {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return baseSrc;
	const name = match[2].replace(/-(?:480|640|960|1024|1400|1536)w$/i, '');
	return `${match[1]}${name}.webp`;
}

/** Default img src — master WebP (always exists; srcset serves smaller variants). */
export function contentImageSrc(baseSrc: string): string {
	return contentImageBasename(baseSrc);
}

/** Srcset: 480w + 960w + master (master is fallback if a variant is missing). */
export function contentSrcSet(baseSrc: string): string | undefined {
	const master = contentImageBasename(baseSrc);
	const match = master.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	const widths: ResponsiveWidth[] = [
		...contentWidths.map((width) => ({ src: `${dir}${name}-${width}w.webp`, width })),
		{ src: master, width: 1280 },
	];
	return buildSrcSet(widths);
}

/**
 * Homepage / banner hero — Palia night valley artwork.
 * Wide bar crops with object-fit: cover.
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/palia-gameplay-hero-night-640w.webp', width: 640 },
	{ src: '/images/palia-gameplay-hero-night-1024w.webp', width: 1024 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — night hero WebP. */
export const heroSrc = '/images/palia-gameplay-hero-night-1024w.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** LCP preload — same compressed WebP. */
export const heroPreloadSrc = heroSrc;
export const heroMimeType = 'image/webp';

/** Native master dimensions (layout / CLS). */
export const heroWidth = 1024;
export const heroHeight = 512;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';

/** Full-width store preview on homepage — must match rendered width, not gallery tiles. */
export const shopPreviewSizes = '(max-width: 900px) 100vw, 1024px';

const shopPreviewResponsive: ResponsiveWidth[] = [
	{ src: '/images/palia-cheats-hero-640w.webp', width: 640 },
	{ src: '/images/palia-cheats-hero-1024w.webp', width: 1024 },
	{ src: '/images/palia-cheats-hero-1536w.webp', width: 1536 },
];

export const shopPreviewSrc = '/images/palia-cheats-hero-1024w.webp';
export const shopPreviewSrcSet = buildSrcSet(shopPreviewResponsive);
export const shopPreviewWidth = 1024;
export const shopPreviewHeight = 410;
export const productThumbSizes = '160px';
