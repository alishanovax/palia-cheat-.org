import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — Palia search intent per page. */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro:
			'Everything in one {brand} license — resource ESP, wallhack, fishing tools, hunting aimbot, teleport, and skill automation for {game} on Windows PC.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See ores, fish, insects, and forage nodes through walls with distance readouts.',
					'Filter overlays for Kilima Village, Bahari Bay, and housing plots.',
				],
				list: ['Resource ESP', 'Fishing & bug markers', 'Wallhack outlines'],
			},
			{
				h2: 'Fishing & hunting tools',
				paragraphs: [
					'Soft aim for hunting and fishing minigames you can tune to feel natural.',
					'Set strength and hotkeys before you session.',
				],
				list: ['Fishing ESP', 'Hunting aimbot', 'Hotkeys mid-session'],
			},
			{
				h2: 'Teleport & automation',
				paragraphs: [
					'Save map coordinates and automate repetitive skill grinds.',
					'Move faster between Kilima and Bahari Bay.',
				],
				list: ['Teleport bookmarks', 'Skill automation', 'Cheat menu controls'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big {game} or {antiCheat} patches.',
					'Check Status before you play after a patch day.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro:
			'Monthly $35 or lifetime $150. Same ESP, wallhack, fishing tools, and cheat menu on every plan. Instant delivery after checkout.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full {brand} package for Windows 10 / 11.',
					'Same ESP, wallhack, and cheat menu on monthly and lifetime plans.',
				],
				list: ['ESP & wallhack', 'Fishing & hunting tools', 'Patch rebuilds while active'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro:
			'Live status and undetected maintenance after {game} or {antiCheat} patches. Check here before you log in.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Undetected maintenance',
				paragraphs: [
					'Undetected means active {antiCheat} rebuilds — not a promise that detection never happens.',
					'We rebuild ESP, wallhack, and fishing modules when patches require it.',
				],
				list: ['Live status notes', 'Rebuilds for active licenses', 'No permanent guarantee'],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Cheats',
		intro:
			'Buy {primaryKeyword} for Windows PC — undetected cheat menu with resource ESP, wallhack, fishing tools, teleport, and automation. Plans from $35.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'See plans',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One {brand} license for Windows PC — built for cozy MMO life sim and multiplayer sessions.',
				],
				list: [
					'Resource ESP & wallhack',
					'Fishing & hunting tools',
					'Teleport & skill automation',
					'Easy Anti-Cheat rebuilds after patches',
				],
			},
			{
				h2: 'Built for Palia',
				paragraphs: [
					'Find ores and fish faster, automate skills, and move between Kilima Village and Bahari Bay with the full cheat menu.',
				],
				list: [
					'<a href="/esp/">ESP & wallhack</a>',
					'<a href="/aimbot/">Aimbot</a>',
					'<a href="/teleport/">Teleport</a>',
					'<a href="/status/">Live status</a>',
				],
			},
			{
				h2: 'Before checkout',
				paragraphs: [
					'Compare features, follow setup after delivery, and check live status before you play.',
				],
				list: [
					'<a href="/features/">Features</a>',
					'<a href="/setup/">Setup</a>',
					'<a href="/status/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/store/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/status/">Check status</a>',
				],
			},
		],
	}),
	'palia-esp': page({
		title: 'Palia Resource ESP & Wallhack Guide | {brand}',
		description:
			'Palia resource ESP for Windows PC — ore, fish, and insect markers with distance readouts across Kilima Village and Bahari Bay. Included in every {brand} license.',
		h1: 'ESP',
		intro:
			'Palia ESP and wallhack for ores, fish, bugs, and forage nodes. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia ESP in session',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'Resource markers, fishing spots, insect pins, and through-wall outlines with distance.',
					'Wallhack is part of ESP — one visibility pillar, not a separate product page.',
				],
				list: ['Resource ESP', 'Fishing markers', 'Wallhack filters'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Farm Kilima and Bahari Bay without missing rare nodes or wasting time.'],
				list: ['Tune opacity', 'Filter by resource type', 'Pair with teleport'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with fishing tools and wallhack in one palia cheats plan.'],
				list: [
					'<a href="/cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/store/">Store</a>',
				],
			},
		],
	}),
	'palia-aimbot': page({
		title: 'Palia Hunting Aimbot & Soft Aim | {brand}',
		description:
			'Palia hunting aimbot and fishing soft aim for Windows PC — tune strength, smoothness, and hotkeys in the cheat menu. Ships with ESP and wallhack in one license.',
		h1: 'Aimbot',
		intro:
			'Palia aimbot for hunting wildlife and fishing minigames. Soft aim you can tune — part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set strength, smoothness, and hotkeys before you hunt or fish.'],
				list: ['Soft aim strength', 'Fishing assist', 'Hotkeys mid-session'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you need faster catches.'],
				list: ['Legit soft aim', 'Per-tool profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and wallhack in one {brand} license.'],
				list: [
					'<a href="/cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/store/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Palia Teleport Bookmarks Guide | {brand}',
		description:
			'Palia teleport bookmarks for Windows PC — save fishing holes, ore clusters, and map spots, then jump between Kilima Village and Bahari Bay without long walks.',
		h1: 'Teleport',
		intro:
			'Palia teleport saves fishing holes, ore clusters, and map coordinates. Recall them from the cheat menu mid-session.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia teleport bookmarks',
		sections: [
			{
				h2: 'Save coordinates',
				paragraphs: [
					'Bookmark fishing spots, ore nodes, and housing plots while you farm.',
					'Jump back without long walks between Kilima and Bahari Bay.',
				],
				list: ['Named bookmarks', 'Mid-session recall', 'Works with ESP'],
			},
			{
				h2: 'Faster farming',
				paragraphs: [
					'Pair teleport with resource ESP to chain the best gold and skill routes.',
					'Included in the same {brand} license as wallhack and fishing tools.',
				],
				list: ['Ore route jumps', 'Fishing hole recall', 'Housing plot shortcuts'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Teleport ships with wallhack and ESP in one plan.'],
				list: [
					'<a href="/esp/">ESP & wallhack</a>',
					'<a href="/store/">Store</a>',
				],
			},
		],
	}),
	undetected: page({
		title: 'Undetected Palia Cheats | {brand}',
		description:
			'Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild ESP and fishing tools after patches.',
		h1: 'Undetected',
		intro:
			'Undetected palia cheats means active EAC maintenance — not a promise that detection never happens.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Live status',
		sections: [
			{
				h2: 'What undetected means',
				paragraphs: [
					'We rebuild ESP, wallhack, and fishing modules when {antiCheat} or {game} patches require it.',
					'Check Status before you play after patch days.',
				],
				list: ['Live status notes', 'Rebuilds for active licenses', 'No permanent guarantee'],
			},
			{
				h2: 'After a patch',
				paragraphs: ['Wait for our status note, update the loader, then launch Palia.'],
				list: ['Read Updates first', 'Use conservative menu settings', 'Email support if activation fails'],
			},
			{
				h2: 'Buy with maintenance',
				paragraphs: ['Monthly and lifetime plans include rebuild access while your license is active.'],
				list: ['<a href="/store/">Compare plans</a>', '<a href="/setup/">Setup guide</a>'],
			},
		],
	}),
	wallhack: page({
		title: 'Palia Wallhack ESP | {brand}',
		description:
			'Palia wallhack for Windows PC — see ores, fish, and insects through walls in Kilima and Bahari Bay.',
		h1: 'Wallhack',
		intro:
			'Palia wallhack shows hidden resources through walls. Filter by type and range while you farm.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia wallhack overlay',
		sections: [
			{
				h2: 'See through walls',
				paragraphs: [
					'Wallhack outlines for ores, fish, bugs, and forage nodes with distance readouts.',
					'Turn categories on or off to keep the screen clean.',
				],
				list: ['Resource wallhack', 'Adjustable range', 'Opacity filters'],
			},
			{
				h2: 'Kilima & Bahari Bay',
				paragraphs: [
					'Farm village ores and bay fishing holes without missing nodes behind terrain.',
					'Pair wallhack with teleport for faster routes.',
				],
				list: ['Village ore routes', 'Bay fishing spots', 'Housing plot markers'],
			},
			{
				h2: 'Included in cheats',
				paragraphs: ['Wallhack is bundled with ESP, fishing tools, and teleport in one license.'],
				list: ['<a href="/features/">All features</a>', '<a href="/store/">Store</a>'],
			},
		],
	}),
	eac: page({
		title: 'EAC Bypass Palia | {brand}',
		description:
			'EAC bypass guide for palia cheats — what Easy Anti-Cheat patches change and when to wait before you play.',
		h1: 'EAC Bypass',
		intro:
			'Easy Anti-Cheat updates can break palia cheats until we rebuild. This page explains the maintenance workflow.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Live status',
		ctaSecondaryHref: '/status/',
		galleryTitle: 'EAC maintenance for Palia cheats',
		sections: [
			{
				h2: 'How EAC affects cheats',
				paragraphs: [
					'{antiCheat} monitors {game} on Windows PC. Security updates may require new ESP and fishing builds.',
					'Bypass here means timely rebuilds — not a permanent free pass.',
				],
			},
			{
				h2: 'Our patch workflow',
				paragraphs: [
					'We test modules, post status notes, and ship updates to active licenses.',
					'Do not play on an old loader after a major patch until status is green.',
				],
			},
			{
				h2: 'Before you log in',
				paragraphs: ['Check Status, read the latest note, then launch Palia.'],
				list: ['<a href="/status/">Status page</a>'],
			},
		],
	}),
	'cheats-2026': page({
		title: 'Palia Cheats Buyers Guide 2026 | {brand}',
		description:
			'Palia cheats 2026 buyer guide — what to check before you buy ESP, fishing tools, and cheat menu on PC.',
		h1: '2026 Guide',
		intro:
			'Shopping for palia cheats in 2026? Use this checklist — maintenance, features, price, and setup support.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia cheats 2026 overview',
		sections: [
			{
				h2: '2026 checklist',
				paragraphs: [
					'Look for live EAC rebuilds, resource ESP, fishing tools, teleport, and clear status updates.',
					'Avoid stale builds with no patch notes.',
				],
			},
			{
				h2: 'What is included',
				paragraphs: ['One license covers ESP, wallhack, fishing ESP, hunting aimbot, and cheat menu hotkeys.'],
				list: ['Resource ESP', 'Teleport bookmarks', 'Skill automation'],
			},
			{
				h2: 'Before checkout',
				paragraphs: ['Compare pricing, read setup, and bookmark the status page for patch days.'],
				list: ['<a href="/store/">Store</a>', '<a href="/setup/">Setup</a>', '<a href="/status/">Status</a>'],
			},
		],
	}),
	'cheat-download': page({
		title: 'Download Palia Cheats | {brand}',
		description:
			'Palia cheats download — instant digital license by email after checkout on Windows PC.',
		h1: 'Download',
		intro:
			'Palia cheats download starts after payment — license details arrive by email with loader access.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'Palia cheats license delivery',
		sections: [
			{
				h2: 'How delivery works',
				paragraphs: [
					'Checkout confirms payment, then your license email arrives with activation steps.',
					'No physical shipment — access begins when instructions are delivered.',
				],
			},
			{
				h2: 'What you unlock',
				paragraphs: ['Loader, cheat menu, ESP, wallhack, fishing tools, and teleport on Windows PC.'],
				list: ['Instant email delivery', 'Monthly or lifetime', 'Same feature stack'],
			},
			{
				h2: 'First launch',
				paragraphs: ['Follow setup after download. Check status if Palia patched recently.'],
				list: ['<a href="/setup/">Setup</a>', '<a href="/status/">Status</a>'],
			},
		],
	}),
	'mod-menu': page({
		title: 'Palia Mod Menu | {brand}',
		description:
			'Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game on Windows PC.',
		h1: 'Cheat Menu',
		intro:
			'The palia cheat menu lets you turn ESP, wallhack, fishing assist, and teleport on or off mid-session.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia cheat menu controls',
		sections: [
			{
				h2: 'In-game toggles',
				paragraphs: [
					'Hotkeys for ESP categories, wallhack range, and fishing assist without alt-tabbing.',
					'Reduce overlay clutter while you farm or fish.',
				],
				list: ['ESP filters', 'Wallhack range', 'Fishing assist toggle'],
			},
			{
				h2: 'Profiles & hotkeys',
				paragraphs: ['Save hunting and fishing profiles. Switch tools from the menu during a session.'],
			},
			{
				h2: 'After patches',
				paragraphs: ['Menu modules rebuild when EAC updates — check status before play.'],
				list: ['<a href="/status/">Status</a>', '<a href="/aimbot/">Soft aim</a>'],
			},
		],
	}),
	'soft-aim': page({
		title: 'Palia Soft Aim | {brand}',
		description:
			'Palia soft aim for hunting and fishing — tune strength and smoothness on Windows PC.',
		h1: 'Soft Aim',
		intro:
			'Palia soft aim gives smooth hunting and fishing assist you can tune to feel natural in longer sessions.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia soft aim settings',
		sections: [
			{
				h2: 'Smooth assist',
				paragraphs: [
					'Adjust strength and smoothness so assist looks subtle while you hunt or fish.',
					'Raise power only when you need faster catches.',
				],
				list: ['Strength slider', 'Smoothness control', 'Hotkey toggle'],
			},
			{
				h2: 'Per-tool profiles',
				paragraphs: ['Separate settings for bows, rods, and hunting tools.'],
			},
			{
				h2: 'Included with cheats',
				paragraphs: ['Soft aim ships with ESP and wallhack in one {brand} license.'],
				list: ['<a href="/aimbot/">Aimbot</a>', '<a href="/store/">Store</a>'],
			},
		],
	}),
	'best-cheats': page({
		title: 'Best Palia Cheats | {brand}',
		description:
			'Best palia cheats compared — maintenance, ESP stack, fishing tools, price, and support before you buy.',
		h1: 'Best cheats',
		intro:
			'Looking for the best palia cheats? Compare maintenance, features, and price before checkout.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What makes the best',
				paragraphs: [
					'Live EAC rebuilds, honest status notes, and a full farming tool stack.',
					'Not a one-season build with no update log.',
				],
			},
			{
				h2: 'Feature checklist',
				paragraphs: ['Resource ESP, wallhack, fishing ESP, teleport, hunting aimbot, and cheat menu hotkeys.'],
			},
			{
				h2: 'Buy safely',
				paragraphs: ['Use secure checkout, read refund policy, keep your order email.'],
				list: ['<a href="/store/">Pricing</a>', '<a href="/refund/">Refunds</a>'],
			},
		],
	}),
	'aimbot-hack': page({
		title: 'Palia Hunting Aimbot Hack | {brand}',
		description:
			'Palia aimbot hack for hunting and fishing minigames — soft aim with hotkeys on Windows PC.',
		h1: 'Aimbot Hack',
		intro:
			'Palia aimbot hack targets hunting and fishing sessions — not PvP snap aim. Tune FOV and strength in the cheat menu.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia aimbot hack controls',
		sections: [
			{
				h2: 'Hack vs ESP',
				paragraphs: [
					'Aimbot hack assists catches; ESP and wallhack show where resources are.',
					'Both ship in one {brand} license.',
				],
			},
			{
				h2: 'Controls',
				paragraphs: ['FOV, bone priority, and per-tool profiles from the cheat menu.'],
				list: ['Hunting profiles', 'Fishing assist', 'Mid-session hotkeys'],
			},
			{
				h2: 'Maintenance',
				paragraphs: ['Modules rebuild after EAC patches. Check status before play.'],
				list: ['<a href="/status/">Status</a>', '<a href="/aimbot/">Aimbot</a>'],
			},
		],
	}),
	'esp-hack': page({
		title: 'Palia Resource ESP Hack | {brand}',
		description:
			'Palia ESP hack — resource boxes, fishing markers, and distance readouts for Kilima and Bahari Bay.',
		h1: 'ESP Hack',
		intro:
			'Palia ESP hack overlays show ores, fish, insects, and nodes through walls with distance labels.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia ESP hack overlays',
		sections: [
			{
				h2: 'ESP hack overlays',
				paragraphs: [
					'Resource boxes, fishing pins, and snaplines for farming routes.',
					'Filter by resource type to reduce screen noise.',
				],
			},
			{
				h2: 'Farm faster',
				paragraphs: ['Chain Kilima ore runs and Bahari Bay fishing holes without missing hidden nodes.'],
			},
			{
				h2: 'Full package',
				paragraphs: ['ESP hack is part of palia cheats — wallhack and teleport included.'],
				list: ['<a href="/esp/">ESP</a>', '<a href="/features/">Features</a>'],
			},
		],
	}),
	'unlock-all': page({
		title: 'Palia Unlock All Explained | {brand}',
		description:
			'Palia unlock all explained — what players search for vs real ESP, fishing tools, and cheat menu features.',
		h1: 'Unlock All',
		intro:
			'Palia unlock all searches often mean free skins or items. We sell farming cheats — ESP, fishing tools, and teleport.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		galleryTitle: 'Palia unlock all vs real tools',
		sections: [
			{
				h2: 'What unlock-all means',
				paragraphs: [
					'Many searches want instant cosmetics or battle pass items — not the same as ESP or fishing assist.',
					'Be wary of download scams that promise free unlocks.',
				],
			},
			{
				h2: 'What we provide',
				paragraphs: [
					'Resource ESP, wallhack, fishing tools, teleport, and skill automation for live sessions.',
					'Not account-wide cosmetic unlocks.',
				],
			},
			{
				h2: 'Buy the right tool',
				paragraphs: ['If you need farming cheats, compare features and pricing before checkout.'],
				list: ['<a href="/cheats/">Product overview</a>', '<a href="/store/">Store</a>'],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro:
			'Set up palia cheats on Windows PC after checkout. Download the loader, paste your license, and open the cheat menu in minutes.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/status/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy palia cheats first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/status/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro:
			'Palia cheats support for setup, delivery, and billing. Email {email} with your order ID and we will help.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/status/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro:
			'Common questions about buying palia cheats — delivery, ESP, wallhack, setup, updates, and refunds.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital {brand} license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/status/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
