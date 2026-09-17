#!/usr/bin/env node
/**
 * Generates src/data/reviews.generated.ts — buyer reviews for /reviews/.
 * Run: node scripts/generate-reviews.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'reviews.generated.ts');
const REDIRECTS_OUT = join(
	dirname(fileURLToPath(import.meta.url)),
	'..',
	'functions',
	'review-slug-redirects.json',
);
const TARGET_COUNT = 105;

/** @type {Array<{handle:string,rating:number,text:string,short:string,slug:string,seoTitle:string,seoDescription:string,date:string,tag:string}>} */
const seedReviews = [
	{
		handle: 'mike_p',
		rating: 5,
		text:
			'Fish esp helped me spot muujin before walking past them. Took a little time to adjust the distance slider, but fishing in Kilima feels much smoother now.',
		short: 'Fish esp makes muujin fishing in Kilima much smoother.',
		slug: 'mike-p',
		legacySlug: 'palia-fishing-review-mike-p',
		seoTitle: 'Fishing ESP Review by @mike_p — 5/5 | {brand}',
		seoDescription:
			'@mike_p gave {brand} fishing ESP 5/5 for muujin runs in Kilima Village on Windows PC. Review on fishing tools, distance sliders, and smoother sessions.',
		date: '2026-07-18',
		tag: 'Fishing',
	},
	{
		handle: 'jess.k',
		rating: 4,
		text:
			'Ore markers in Bahari are really helpful for farming. A few icons overlap on ultrawide, but turning off insects cleared most of it up.',
		short: 'Helpful ore markers in Bahari, easy to tune on ultrawide.',
		slug: 'jess-k',
		legacySlug: 'palia-esp-review-jess-k',
		seoTitle: 'ESP Review by @jess.k — 4/5 | {brand}',
		seoDescription:
			'@jess.k rated {brand} resource ESP 4/5 for Bahari Bay farming on Windows PC. Buyer notes on ore markers, ultrawide tuning, and insect filter tips.',
		date: '2026-08-03',
		tag: 'ESP',
	},
	{
		handle: 'palia_grind',
		rating: 5,
		text:
			'Teleport bookmarks between clay spots save a lot of walking. I mostly use teleport and esp, and both work well for my Bahari routes.',
		short: 'Teleport bookmarks save a lot of walking on clay routes.',
		slug: 'palia-grind',
		legacySlug: 'palia-teleport-review-palia-grind',
		seoTitle: 'Teleport Review by @palia_grind — 5/5 | {brand}',
		seoDescription:
			'@palia_grind rated {brand} teleport bookmarks 5/5 for Bahari clay routes on Windows PC. Buyer review on bookmark setup and faster farming loops.',
		date: '2026-06-14',
		tag: 'Teleport',
	},
	{
		handle: 'tom_r',
		rating: 4,
		text:
			'Menu took a few minutes to learn on first launch. Once I found the fishing tab, everything was straightforward from there.',
		short: 'Menu is straightforward once you find the fishing tab.',
		slug: 'tom-r',
		legacySlug: 'palia-menu-review-tom-r',
		seoTitle: 'Menu Review by @tom_r — 4/5 | {brand}',
		seoDescription:
			'@tom_r rated {brand} cheat menu 4/5 on Windows PC after a short learning curve. Buyer review on finding fishing toggles and menu layout tips.',
		date: '2026-07-26',
		tag: 'Menu',
	},
	{
		handle: 'nightOwl42',
		rating: 5,
		text:
			'Bow aim on low FOV works nicely for sernuk hunts. A little tuning at the start, but much easier than tracking them manually.',
		short: 'Bow aim on low FOV works nicely for sernuk hunts.',
		slug: 'nightowl42',
		legacySlug: 'palia-hunting-review-nightowl42',
		seoTitle: 'Hunting Review by @nightOwl42 — 5/5 | {brand}',
		seoDescription:
			'@nightOwl42 rated {brand} hunting aimbot 5/5 for sernuk hunts on Windows PC. Buyer review on low FOV tuning and bow aim settings for wildlife.',
		date: '2026-08-19',
		tag: 'Hunting',
	},
	{
		handle: 'defenderDan',
		rating: 4,
		text:
			'Windows Defender flagged the loader on first run. Support replied the next morning with clear steps, and it has been smooth since.',
		short: 'Support helped quickly after Defender flagged the loader.',
		slug: 'defenderdan',
		legacySlug: 'palia-setup-review-defenderdan',
		seoTitle: 'Setup Review by @defenderDan — 4/5 | {brand}',
		seoDescription:
			'@defenderDan rated {brand} setup 4/5 on Windows PC after Windows Defender flagged the loader. Buyer review on support response and install steps.',
		date: '2026-06-22',
		tag: 'Setup',
	},
	{
		handle: 'luna_fish',
		rating: 5,
		text:
			'Gillyfin is easier with the bite timer overlay. Would love a slightly smaller box on 1080p, but overall very happy with it.',
		short: 'Bite timer overlay makes gillyfin fishing much easier.',
		slug: 'luna-fish',
		legacySlug: 'palia-fishing-review-luna-fish',
		seoTitle: 'Fishing Review by @luna_fish — 5/5 | {brand}',
		seoDescription:
			'@luna_fish rated {brand} fishing tools 5/5 for gillyfin on Windows PC. Buyer review on bite timer overlay settings and calmer fishing sessions.',
		date: '2026-09-04',
		tag: 'Fishing',
	},
	{
		handle: 'routeRunner',
		rating: 5,
		text:
			'Bahari iron route with esp and two teleport bookmarks takes about 20 minutes now. A big time saver compared to running the full loop.',
		short: 'Bahari iron route takes about 20 min with esp and bookmarks.',
		slug: 'routerunner',
		legacySlug: 'palia-esp-review-routerunner',
		seoTitle: 'ESP Route Review by @routeRunner — 5/5 | {brand}',
		seoDescription:
			'@routeRunner rated {brand} ESP and teleport 5/5 for Bahari iron farming on Windows PC. Buyer review on route bookmarks and shorter ore loops.',
		date: '2026-07-08',
		tag: 'ESP',
	},
	{
		handle: 'patchDay_mike',
		rating: 4,
		text:
			'Loader was offline overnight after a Palia patch on Wednesday. Status page updated and it was back Thursday afternoon — a bit inconvenient, but understandable.',
		short: 'Back online the next day after a patch, status page was helpful.',
		slug: 'patchday-mike',
		legacySlug: 'palia-eac-patch-review-patchday-mike',
		seoTitle: 'Patch Day Review by @patchDay_mike — 4/5 | {brand}',
		seoDescription:
			'@patchDay_mike rated {brand} 4/5 after a {game} patch took the loader offline overnight. Buyer review on status updates and next-day rebuild timing.',
		date: '2026-08-27',
		tag: 'EAC patch',
	},
	{
		handle: 'karen_w',
		rating: 4,
		text:
			'Install needed one extra step on my Win11 laptop. Support was patient and we got it running the same day — just wanted it a little faster on day one.',
		short: 'Support was patient and got Win11 install running same day.',
		slug: 'karen-w',
		legacySlug: 'palia-setup-review-karen-w',
		seoTitle: 'Setup Review by @karen_w — 4/5 | {brand}',
		seoDescription:
			'@karen_w rated {brand} setup 4/5 on Windows 11 after a same-day install fix. Buyer review on patient support and getting the loader running on laptop.',
		date: '2026-09-01',
		tag: 'Support',
	},
];

