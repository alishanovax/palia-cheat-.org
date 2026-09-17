import type { PageId } from './i18n/routing';
import {
	cannibalPageIds,
	cannibalRedirectTargets,
	getCannibalTargetId,
	isCannibalPageId,
	type CannibalPageId,
} from './seo-cannibal-map';

export {
	cannibalPageIds,
	cannibalRedirectTargets,
	isCannibalPageId,
	type CannibalPageId,
};

/** Cannibal pageIds — edge 301 only; never build Astro HTML or sitemap entries. */
export const buildExcludedPageIds = new Set<PageId>(cannibalPageIds as PageId[]);

/** @deprecated Use buildExcludedPageIds — same set, kept for existing imports. */
export const sitemapExcludedPageIds = buildExcludedPageIds;

/** Primary commercial landing for the head term "palia cheats". */
export const MONEY_PAGE_ID = 'home' as const satisfies PageId;
export const MONEY_PATH = '/' as const;

export function getCannibalTarget(pageId: PageId): PageId {
	return getCannibalTargetId(pageId) as PageId;
}
