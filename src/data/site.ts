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
import { generatedCustomerReviews } from './reviews.generated';

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
	{ label: fillBrandTokens('Buy {primaryKeyword}'), href: '/store/' },
	{ label: fillBrandTokens('Full {game} feature list'), href: '/features/' },
	{ label: fillBrandTokens('{game} teleport'), href: '/teleport/' },
	{ label: fillBrandTokens('{game} patch status'), href: '/status/' },
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
		slug: 'delivery',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation on Windows PC. Timing varies by payment method; keep your order email for support.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'contact',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
	faq({
		question: 'Where do I check updates after a {game} or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a {game} or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'Does this work in Kilima Village and Bahari Bay?',
		answer:
			'Yes. Resource ESP, wallhack, and fishing tools are built for {game} — spotting ores, fish, insects, and forage nodes across Kilima and Bahari Bay.',
		slug: 'kilima',
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
		slug: 'included',
		seoTitle: 'What Is Included: ESP, Wallhack, Teleport, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes resource ESP, wallhack, teleport, and hunting aimbot for Windows PC.',
	}),
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is a {game} tools package for Windows PC. Open the Cheats page for plans and the Features page for the full list.',
		slug: 'about',
		seoTitle: 'What is {brand}? | {game} Tools FAQ',
		seoDescription:
			'{brand} overview for {game} on Windows PC — see Cheats for plans and Features for what is included.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you log in. No cheat can guarantee permanent undetected status.',
		slug: 'undetected',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} maintenance works after {antiCheat} and {game} patches — check Status before you play on Windows PC.',
	}),
	faq({
		question: 'Where do I buy {brand} for Windows PC?',
		answer:
			'Open the Cheats page for product detail and Store for monthly or lifetime plans. Same feature stack on every plan.',
		slug: 'buy',
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
		slug: 'wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals resources through walls — with distance readouts and category toggles.',
	}),
	faq({
		question: 'Does {brand} include teleport?',
		answer:
			'Yes. {brand} includes teleport bookmarks so you can save spots and jump between Kilima Village and Bahari Bay faster.',
		slug: 'teleport',
		seoTitle: 'Does {brand} Include Teleport? | FAQ',
		seoDescription:
			'Yes — {brand} includes teleport bookmarks for faster farming routes in Kilima and Bahari Bay.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you session.',
		slug: 'eac',
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

export const customerReviews = generatedCustomerReviews.map((review) =>
	reviewMeta(review),
) as readonly CustomerReview[];

const reviewRatingSum = customerReviews.reduce((sum, review) => sum + review.rating, 0);

export const customerReviewStats = {
	averageRating: Math.round((reviewRatingSum / customerReviews.length) * 10) / 10,
	totalCount: customerReviews.length,
} as const;