const topics = [
	{
		tag: 'Fishing',
		slug: 'fishing',
		texts: [
			'Rare fish pools in Bahari Bay show up clearly with fishing ESP. Auto-catch saves a lot of button spam during long sessions.',
			'Muujin runs in Kilima are faster now. Distance filter at 150m keeps the overlay clean on my 1080p screen.',
			'Bite timer overlay made gillyfin farming less stressful. Small menu tweak and it felt natural after one evening.',
			'Fishing markers helped me finish the weekly star-fish goal without guessing pier spots.',
			'I mostly bought for fishing ESP. It paid for itself in one weekend of gold farming.',
		],
		shorts: [
			'Rare fish ESP and auto-catch make Bahari sessions much faster.',
			'Muujin fishing in Kilima is smoother with distance filters.',
			'Bite timer overlay made gillyfin farming less stressful.',
			'Fishing markers helped finish weekly star-fish goals.',
			'Fishing ESP alone was worth the license for me.',
		],
	},
	{
		tag: 'ESP',
		slug: 'esp',
		texts: [
			'Resource ESP in Kilima highlights ore and wood without clutter. Turning off insects fixed overlap on ultrawide.',
			'Bahari ore route is shorter with node highlights. I pair it with teleport bookmarks for quick resets.',
			'Forage pins helped me finish bundles faster. Filters are easy to toggle mid-session.',
			'Wallhack outlines are subtle enough for longer farms. Distance slider took a minute to tune.',
			'ESP categories are well organized. I run ore + wood only and ignore the rest.',
		],
		shorts: [
			'Kilima ore and wood ESP is clean after filter tuning.',
			'Bahari ore routes are shorter with node highlights.',
			'Forage pins sped up bundle farming a lot.',
			'Wallhack outlines feel subtle on longer farms.',
			'ESP category toggles are easy to manage.',
		],
	},
	{
		tag: 'Teleport',
		slug: 'teleport',
		texts: [
			'Teleport bookmarks between clay nodes cut my Bahari loop in half. Setup took two minutes.',
			'I save fishing pier coordinates and hop between them during events. Recall hotkey is handy.',
			'Movement tab teleport works well for housing plot checks and ore resets.',
			'Three saved spots cover my daily grind. No more long walks across Bahari.',
			'Teleport plus ESP is the fastest combo for iron farming on my route.',
		],
		shorts: [
			'Clay node bookmarks cut Bahari loops in half.',
			'Fishing pier coordinates make event farming faster.',
			'Teleport hotkeys help with housing and ore resets.',
			'Three bookmarks cover my daily Palia grind.',
			'Teleport and ESP together save a lot of time.',
		],
	},
	{
		tag: 'Menu',
		slug: 'menu',
		texts: [
			'Cheat menu tabs are labeled clearly. Found fishing and ESP toggles without a guide after day one.',
			'Hotkeys for ESP filters are useful mid-session. Menu stays readable on a 1440p monitor.',
			'First launch took a few minutes to learn. After that, toggling modules is quick.',
			'Menu layout makes sense — ESP, movement, automation grouped well.',
			'INSERT opens the overlay cleanly. No alt-tab needed to change fishing settings.',
		],
		shorts: [
			'Menu tabs are clear after a short first-session learning curve.',
			'ESP hotkeys are handy without alt-tabbing.',
			'Overlay opens fast and toggles feel responsive.',
			'Module groups in the menu are easy to follow.',
			'Fishing settings are quick to change mid-session.',
		],
	},
	{
		tag: 'Hunting',
		slug: 'hunting',
		texts: [
			'Low FOV hunting aimbot works well on sernuk. Smoothness around 20 looks natural in Bahari.',
			'Chapaa hunts are easier with bone priority on. I disable it in crowded Kilima spots.',
			'Bow sessions feel smoother after tuning smoothness. Still manual enough to look normal.',
			'Hunting module saved time on weekly wildlife goals. Worth enabling only outside town.',
			'Soft aim strength at medium settings felt right for my play style.',
		],
		shorts: [
			'Low FOV aimbot works well for sernuk hunts.',
			'Chapaa hunts are easier with tuned bone priority.',
			'Bow aim feels natural after smoothness tuning.',
			'Hunting module helped with weekly wildlife goals.',
			'Medium soft-aim strength felt right for me.',
		],
	},
	{
		tag: 'Setup',
		slug: 'setup',
		texts: [
			'Loader install was quick on Windows 11. Ran as admin once and it connected on the second try.',
			'Checkout delivery was instant. Key arrived before I finished copying my email.',
			'Setup guide on the site matched what I saw in-game. INSERT opened the menu in Kilima.',
			'First session needed one filter tweak. Support doc covered it in two steps.',
			'Install folder tip helped — kept the loader outside my Steam Palia directory.',
		],
		shorts: [
			'Loader install was quick on Windows 11.',
			'License key arrived instantly after checkout.',
			'Site setup steps matched the in-game menu.',
			'First-session tweak was covered in the guide.',
			'Loader path tip avoided install issues.',
		],
	},
	{
		tag: 'Support',
		slug: 'support',
		texts: [
			'Support replied same day when my key did not paste correctly. Friendly and clear steps.',
			'Discord ticket was answered within a few hours. Helped me fix a Win11 permission issue.',
			'Patient support on a laptop install. We got the loader running before dinner.',
			'Billing question was resolved quickly. Order email had everything I needed.',
			'Support walked me through Defender exclusion. No issues since.',
		],
		shorts: [
			'Same-day support fix for a license paste issue.',
			'Discord support helped with a Win11 permission fix.',
			'Patient help getting the loader running on a laptop.',
			'Billing question resolved quickly after purchase.',
			'Support helped with Defender exclusion steps.',
		],
	},
	{
		tag: 'EAC patch',
		slug: 'eac-patch',
		texts: [
			'Loader was down overnight after a Palia patch. Status page updated and it returned next afternoon.',
			'Short downtime after an EAC update. Rebuild notice on status made the wait clear.',
			'Patch day outage lasted about a day. Back online with the same license key.',
			'Expected brief downtime after a Wednesday patch. Thursday session was normal again.',
			'Status feed is useful on patch weeks. Loader came back without repurchasing.',
		],
		shorts: [
			'Back online next day after a Palia patch outage.',
			'Short EAC downtime with clear status updates.',
			'Patch-day outage was annoying but rebuild was fast.',
			'Wednesday patch downtime, normal again Thursday.',
			'Status page helped during patch-week downtime.',
		],
	},
];

