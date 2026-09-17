/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Palia Cheats',
	/** Short product label if needed */
	shortName: 'Palia',
	/** Canonical origin — no trailing slash */
	url: 'https://paliacheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@paliacheats.org',
	checkoutUrl: 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fpalia',

	/** Game this template instance targets */
	game: 'Palia',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/palia-logo.webp',
	logoRaster: '/images/palia-logo.png',
	logoRasterWidth: 608,
	logoRasterHeight: 406,
	logoAlt: 'Palia Cheats',
	defaultOgImage: '/images/palia-gameplay-hero-night-1024w.webp',
	heroImage: '/images/palia-gameplay-hero-night-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#8b5cf6',
		bg: '#0D0A14',
		soft: '#a78bfa',
		deep: '#6d28d9',
		hover: '#7c3aed',
		panel: '#0F0C18',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'palia cheats',
		list: [
			'buy palia cheats',
			'palia cheats for pc',
			'palia cheat menu',
			'best palia cheats',
			'palia premium cheats',
			'palia cheats price',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /cheats/ owns the head term. */
		homeTitle: '{brand} | {game} Cheats Hub for Windows PC',
		homeDescription:
			'{brand} hub for {game} on Windows PC — features, setup, live status, and store plans. Open Cheats when you are ready to buy.',
		featuresTitle: '{game} Cheat Features | ESP & Wallhack | {brand}',
		featuresDescription:
			'Full {game} cheat feature list for Windows PC — resource ESP, wallhack, fishing tools, teleport bookmarks, hunting aimbot, and {antiCheat} patch maintenance.',
		storeTitle: '{game} Cheats Store | Monthly & Lifetime | {brand}',
		storeDescription:
			'Compare monthly and lifetime {game} cheat plans for Windows PC. Same ESP, wallhack, fishing tools, and cheat menu on every plan with instant digital delivery.',
		statusTitle: '{game} Cheat Status | {antiCheat} Updates | {brand}',
		statusDescription:
			'Live status for {brand} after {game} or {antiCheat} patches. Check maintenance notes here before you log in on Windows PC.',
		/** Money page meta — primary target for "palia cheats". */
		previewTitle: 'Buy Undetected {primaryKeyword} | {brand} Store',
		previewDescription:
			'Buy {primaryKeyword} for Windows PC — resource ESP, wallhack, fishing tools, teleport, and {antiCheat} maintenance. Monthly from $35 with instant license delivery.',
		setupTitle: '{game} Cheats Setup Guide | Install on PC | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster. Follow each step in order before your first session.',
		supportTitle: '{game} Cheats Support & Billing Help | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} Cheats FAQ | Delivery & Setup | {brand}',
		faqDescription:
			'Short answers about {brand} for {game} — license delivery, ESP setup, {antiCheat} updates, refunds, and Windows PC requirements before you buy.',
		reviewsTitle: '{brand} Buyer Reviews | ESP & Fishing Tools',
		reviewsDescription:
			'Real buyer reviews for {brand} on Windows PC — ESP, wallhack, fishing tools, teleport, and patch-day updates from license holders in Kilima and Bahari Bay.',
		forumTitle: '{game} Forum | Setup Guides & Discussions',
		forumDescription:
			'{game} forum — setup guides, fishing ESP tips, and buyer discussions. Sign up to post and read community threads.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: '{brand} — {game} tools for Windows PC',
		summary:
			'{brand} is a premium {game} package for Windows PC. Resource ESP, fishing tools, teleport, skill automation, and {antiCheat} maintenance after patches.',
		heroLede:
			'Browse {game} on Windows PC — compare features, setup guides, live status, and plans before checkout.',
		forumLabel: 'Palia Forum',
		ctaBuy: 'Buy Now',
		ctaBuyShort: 'Buy Now',
		featuresIntro:
			'Everything in one {brand} license for Windows PC — ESP, wallhack, fishing tools, teleport, and skill automation.',
		storeIntro:
			'Monthly $35 or lifetime $150. Same ESP, wallhack, and cheat menu on every plan.',
		statusIntro:
			'Live status after a {game} or {antiCheat} patch. Check here before you log in.',
		previewIntro:
			'Buy {primaryKeyword} for Windows PC — resource ESP, wallhack, fishing tools, teleport, and undetected cheat menu from $35.',
		setupIntro:
			'Set up {brand} on Windows PC after checkout. Follow the setup guide to activate your license.',
		supportIntro: 'Email {email} with your order ID for setup or billing help.',
		faqIntro: 'Short answers about delivery, setup, and support for {brand}.',
		reviewsIntro: 'Buyer feedback on {brand} — ESP, fishing tools, and patch-day updates.',
		chipEsp: 'ESP',
		chipAim: 'Soft aim',
		chipRadar: 'Wallhack',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-13',
		blogImageTitle: '{brand} forum',
		blogImageCaption: 'Palia cheats guides and community discussions',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/palia-gameplay-kilima-panorama-1024w.webp',
				title: 'Wide panorama of Kilima Village roofs and stone paths',
				caption: 'Wide panorama of Kilima Village roofs and stone paths',
			},
			{
				src: '/images/palia-gameplay-homestead.webp',
				title: 'Player homestead with fenced crop plots and dirt paths',
				caption: 'Player homestead with fenced crop plots and dirt paths',
			},
			{
				src: '/images/palia-gameplay-ore-mining.webp',
				title: 'Ore node with distance readouts during a mining swing',
				caption: 'Ore node with distance readouts during a mining swing',
			},
			{
				src: '/images/palia-gameplay-bahari-landscape.webp',
				title: 'Bahari Bay cliffs and coastline under open sky',
				caption: 'Bahari Bay cliffs and coastline under open sky',
			},
			{
				src: '/images/palia-gameplay-housing-interior.webp',
				title: 'Decorated housing interior with furniture and windows',
				caption: 'Decorated housing interior with furniture and windows',
			},
			{
				src: '/images/palia-gameplay-kilima-village.webp',
				title: 'Kilima Village square with market stalls and walkways',
				caption: 'Kilima Village square with market stalls and walkways',
			},
			{
				src: '/images/palia-gameplay-esp-overlay.webp',
				title: 'In-game overlay with resource markers on a village bridge',
				caption: 'In-game overlay with resource markers on a village bridge',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
