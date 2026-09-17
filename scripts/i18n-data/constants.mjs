/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'palia-esp', 'palia-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — Palia gameplay screenshots. */
export const HERO_IMAGES = {
	home: '/images/palia-gameplay-kilima-village.webp',
	'palia-esp': '/images/palia-gameplay-ore-mining.webp',
	'palia-aimbot': '/images/palia-gameplay-bahari-landscape.webp',
	features: '/images/palia-gameplay-housing-interior.webp',
	pricing: '/images/palia-gameplay-homestead.webp',
	setup: '/images/palia-gameplay-housing-interior.webp',
	updates: '/images/palia-gameplay-kilima-village.webp',
	faq: '/images/palia-gameplay-homestead.webp',
	support: '/images/palia-gameplay-kilima-village.webp',
	undetected: '/images/palia-gameplay-kilima-village.webp',
	wallhack: '/images/palia-gameplay-ore-mining.webp',
	radar: '/images/palia-gameplay-bahari-landscape.webp',
	eac: '/images/palia-gameplay-kilima-village.webp',
	'cheats-2026': '/images/palia-gameplay-homestead.webp',
	hacks: '/images/palia-gameplay-ore-mining.webp',
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

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; store: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'palia-esp' | 'palia-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove checkout from meta title/description strings only. */
export function stripcheckoutFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über checkout\.?/gi, '.')
		.replace(/\s*with secure checkout\.?/gi, '.')
		.replace(/\s*via secure checkout\.?/gi, '.')
		.replace(/\s*Checkout via checkout\.?/gi, '')
		.replace(/\s*secure checkout,?\s*/gi, ' ')
		.replace(/\s*checkout delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and checkout delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant checkout Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on checkout/g, 'Buy Palia Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://palia.com/" target="_blank" rel="noopener noreferrer">Palia</a>',
	palia:
		'<a href="https://palia.com/" target="_blank" rel="noopener noreferrer">Palia</a>',
	status:
		'<a href="https://palia.com/support" target="_blank" rel="noopener noreferrer">Palia Support</a>',
	eac:
		'<a href="https://www.eac.com/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>',
};
