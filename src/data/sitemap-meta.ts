import type { PageId } from './i18n/routing';
import { brandSitemap, sitemapLastmod } from './brand-sitemap';

export type SitemapFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type PageSitemapMeta = {
	priority: number;
	changefreq: SitemapFreq;
	/** Priority for non-English locale URLs in sitemap-i18n.xml */
	i18nPriority: number;
	/** Real content modification date (YYYY-MM-DD) — update when the page content changes. */
	lastmod: string;
};

/**
 * SEO priority and crawl hints per page — keyed by PageId (single source of truth).
 * English URLs use `priority`; localized URLs use `i18nPriority`.
 * `lastmod` reflects when Easy Anti-Cheat page's content actually changed — do NOT reset all
 * pages to the same date on deploy, only bump pages whose content was edited.
 */
export const pageSitemapMeta: Record<PageId, PageSitemapMeta> = {
	home: { priority: 0.82, changefreq: 'daily', i18nPriority: 0.8, lastmod: '2026-09-17' },
	/** Money URL for "palia cheats" */
	hacks: { priority: 1.0, changefreq: 'weekly', i18nPriority: 0.9, lastmod: '2026-09-17' },
	undetected: { priority: 0.88, changefreq: 'weekly', i18nPriority: 0.82, lastmod: '2026-08-13' },
	'cheats-2026': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'cheat-download': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'mod-menu': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'soft-aim': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'best-cheats': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'aimbot-hack': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'esp-hack': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'unlock-all': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	wallhack: { priority: 0.88, changefreq: 'weekly', i18nPriority: 0.82, lastmod: '2026-08-13' },
	radar: { priority: 0.88, changefreq: 'weekly', i18nPriority: 0.82, lastmod: '2026-08-13' },
	'eac': { priority: 0.28, changefreq: 'yearly', i18nPriority: 0.22, lastmod: '2026-08-13' },
	'palia-esp': { priority: 0.92, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-08-13' },
	'palia-aimbot': { priority: 0.92, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-08-13' },
	pricing: { priority: 0.94, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-08-13' },
	features: { priority: 0.85, changefreq: 'weekly', i18nPriority: 0.8, lastmod: '2026-09-17' },
	setup: { priority: 0.88, changefreq: 'weekly', i18nPriority: 0.84, lastmod: '2026-08-13' },
	updates: { priority: 0.93, changefreq: 'daily', i18nPriority: 0.85, lastmod: '2026-09-17' },
	faq: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82, lastmod: '2026-08-13' },
	support: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82, lastmod: '2026-08-13' },
	privacy: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-06-08' },
	refund: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-06-14' },
	terms: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-05-22' },
};

/** Most recent page lastmod — used as the sitemap index <lastmod> for page sitemaps. */
export function latestPageLastmod(): string {
	const fromPages = Object.values(pageSitemapMeta).reduce(
		(max, meta) => (meta.lastmod > max ? meta.lastmod : max),
		'0000-00-00',
	);
	return sitemapLastmod(fromPages) || brandSitemap.contentLastmod || fromPages;
}

/**
 * Expected URL counts for sitemap validation.
 * Product pages = 10 PageIds (15 cannibal URLs excluded — they 301 to pillars).
 * EN supplemental: forum (9) + reviews (106) + indexed FAQ slugs (4) = 119.
 */
export const SITEMAP_COUNTS = {
	productPages: 10,
	englishPages: 10,
	enSupplemental: 119,
	i18nLocales: 21,
	pagesPerLocale: 10,
	/** Non-EN locale URLs — 0 until INDEXABLE_NON_EN_LOCALES is true */
	i18nUrls: 0,
	totalIndexablePages: 10 + 119,
	totalSitemapUrls: 10 + 119,
	/** EN + x-default when non-EN locales are noindex */
	hreflangLinksPerUrl: 2,
	/** sitemap.xml (index): EN + images (locale sitemaps when INDEXABLE_NON_EN_LOCALES) */
	sitemapIndexEntries: 2,
} as const;