const handlePrefixes = [
	'kilima', 'bahari', 'sernuk', 'chapaa', 'gilly', 'muujin', 'clay', 'ore', 'forage', 'star',
	'night', 'dawn', 'pond', 'ridge', 'vale', 'creek', 'ember', 'mist', 'willow', 'stone',
	'cozy', 'farm', 'grind', 'loot', 'cast', 'hook', 'aim', 'route', 'patch', 'win11',
];

const handleSuffixes = [
	'fox', 'owl', 'bee', 'fin', 'rod', 'bow', 'run', 'pro', 'fan', 'pc', 'gg', 'tv', 'dx', 'hq', 'v2',
];

/** Deterministic pick — stable across runs. */
function pick(list, index) {
	return list[index % list.length];
}

function ratingFor(index) {
	const roll = index % 20;
	if (roll < 11) return 5;
	if (roll < 17) return 4;
	return 3;
}

function dateFor(index) {
	const start = new Date('2025-03-01T12:00:00Z');
	const dayOffset = (index * 7 + (index % 5)) % 560;
	const d = new Date(start);
	d.setUTCDate(d.getUTCDate() + dayOffset);
	return d.toISOString().slice(0, 10);
}

function makeHandle(index) {
	const prefix = pick(handlePrefixes, index);
	const suffix = pick(handleSuffixes, index + 3);
	const num = 10 + (index % 90);
	return `${prefix}_${suffix}${num}`;
}

