export {
	brand,
	forumLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
	productCanonicalPath,
	productCanonicalUrl,
	productSchemaId,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('Buy {primaryKeyword}'), href: '/cheats/' },
	{ label: fillBrandTokens('{game} resource ESP'), href: '/esp/' },
	{ label: fillBrandTokens('{game} hunting aimbot'), href: '/aimbot/' },
	{ label: fillBrandTokens('{game} teleport'), href: '/teleport/' },
	{ label: fillBrandTokens('{game} setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('Full {game} feature list'), href: '/features/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

/** Indexed FAQ URLs (max 4) — support/delivery only; buy/undetected intent lives on pillars. */
export const indexedFaqs: readonly FaqItem[] = [
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation on Windows PC. Timing varies by payment method; keep your order email for support.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
	faq({
		question: 'Where do I check updates after a {game} or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a {game} or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'Does this work in Kilima Village and Bahari Bay?',
		answer:
			'Yes. Resource ESP, wallhack, and fishing tools are built for {game} — spotting ores, fish, insects, and forage nodes across Kilima and Bahari Bay.',
		slug: 'kilima-and-bahari-bay-support',
		seoTitle: 'Kilima and Bahari Bay Support | FAQ',
		seoDescription:
			'{brand} works in Kilima Village and Bahari Bay — resource ESP, wallhack, and fishing tools for Windows PC.',
	}),
] as const;

/** Hub-only FAQs on homepage #faq — HTML accordion only; must not overlap indexedFaqs slugs. */
export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is included — ESP, wallhack, teleport, or aimbot?',
		answer:
			'{brand} bundles resource ESP, wallhack, teleport bookmarks, fishing tools, and hunting aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-teleport-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Teleport, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes resource ESP, wallhack, teleport, and hunting aimbot for Windows PC.',
	}),
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is a {game} tools package for Windows PC. Open the Cheats page for plans and the Features page for the full list.',
		slug: 'what-are-palia-cheats',
		seoTitle: 'What is {brand}? | {game} Tools FAQ',
		seoDescription:
			'{brand} overview for {game} on Windows PC — see Cheats for plans and Features for what is included.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you log in. No cheat can guarantee permanent undetected status.',
		slug: 'are-palia-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} maintenance works after {antiCheat} and {game} patches — check Status before you play on Windows PC.',
	}),
	faq({
		question: 'Where do I buy {brand} for Windows PC?',
		answer:
			'Open the Cheats page for product detail and Store for monthly or lifetime plans. Same feature stack on every plan.',
		slug: 'buy-undetected-palia-cheats-windows-pc',
		seoTitle: 'Where to Buy {brand} for Windows PC | FAQ',
		seoDescription:
			'Buy {brand} on the Cheats and Store pages — monthly and lifetime plans with the same feature stack on Windows PC.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...indexedFaqs,
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows ores, fish, insects, and forage nodes through walls. {brand} includes distance readouts, resource filters, and toggleable categories.',
		slug: 'what-is-a-palia-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals resources through walls — with distance readouts and category toggles.',
	}),
	faq({
		question: 'Does {brand} include teleport?',
		answer:
			'Yes. {brand} includes teleport bookmarks so you can save spots and jump between Kilima Village and Bahari Bay faster.',
		slug: 'does-palia-cheats-include-teleport',
		seoTitle: 'Does {brand} Include Teleport? | FAQ',
		seoDescription:
			'Yes — {brand} includes teleport bookmarks for faster farming routes in Kilima and Bahari Bay.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you session.',
		slug: 'eac-anti-cheat-and-palia-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'mike_p',
		rating: 5,
		text: 'Fish esp helped me spot muujin before walking past them. Took a little time to adjust the distance slider, but fishing in Kilima feels much smoother now.',
		short: 'Fish esp makes muujin fishing in Kilima much smoother.',
		slug: 'palia-fishing-review-mike-p',
		seoTitle: 'Fishing ESP Review by @mike_p — 5/5 | {brand}',
		seoDescription:
			'@mike_p gave {brand} fishing ESP 5/5 for muujin runs in Kilima Village on Windows PC. Review on fishing tools, distance sliders, and smoother sessions.',
		date: '2026-07-18',
		tag: 'Fishing',
	}),
	reviewMeta({
		handle: 'jess.k',
		rating: 4,
		text: 'Ore markers in Bahari are really helpful for farming. A few icons overlap on ultrawide, but turning off insects cleared most of it up.',
		short: 'Helpful ore markers in Bahari, easy to tune on ultrawide.',
		slug: 'palia-esp-review-jess-k',
		seoTitle: 'ESP Review by @jess.k — 4/5 | {brand}',
		seoDescription:
			'@jess.k rated {brand} resource ESP 4/5 for Bahari Bay farming on Windows PC. Buyer notes on ore markers, ultrawide tuning, and insect filter tips.',
		date: '2026-08-03',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'palia_grind',
		rating: 5,
		text: 'Teleport bookmarks between clay spots save a lot of walking. I mostly use teleport and esp, and both work well for my Bahari routes.',
		short: 'Teleport bookmarks save a lot of walking on clay routes.',
		slug: 'palia-teleport-review-palia-grind',
		seoTitle: 'Teleport Review by @palia_grind — 5/5 | {brand}',
		seoDescription:
			'@palia_grind rated {brand} teleport bookmarks 5/5 for Bahari clay routes on Windows PC. Buyer review on bookmark setup and faster farming loops.',
		date: '2026-06-14',
		tag: 'Teleport',
	}),
	reviewMeta({
		handle: 'tom_r',
		rating: 4,
		text: 'Menu took a few minutes to learn on first launch. Once I found the fishing tab, everything was straightforward from there.',
		short: 'Menu is straightforward once you find the fishing tab.',
		slug: 'palia-menu-review-tom-r',
		seoTitle: 'Menu Review by @tom_r — 4/5 | {brand}',
		seoDescription:
			'@tom_r rated {brand} cheat menu 4/5 on Windows PC after a short learning curve. Buyer review on finding fishing toggles and menu layout tips.',
		date: '2026-07-26',
		tag: 'Menu',
	}),
	reviewMeta({
		handle: 'nightOwl42',
		rating: 5,
		text: 'Bow aim on low FOV works nicely for sernuk hunts. A little tuning at the start, but much easier than tracking them manually.',
		short: 'Bow aim on low FOV works nicely for sernuk hunts.',
		slug: 'palia-hunting-review-nightowl42',
		seoTitle: 'Hunting Review by @nightOwl42 — 5/5 | {brand}',
		seoDescription:
			'@nightOwl42 rated {brand} hunting aimbot 5/5 for sernuk hunts on Windows PC. Buyer review on low FOV tuning and bow aim settings for wildlife.',
		date: '2026-08-19',
		tag: 'Hunting',
	}),
	reviewMeta({
		handle: 'defenderDan',
		rating: 4,
		text: 'Windows Defender flagged the loader on first run. Support replied the next morning with clear steps, and it has been smooth since.',
		short: 'Support helped quickly after Defender flagged the loader.',
		slug: 'palia-setup-review-defenderdan',
		seoTitle: 'Setup Review by @defenderDan — 4/5 | {brand}',
		seoDescription:
			'@defenderDan rated {brand} setup 4/5 on Windows PC after Windows Defender flagged the loader. Buyer review on support response and install steps.',
		date: '2026-06-22',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'luna_fish',
		rating: 5,
		text: 'Gillyfin is easier with the bite timer overlay. Would love a slightly smaller box on 1080p, but overall very happy with it.',
		short: 'Bite timer overlay makes gillyfin fishing much easier.',
		slug: 'palia-fishing-review-luna-fish',
		seoTitle: 'Fishing Review by @luna_fish — 5/5 | {brand}',
		seoDescription:
			'@luna_fish rated {brand} fishing tools 5/5 for gillyfin on Windows PC. Buyer review on bite timer overlay settings and calmer fishing sessions.',
		date: '2026-09-04',
		tag: 'Fishing',
	}),
	reviewMeta({
		handle: 'routeRunner',
		rating: 5,
		text: 'Bahari iron route with esp and two teleport bookmarks takes about 20 minutes now. A big time saver compared to running the full loop.',
		short: 'Bahari iron route takes about 20 min with esp and bookmarks.',
		slug: 'palia-esp-review-routerunner',
		seoTitle: 'ESP Route Review by @routeRunner — 5/5 | {brand}',
		seoDescription:
			'@routeRunner rated {brand} ESP and teleport 5/5 for Bahari iron farming on Windows PC. Buyer review on route bookmarks and shorter ore loops.',
		date: '2026-07-08',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'patchDay_mike',
		rating: 4,
		text: 'Loader was offline overnight after a Palia patch on Wednesday. Status page updated and it was back Thursday afternoon — a bit inconvenient, but understandable.',
		short: 'Back online the next day after a patch, status page was helpful.',
		slug: 'palia-eac-patch-review-patchday-mike',
		seoTitle: 'Patch Day Review by @patchDay_mike — 4/5 | {brand}',
		seoDescription:
			'@patchDay_mike rated {brand} 4/5 after a {game} patch took the loader offline overnight. Buyer review on status updates and next-day rebuild timing.',
		date: '2026-08-27',
		tag: 'EAC patch',
	}),
	reviewMeta({
		handle: 'karen_w',
		rating: 4,
		text: 'Install needed one extra step on my Win11 laptop. Support was patient and we got it running the same day — just wanted it a little faster on day one.',
		short: 'Support was patient and got Win11 install running same day.',
		slug: 'palia-setup-review-karen-w',
		seoTitle: 'Setup Review by @karen_w — 4/5 | {brand}',
		seoDescription:
			'@karen_w rated {brand} setup 4/5 on Windows 11 after a same-day install fix. Buyer review on patient support and getting the loader running on laptop.',
		date: '2026-09-01',
		tag: 'Support',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.5,
	totalCount: customerReviews.length,
} as const;
