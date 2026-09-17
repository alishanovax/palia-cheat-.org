import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { indexedLocales } from './locale-indexing';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'palia-esp'
	| 'palia-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'palia-esp': '/esp/',
	'palia-aimbot': '/aimbot/',
	features: '/features/',
	pricing: '/store/',
	setup: '/setup/',
	updates: '/status/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected/',
	wallhack: '/wallhack/',
	radar: '/teleport/',
	'eac': '/eac/',
	'cheats-2026': '/cheats-2026/',
	hacks: '/cheats/',
	'cheat-download': '/download/',
	'mod-menu': '/mod-menu/',
	'soft-aim': '/soft-aim/',
	'best-cheats': '/best/',
	'aimbot-hack': '/hunting-aimbot/',
	'esp-hack': '/resource-esp/',
	'unlock-all': '/unlock-all/',
	privacy: '/privacy/',
	refund: '/refund/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'palia-esp': {
		en: 'esp',
		es: 'esp',
		fr: 'esp',
		de: 'esp',
		pt: 'esp',
		it: 'esp',
		nl: 'esp',
		pl: 'esp',
		ru: 'palia-esp-chity',
		tr: 'palia-esp-hile',
		ar: 'esp',
		ja: 'esp',
		ko: 'esp',
		zh: 'esp',
		hi: 'esp',
		id: 'esp',
		th: 'esp',
		vi: 'esp',
		uk: 'palia-esp-chity',
		cs: 'esp',
		ro: 'esp',
		sv: 'esp',
	},
	'palia-aimbot': {
		en: 'aimbot',
		es: 'aimbot',
		fr: 'aimbot',
		de: 'aimbot',
		pt: 'aimbot',
		it: 'aimbot',
		nl: 'aimbot',
		pl: 'aimbot',
		ru: 'palia-aimbot-chity',
		tr: 'palia-aimbot-hile',
		ar: 'aimbot',
		ja: 'aimbot',
		ko: 'aimbot',
		zh: 'aimbot',
		hi: 'aimbot',
		id: 'aimbot',
		th: 'aimbot',
		vi: 'aimbot',
		uk: 'palia-aimbot-chity',
		cs: 'aimbot',
		ro: 'aimbot',
		sv: 'aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas',
		fr: 'fonctionnalites',
		de: 'funktionen',
		pt: 'recursos',
		it: 'funzioni',
		nl: 'functies',
		pl: 'funkcje',
		ru: 'funkcii',
		tr: 'ozellikleri',
		ar: 'features',
		ja: 'features',
		ko: 'features',
		zh: 'features',
		hi: 'features',
		id: 'features',
		th: 'features',
		vi: 'features',
		uk: 'funkcii',
		cs: 'funkce',
		ro: 'functii',
		sv: 'funktioner',
	},
	pricing: {
		en: 'store',
		es: 'precios',
		fr: 'prix',
		de: 'preise',
		pt: 'precos',
		it: 'prezzi',
		nl: 'prijzen',
		pl: 'ceny',
		ru: 'ceny',
		tr: 'fiyatlari',
		ar: 'pricing',
		ja: 'pricing',
		ko: 'pricing',
		zh: 'pricing',
		hi: 'pricing',
		id: 'pricing',
		th: 'pricing',
		vi: 'pricing',
		uk: 'ciny',
		cs: 'ceny',
		ro: 'preturi',
		sv: 'priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion',
		fr: 'installation',
		de: 'installation',
		pt: 'instalacao',
		it: 'installazione',
		nl: 'installatie',
		pl: 'instalacja',
		ru: 'ustanovka',
		tr: 'kurulum',
		ar: 'setup',
		ja: 'setup',
		ko: 'setup',
		zh: 'setup',
		hi: 'setup',
		id: 'setup',
		th: 'setup',
		vi: 'setup',
		uk: 'vstanovka',
		cs: 'instalace',
		ro: 'instalare',
		sv: 'installation',
	},
	updates: {
		en: 'status',
		es: 'actualizaciones',
		fr: 'mises-a-jour',
		de: 'status',
		pt: 'atualizacoes',
		it: 'aggiornamenti',
		nl: 'status',
		pl: 'aktualizacje',
		ru: 'obnovleniya',
		tr: 'guncellemeleri',
		ar: 'status',
		ja: 'status',
		ko: 'status',
		zh: 'status',
		hi: 'status',
		id: 'status',
		th: 'status',
		vi: 'status',
		uk: 'onovlennya',
		cs: 'status',
		ro: 'actualizari',
		sv: 'uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas',
		fr: 'faq',
		de: 'faq',
		pt: 'faq',
		it: 'faq',
		nl: 'faq',
		pl: 'faq',
		ru: 'faq',
		tr: 'sss',
		ar: 'faq',
		ja: 'faq',
		ko: 'faq',
		zh: 'faq',
		hi: 'faq',
		id: 'faq',
		th: 'faq',
		vi: 'faq',
		uk: 'faq',
		cs: 'faq',
		ro: 'faq',
		sv: 'faq',
	},
	support: {
		en: 'support',
		es: 'soporte',
		fr: 'support',
		de: 'support',
		pt: 'suporte',
		it: 'supporto',
		nl: 'support',
		pl: 'wsparcie',
		ru: 'podderzhka',
		tr: 'destek',
		ar: 'support',
		ja: 'support',
		ko: 'support',
		zh: 'support',
		hi: 'support',
		id: 'support',
		th: 'support',
		vi: 'support',
		uk: 'pidtrymka',
		cs: 'podpora',
		ro: 'suport',
		sv: 'support',
	},
	undetected: {
		en: 'undetected',
		es: 'indetectables',
		fr: 'indetectable',
		de: 'undetected',
		pt: 'indetectaveis',
		it: 'indetectabili',
		nl: 'undetected',
		pl: 'niewykrywalne',
		ru: 'nedecektiruemye',
		tr: 'tespit-edilemeyen-palia-hileleri',
		ar: 'undetected',
		ja: 'undetected',
		ko: 'undetected',
		zh: 'undetected',
		hi: 'undetected',
		id: 'undetected',
		th: 'undetected',
		vi: 'undetected',
		uk: 'nedecektovani',
		cs: 'undetected',
		ro: 'nedetectabile',
		sv: 'undetected',
	},
	wallhack: {
		en: 'wallhack',
		es: 'wallhack',
		fr: 'wallhack',
		de: 'wallhack',
		pt: 'wallhack',
		it: 'wallhack',
		nl: 'wallhack',
		pl: 'wallhack',
		ru: 'wallhack',
		tr: 'palia-wallhack-hile',
		ar: 'wallhack',
		ja: 'wallhack',
		ko: 'wallhack',
		zh: 'wallhack',
		hi: 'wallhack',
		id: 'wallhack',
		th: 'wallhack',
		vi: 'wallhack',
		uk: 'wallhack',
		cs: 'wallhack',
		ro: 'wallhack',
		sv: 'wallhack',
	},
	radar: {
		en: 'teleport',
		es: 'radar-hack',
		fr: 'radar-hack',
		de: 'teleport',
		pt: 'radar-hack',
		it: 'radar-hack',
		nl: 'teleport',
		pl: 'radar-hack',
		ru: 'radar-hack',
		tr: 'teleport',
		ar: 'teleport',
		ja: 'teleport',
		ko: 'teleport',
		zh: 'teleport',
		hi: 'teleport',
		id: 'teleport',
		th: 'teleport',
		vi: 'teleport',
		uk: 'radar-hack',
		cs: 'teleport',
		ro: 'radar-hack',
		sv: 'teleport',
	},
	'eac': {
		en: 'eac',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac',
		ar: 'eac',
		ja: 'eac',
		ko: 'eac',
		zh: 'eac',
		hi: 'eac',
		id: 'eac',
		th: 'eac',
		vi: 'eac',
		uk: 'eac-bypass-chity',
		cs: 'eac',
		ro: 'eac-bypass-cheats',
		sv: 'eac',
	},
	'cheats-2026': {
		en: 'cheats-2026',
		es: '2026',
		fr: '2026',
		de: 'buyers-guide-2026',
		pt: '2026',
		it: '2026',
		nl: 'buyers-guide-2026',
		pl: '2026',
		ru: 'chity-palia-2026',
		tr: 'palia-hileleri-2026',
		ar: 'buyers-guide-2026',
		ja: 'buyers-guide-2026',
		ko: 'buyers-guide-2026',
		zh: 'buyers-guide-2026',
		hi: 'buyers-guide-2026',
		id: 'buyers-guide-2026',
		th: 'buyers-guide-2026',
		vi: 'buyers-guide-2026',
		uk: 'chity-palia-2026',
		cs: 'buyers-guide-2026',
		ro: '2026',
		sv: 'buyers-guide-2026',
	},
	hacks: {
		en: 'cheats',
		es: 'hacks',
		fr: 'hacks',
		de: 'cheats',
		pt: 'hacks',
		it: 'hacks',
		nl: 'cheats',
		pl: 'hacks',
		ru: 'haksy',
		tr: 'hacks',
		ar: 'cheats',
		ja: 'cheats',
		ko: 'cheats',
		zh: 'cheats',
		hi: 'cheats',
		id: 'cheats',
		th: 'cheats',
		vi: 'cheats',
		uk: 'haksy',
		cs: 'cheats',
		ro: 'hacks',
		sv: 'cheats',
	},
	'cheat-download': {
		en: 'download',
		es: 'descarga',
		fr: 'telechargement',
		de: 'download',
		pt: 'download',
		it: 'download',
		nl: 'download',
		pl: 'pobieranie',
		ru: 'skachat',
		tr: 'indir',
		ar: 'download',
		ja: 'download',
		ko: 'download',
		zh: 'download',
		hi: 'download',
		id: 'download',
		th: 'download',
		vi: 'download',
		uk: 'zavantazhennya',
		cs: 'download',
		ro: 'descarcare',
		sv: 'download',
	},
	'mod-menu': {
		en: 'mod-menu',
		es: 'menu-mod',
		fr: 'menu-mod',
		de: 'mod-menu',
		pt: 'menu-mod',
		it: 'menu-mod',
		nl: 'mod-menu',
		pl: 'menu-mod',
		ru: 'mod-menu',
		tr: 'mod-menu',
		ar: 'mod-menu',
		ja: 'mod-menu',
		ko: 'mod-menu',
		zh: 'mod-menu',
		hi: 'mod-menu',
		id: 'mod-menu',
		th: 'mod-menu',
		vi: 'mod-menu',
		uk: 'mod-menu',
		cs: 'mod-menu',
		ro: 'meniu-mod',
		sv: 'mod-menu',
	},
	'soft-aim': {
		en: 'soft-aim',
		es: 'soft-aim',
		fr: 'soft-aim',
		de: 'soft-aim',
		pt: 'soft-aim',
		it: 'soft-aim',
		nl: 'soft-aim',
		pl: 'soft-aim',
		ru: 'soft-aim',
		tr: 'soft-aim',
		ar: 'soft-aim',
		ja: 'soft-aim',
		ko: 'soft-aim',
		zh: 'soft-aim',
		hi: 'soft-aim',
		id: 'soft-aim',
		th: 'soft-aim',
		vi: 'soft-aim',
		uk: 'soft-aim',
		cs: 'soft-aim',
		ro: 'soft-aim',
		sv: 'soft-aim',
	},
	'best-cheats': {
		en: 'best',
		es: 'mejores',
		fr: 'meilleures-triches-palia',
		de: 'best',
		pt: 'melhores',
		it: 'migliori',
		nl: 'best',
		pl: 'najlepsze',
		ru: 'luchshie',
		tr: 'en-iyi-palia-hileleri',
		ar: 'best-palia-cheats',
		ja: 'best-palia-cheats',
		ko: 'best-palia-cheats',
		zh: 'best-palia-cheats',
		hi: 'best-palia-cheats',
		id: 'best-palia-cheats',
		th: 'best-palia-cheats',
		vi: 'best-palia-cheats',
		uk: 'naykrashchi',
		cs: 'best',
		ro: 'cele-mai-bune',
		sv: 'best',
	},
	'aimbot-hack': {
		en: 'hunting-aimbot',
		es: 'aimbot-hack',
		fr: 'aimbot-hack',
		de: 'hunting-aimbot',
		pt: 'aimbot-hack',
		it: 'aimbot-hack',
		nl: 'hunting-aimbot',
		pl: 'aimbot-hack',
		ru: 'aimbot-hack',
		tr: 'hunting-aimbot',
		ar: 'hunting-aimbot',
		ja: 'hunting-aimbot',
		ko: 'hunting-aimbot',
		zh: 'hunting-aimbot',
		hi: 'hunting-aimbot',
		id: 'hunting-aimbot',
		th: 'hunting-aimbot',
		vi: 'hunting-aimbot',
		uk: 'aimbot-hack',
		cs: 'hunting-aimbot',
		ro: 'aimbot-hack',
		sv: 'hunting-aimbot',
	},
	'esp-hack': {
		en: 'resource-esp',
		es: 'esp-hack',
		fr: 'esp-hack',
		de: 'resource-esp',
		pt: 'esp-hack',
		it: 'esp-hack',
		nl: 'resource-esp',
		pl: 'esp-hack',
		ru: 'esp-hack',
		tr: 'resource-esp',
		ar: 'resource-esp',
		ja: 'resource-esp',
		ko: 'resource-esp',
		zh: 'resource-esp',
		hi: 'resource-esp',
		id: 'resource-esp',
		th: 'resource-esp',
		vi: 'resource-esp',
		uk: 'esp-hack',
		cs: 'resource-esp',
		ro: 'esp-hack',
		sv: 'resource-esp',
	},
	'unlock-all': {
		en: 'unlock-all',
		es: 'unlock-all',
		fr: 'unlock-all',
		de: 'unlock-all',
		pt: 'unlock-all',
		it: 'unlock-all',
		nl: 'unlock-all',
		pl: 'unlock-all',
		ru: 'unlock-all',
		tr: 'unlock-all',
		ar: 'unlock-all',
		ja: 'unlock-all',
		ko: 'unlock-all',
		zh: 'unlock-all',
		hi: 'unlock-all',
		id: 'unlock-all',
		th: 'unlock-all',
		vi: 'unlock-all',
		uk: 'unlock-all',
		cs: 'unlock-all',
		ro: 'unlock-all',
		sv: 'unlock-all',
	},
	privacy: {
		en: 'privacy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const localesForHreflang = indexedLocales();
	const byLocale = localesForHreflang.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self =
		byLocale.find((alt) => alt.code === currentLocale) ??
		byLocale.find((alt) => alt.code === defaultLocale)!;
	const others = byLocale.filter((alt) => alt.code !== self.code);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isForumIndex?: boolean;
	forumSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'forum') {
		if (rest.length === 1) {
			return { locale, isForumIndex: true };
		}
		return { locale, forumSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}