function slugifyHandle(handle) {
	return handle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function buildGeneratedReview(index) {
	const topic = pick(topics, index);
	const variant = index % topic.texts.length;
	const handle = makeHandle(index + 100);
	const rating = ratingFor(index);
	const handleSlug = slugifyHandle(handle);
	const slug = `${topic.slug}-${handleSlug}`;
	const legacySlug = `palia-${topic.slug}-review-${handleSlug}`;
	const seoTopic = topic.tag === 'EAC patch' ? 'Patch Day' : topic.tag;

	return {
		handle,
		rating,
		text: topic.texts[variant],
		short: topic.shorts[variant],
		slug,
		legacySlug,
		seoTitle: `${seoTopic} Review by @${handle} — ${rating}/5 | {brand}`,
		seoDescription: `@${handle} rated {brand} ${topic.tag.toLowerCase()} tools ${rating}/5 on Windows PC. Buyer review on ${topic.tag.toLowerCase()} settings and daily {game} farming.`,
		date: dateFor(index),
		tag: topic.tag,
	};
}

function reviewRedirectPair(fromSlug, toSlug) {
	const from = `/reviews/${fromSlug}`;
	const to = `/reviews/${toSlug}/`;
	return [
		[from, to],
		[`${from}/`, to],
	];
}

const usedSlugs = new Set(seedReviews.map((r) => r.slug));
const generated = [];

for (let i = 0; generated.length < TARGET_COUNT - seedReviews.length; i++) {
	const review = buildGeneratedReview(i);
	let slug = review.slug;
	if (usedSlugs.has(slug)) slug = `${slug}-${i}`;
	review.slug = slug;
	usedSlugs.add(slug);
	generated.push(review);
	if (i > TARGET_COUNT * 4) {
		throw new Error(`Could not generate ${TARGET_COUNT - seedReviews.length} unique review slugs`);
	}
}

const reviews = [...seedReviews, ...generated].map(({ legacySlug: _legacy, ...review }) => review);

if (reviews.length < TARGET_COUNT) {
	throw new Error(`Expected at least ${TARGET_COUNT} reviews, got ${reviews.length}`);
}

const slugRedirects = {};
for (const review of [...seedReviews, ...generated]) {
	if (!review.legacySlug || review.legacySlug === review.slug) continue;
	for (const [from, to] of reviewRedirectPair(review.legacySlug, review.slug)) {
		slugRedirects[from] = to;
	}
}

const output = `// Auto-generated by scripts/generate-reviews.mjs — do not edit manually

export const generatedCustomerReviews = ${JSON.stringify(reviews, null, 2)};
`;

writeFileSync(OUT, output, 'utf8');
writeFileSync(REDIRECTS_OUT, `${JSON.stringify(slugRedirects, null, 2)}\n`, 'utf8');
console.log(`Wrote ${reviews.length} reviews to ${OUT}`);
console.log(`Wrote ${Object.keys(slugRedirects).length} review slug redirects to ${REDIRECTS_OUT}`);
