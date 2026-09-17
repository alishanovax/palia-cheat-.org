import { brand, fillBrandTokens, seoDescription, seoTitle } from './brand';

/**
 * Title clamp lives here — NOT in brand.ts.
 * Brand Studio rewrites brand.ts on every save; helpers here stay stable.
 */
export function seoPageTitle(template: string): string {
	const text = fillBrandTokens(template).trim();
	/** Google SERP titles typically display ~50–60 chars; clamp at 60. */
	return text.length <= 60 ? text : `${text.slice(0, 57).trim()}…`;
}

export { brand, fillBrandTokens, seoDescription, seoTitle };

const copyDefaults = {
	tagline: 'Buy {primaryKeyword} — ESP, wallhack, and cheat menu for PC',
	summary:
		'{brand} is a palia cheats package for Windows PC. Resource ESP, wallhack, fishing tools, and {antiCheat} maintenance after patches.',
	heroLede: 'Buy palia cheats for PC — resource ESP, wallhack, and cheat menu from $35.',
	forumLabel: 'Palia Forum',
	ctaBuy: 'Buy Now',
	ctaBuyShort: 'Buy Now',
	featuresIntro:
		'Palia cheats features — ESP, wallhack, fishing tools, teleport, and automation in one license.',
	storeIntro: 'Buy palia cheats — monthly or lifetime. Same features on every plan.',
	statusIntro: 'Palia cheats status after a {game} or {antiCheat} patch.',
	previewIntro: 'Buy palia cheats for PC — ESP, wallhack, fishing tools, and cheat menu.',
	setupIntro: 'Set up palia cheats on Windows PC after checkout.',
	supportIntro: 'Palia cheats support — email {email} with your order ID.',
	faqIntro: 'FAQ about buying palia cheats — delivery, ESP, wallhack, and refunds.',
	reviewsIntro: 'Palia cheats reviews — ESP, wallhack, fishing tools, and support.',
	chipEsp: 'ESP',
	chipAim: 'Soft aim',
	chipRadar: 'Wallhack',
	chipUpdates: 'Patch updates',
	navPreview: 'Preview',
	navFeatures: 'Features',
	navStore: 'Store',
	navStatus: 'Status',
	navReviews: 'Reviews',
} as const;

const seoDefaults = {
	homeTitle: '{brand} | Undetected {primaryKeyword}',
	homeDescription:
		'Buy {primaryKeyword} for Windows PC — resource ESP, fishing tools, teleport, and cheat menu from $35. Instant delivery.',
	featuresTitle: '{game} Features | {brand}',
	featuresDescription:
		'Full {game} cheats feature list — resource ESP, wallhack, fishing tools, teleport, and skill automation on Windows PC.',
	storeTitle: '{game} Store | {brand}',
	storeDescription:
		'{game} cheats pricing — $35 monthly or $150 lifetime. Same ESP, wallhack, and cheat menu on every plan.',
	statusTitle: '{game} Status | {brand}',
	statusDescription:
		'Undetected {brand} status after {game} or {antiCheat} patches. Check before you log in on Windows PC.',
	previewTitle: '{game} Preview | {brand}',
	previewDescription:
		'Buy {primaryKeyword} for PC — cheat menu with ESP, fishing tools, teleport, and automation from $35.',
	setupTitle: '{game} Setup | {brand}',
	setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
	supportTitle: '{game} Support | {brand}',
	supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
	faqTitle: '{game} FAQ | {brand}',
	faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
	reviewsTitle: '{brand} Reviews | Buyer Feedback',
	reviewsDescription:
		'Real buyer reviews for {brand} — resource ESP, fishing tools, teleport, and support on Windows PC.',
	forumTitle: '{game} Intel | {brand}',
	forumDescription: 'Guides and notes for {game} — meta tips, ESP, aimbot, and {antiCheat} updates.',
} as const;

type SeoShape = typeof seoDefaults;
type CopyShape = typeof copyDefaults;

/** Always-safe copy/seo — Brand Studio saves must never crash the site. */
const brandExtra = brand as typeof brand & { seo?: Partial<SeoShape>; copy?: Partial<CopyShape> };
export const brandSeo: SeoShape = { ...seoDefaults, ...brandExtra.seo };
export const brandCopy: CopyShape = { ...copyDefaults, ...brandExtra.copy };

/** Resolved EN home meta */
export function homeSeo() {
	return {
		title: seoPageTitle(brandSeo.homeTitle),
		description: seoDescription(brandSeo.homeDescription),
	};
}

/** Site config derived from brand — import this in layouts/components. */
export const siteConfig = {
	name: brand.name,
	url: brand.url,
	locale: brand.locale,
	market: brand.market,
	supportEmail: brand.supportEmail,
	logo: brand.logo,
	logoRaster: brand.logoRaster,
	logoRasterWidth: brand.logoRasterWidth,
	logoRasterHeight: brand.logoRasterHeight,
	logoAlt: brand.logoAlt,
	checkoutUrl: brand.checkoutUrl,
	defaultOgImage: brand.defaultOgImage,
	heroImage: brand.heroImage,
} as const;

/** Prefer brand.keywords — kept for Layout meta keywords. */
export const seoKeywords = brand.keywords.list;

/** Blog eyebrow / title suffix */
export const forumLabel = fillBrandTokens(brandCopy.forumLabel);

/** Canonical commercial URL — single Product schema node lives here (EN only). */
export const productCanonicalPath = '/cheats/' as const;
export const productCanonicalUrl = new URL(productCanonicalPath, brand.url).href;
export const productSchemaId = `${productCanonicalUrl}#product`;

export const productInfo = {
	name: brand.name,
	shortName: brand.game,
	brand: brand.name,
	tagline: fillBrandTokens(brandCopy.tagline),
	summary: fillBrandTokens(brandCopy.summary),
	game: brand.game,
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: [...brand.platforms],
	updateCadence: fillBrandTokens(
		'Updates are published when {game} or {antiCheat} patches need a rebuild',
	),
	supportHours: 'Support requests are reviewed daily',
	plans: brand.plans.map((p) => ({ ...p })),
	currency: brand.currency,
	heroLede: fillBrandTokens(brandCopy.heroLede),
	features: {
		esp: [
			'Resource node ESP — ore, wood, and forage',
			'Fishing spot and rare fish ESP',
			'Insect and bug location highlights',
			'Player position markers in multiplayer',
			'Distance readouts on all nodes',
			'Toggleable ESP categories per skill',
		],
		aimbot: [
			'Hunting aim assist for Bahari wildlife',
			'Smoothness and FOV tuning',
			'Bone priority for clean kills',
			'Hotkeys mid-session',
			'Per-weapon hunting profiles',
		],
		radar: ['Teleport between Kilima and Bahari', 'Freecam for exploration', 'Saved coordinate bookmarks'],
		general: [
			fillBrandTokens('{antiCheat} maintenance after patches'),
			'Skill automation and AFK grinding',
			'Digital delivery after checkout',
			'Setup guide and forum support',
		],
	},
} as const;
