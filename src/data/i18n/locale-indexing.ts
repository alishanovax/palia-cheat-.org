import { defaultLocale, localeCodes, type LocaleCode } from './locales';

/**
 * Set true after simple-pages (or generated translations) exist for each locale.
 * While false: non-EN product pages are noindex + omitted from locale sitemaps;
 * hreflang clusters are EN + x-default only.
 */
export const INDEXABLE_NON_EN_LOCALES = false;

export function isLocaleIndexed(locale: LocaleCode): boolean {
	return locale === defaultLocale || INDEXABLE_NON_EN_LOCALES;
}

/** Locales included in hreflang clusters and locale sitemaps. */
export function indexedLocales(): LocaleCode[] {
	return INDEXABLE_NON_EN_LOCALES ? [...localeCodes] : [defaultLocale];
}
