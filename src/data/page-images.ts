import { siteConfig } from './site';
import { descriptiveAlt, paliaImages } from './palia';
import { pageIds, type PageId } from './i18n/routing';

/** Rotating Palia gameplay shots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	paliaImages.espWallhack,
	paliaImages.playerEsp,
	paliaImages.aimbotCombat,
	paliaImages.aimbotSkeleton,
	paliaImages.cover,
	paliaImages.espOverlay,
] as const;

/**
 * One primary crawl/OG photo per product page — Palia gameplay screenshots.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/palia-gameplay-hero-night-1024w.webp',
	'palia-esp': '/images/palia-cheats-esp.webp',
	'palia-aimbot': '/images/palia-cheats-aimbot.webp',
	features: '/images/palia-gameplay-housing-interior.webp',
	pricing: '/images/palia-gameplay-esp-overlay.webp',
	setup: '/images/palia-gameplay-housing-interior.webp',
	updates: '/images/palia-gameplay-kilima-village.webp',
	faq: '/images/palia-gameplay-homestead.webp',
	support: '/images/palia-gameplay-kilima-village.webp',
	undetected: '/images/palia-gameplay-kilima-village.webp',
	wallhack: '/images/palia-cheats-wallhack.webp',
	radar: '/images/palia-cheats-radar.webp',
	eac: '/images/palia-gameplay-kilima-village.webp',
	'cheats-2026': '/images/palia-gameplay-homestead.webp',
	hacks: '/images/palia-gameplay-esp-overlay.webp',
	'cheat-download': '/images/palia-gameplay-homestead.webp',
	'mod-menu': '/images/palia-gameplay-housing-interior.webp',
	'soft-aim': '/images/palia-gameplay-bahari-landscape.webp',
	'best-cheats': '/images/palia-gameplay-homestead.webp',
	'aimbot-hack': '/images/palia-gameplay-bahari-landscape.webp',
	'esp-hack': '/images/palia-gameplay-ore-mining.webp',
	'unlock-all': '/images/palia-gameplay-housing-interior.webp',
	privacy: '/images/palia-gameplay-kilima-village.webp',
	refund: '/images/palia-gameplay-homestead.webp',
	terms: '/images/palia-gameplay-kilima-village.webp',
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const caption = descriptiveAlt(src);
	return {
		src,
		url: absoluteImageUrl(src),
		title: caption,
		caption,
	};
}

/** Per-page sitemap / OG labels — derived from the screenshot, not SEO copy. */
export function pageSitemapImageLabels(pageId: PageId): { title: string; caption: string } {
	const caption = descriptiveAlt(pageImageSrcById[pageId]);
	return { title: caption, caption };
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) | 0;
	return crawlPhotoPool[Math.abs(hash) % crawlPhotoPool.length];
}

export const defaultCrawlImageSrc = pageImageSrcById.home;

/** Reviews index hero / OG image — sharp Palia gameplay (not compressed overlay art). */
export const reviewsIndexImageSrc = paliaImages.kilimaPanorama;

/** Stable crawl photo + metadata for FAQ and review detail pages. */
export function crawlPhotoMeta(seed: string) {
	const src = pickCrawlPhoto(seed);
	const caption = descriptiveAlt(src);
	return {
		src,
		url: absoluteImageUrl(src),
		title: caption,
		caption,
	};
}
