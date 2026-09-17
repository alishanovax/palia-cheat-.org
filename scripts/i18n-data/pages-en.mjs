import { HERO_IMAGES, clampTitle, clampDesc, section, stripcheckoutFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Palia Cheats | Palia Cheats for Windows PC',
		description:
			'Palia Cheats hub — ESP, aimbot, setup, and live status for Kilima and Bahari Bay on Windows PC. Buy on the Cheats page when ready.',
		h1: 'Palia Cheats',
		intro:
			'Your hub for palia cheats on Windows PC — compare features, guides, and patch status before checkout on <a href="/cheats/">Cheats</a>.',
		imageAlt: 'Palia Cheats homepage — ESP and aimbot for Palia',
		galleryTitle: 'Palia Cheats gallery — ESP, aimbot, and wallhack visuals',
		ctaPrimary: 'View Palia Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Start here',
				'This homepage is your map — not the buy page. <a href="/cheats/">Cheats</a> owns checkout and product detail for palia cheats.',
				`Patch and ${EXT.eac} updates ship through ${EXT.palia}. We post rebuild notes on <a href="/status/">Status</a> (undetected maintenance) before you log in.`,
				'Still researching? Compare <a href="/download/">download</a> and <a href="/best/">best cheats</a> guides, then open Store when you are ready.',
			),
			section(
				'Popular pages',
				'Browse <a href="/esp/">ESP & wallhack</a>, <a href="/aimbot/">aimbot</a>, and <a href="/teleport/">teleport</a> for module detail.',
				'Ready to buy? Open <a href="/cheats/">Cheats</a> or <a href="/store/">Store</a>, follow <a href="/setup/">setup</a> after delivery, and bookmark <a href="/faq/">FAQ</a> plus <a href="/support/">support</a>.',
			),
		],
	},
	'palia-esp': {
		title: 'Palia ESP 2026 | resource ESP & Wallhack',
		description:
			'Palia ESP for Windows PC — resource ESP, resource markers, and distance readouts. Part of our undetected palia cheats for Palia.',
		h1: 'Palia ESP — resource ESP & Wallhack',
		intro:
			'Palia esp visibility tools for session and co-op sessions. Read resource nodes, players, wildlife, loot, and distance before you commit — toggleable palia esp wallhack overlays bundled in our palia cheats package.',
		imageAlt: "Palia ESP resource ESP and distance readouts in a session",
		galleryTitle: 'Palia ESP overlay visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Palia wallhack guide',
		ctaSecondaryHref: '/esp/',
		sections: [
			section(
				'What Palia ESP solves in sessions',
				'Palia maps punish incomplete information. Palia Cheats ESP wallhack helps you spot resource nodes early, spot players and wildlife before they push your angle, and mark rare resources worth the detour.',
				'On session, co-op sessions, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a seasond squad. ESP ships bundled with wallhack overlays and Aimbot in one license.',
				`Palia’s live seasons and map updates are published by Singularity 6 (${EXT.palia}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, rare nodes, and loot ESP wallhack categories',
				'Toggle ores, fish, and insects outlines, rare nodes markers, map zones cues, and loot pins so only session-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Kilima and Bahari Bay sessions lobbies alike.',
				'Compare category detail on the <a href="/esp/">wallhack page</a> and pair visibility with the <a href="/teleport/">wallhack</a> for flanks outside your FOV.',
				[
					'ores, fish, and insects ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'rare nodes and map zones awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with EAC maintenance',
				'Palia Cheats ESP wallhack is maintained for Palia with rebuilds after Easy Anti-Cheat patches. Check the <a href="/status/">Updates page</a> before you logging in — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/status/">EAC bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the hunting sessions. Review <a href="/aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/store/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/cheats/">Palia cheats pillar</a> and <a href="/cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'palia-aimbot': {
		title: 'Palia Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Palia aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our palia cheats package.',
		h1: 'Palia Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Palia hunting sessions. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and wallhack in one undetected license.',
		imageAlt: "Palia aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Palia Aimbot combat previews',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/esp/',
		sections: [
			section(
				'Aimbot tuned for Palia combat pace',
				'Palia mixes long-range AR fights with close-quarters SMG pushes. Palia Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during fishing sessions and close-range wildlife fights.',
				`Weapon balance and season rules change via ${EXT.palia}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live catch windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for bows, rods, and tools. Switch between long-range DMR fights and village center clears without reopening menus every session.',
				'Prefer softer tracking? Read the <a href="/aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/esp/">ESP wallhack</a> and <a href="/teleport/">wallhack</a> in the same Palia Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / hunting tools',
				],
			),
			section(
				'EAC maintenance for undetected Aimbot',
				'Palia Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Palia patches land. Maintenance notes appear on the <a href="/status/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/status/">EAC maintenance guide</a> before logging in on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and wallhack. Compare options on <a href="/store/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Palia Cheats Features | ESP, Soft Aim & wallhack',
		description:
			'Full palia cheats feature list: ESP boxes, soft aim, wallhack, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Palia Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, wallhack, and Aimbot control included in the Palia Cheats package for Palia on Windows PC — with EAC maintenance after major patches.',
		imageAlt: "Palia Cheats features — ESP, soft aim, and wallhack screenshots",
		galleryTitle: 'Palia Cheats feature gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/store/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'ores, fish, and insects ESP wallhack, rare nodes and map zones awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.',
				'Team and enemy colour coding supports Kilima and Bahari Bay sessions. Deep-dive the <a href="/esp/">ESP page</a> and <a href="/esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.palia} season and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'wallhack and Aimbot controls',
				'wallhack overlay with directional threat cues, configurable range for rotations and late-session map zones, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, wallhack, and Aimbot during live Palia sessions. See <a href="/teleport/">wallhack</a> and <a href="/aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and EAC maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href="/status/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you logging in. Setup and billing help lives on <a href="/support/">Support</a> and support@paliacheats.org.`,
				'Next step: compare plans on <a href="/store/">Pricing</a> or read <a href="/cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Palia Cheats Pricing | $35/mo or $150 Life',
		description:
			'Palia cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and wallhack on Windows PC. Instant delivery — pick a plan.',
		h1: 'Palia Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Palia Cheats — ESP wallhack, wallhack, and Aimbot for Palia on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Palia Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Palia Cheats package visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Palia Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, wallhack, and Aimbot access with EAC maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Palia Cheats package — ideal if you play Palia regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, resource markers, wallhack overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Palia patches.',
				`Season calendars and client updates come from ${EXT.palia}. Active licenses receive rebuild access when we publish maintenance on <a href="/status/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/cheats/">Palia cheats</a>, <a href="/cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Palia Cheats Setup | Windows PC Guide',
		description:
			'Set up palia cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check EAC updates before your first logging in.',
		h1: 'Palia Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Palia Cheats for Palia on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before logging in.',
		imageAlt: "Palia Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Palia Cheats setup visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Palia Cheats',
				'Confirm your order email and license details. Check the <a href="/status/">Updates page</a> for the latest EAC maintenance build before launching Palia.',
				`Also glance at ${EXT.status} if Singularity 6 services look unstable on patch day — a platform outage is not a license fault.`,
				'Palia Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, wildlife, and loot — then tune wallhack range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, wallhack, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/esp/">ESP</a>, <a href="/aimbot/">Aimbot</a>, and <a href="/cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Palia or Easy Anti-Cheat patches',
				'When Singularity 6 ships a major Palia update or Easy Anti-Cheat patch, revisit Updates before logging in. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/status/">EAC bypass page</a> and <a href="/cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Palia Cheats Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'Palia cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and wallhack on Windows PC. Check status before logging in after patches.',
		h1: 'Palia Cheats Updates — Maintenance Log',
		intro:
			'Track EAC maintenance and Palia patch rebuilds for the undetected ESP wallhack, wallhack, and Aimbot package. Check here before logging in after major updates.',
		imageAlt: "Palia Cheats live status after EAC and game patches",
		galleryTitle: 'Palia patch and maintenance visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Palia and Easy Anti-Cheat receive frequent patches. Palia Cheats publishes maintenance notes when ESP wallhack, wallhack, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Singularity 6 platform health and this page for Palia Cheats build status — both matter on big update days.`,
				'Checking this log before you logging in reduces surprises after game days or seasonal launches on session and co-op sessions.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, wallhack range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/store/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/status/">EAC bypass guide</a> and <a href="/cheats/">undetected Palia cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.palia}, then confirm our rebuild is live before you logging in.`,
				'For urgent status questions after a EAC update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Palia Cheats FAQ | ESP, Soft Aim & wallhack Answers',
		description:
			'Palia cheats FAQ: ESP boxes, soft aim, EAC maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Palia Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Palia Cheats — ESP wallhack, wallhack, Aimbot, EAC maintenance, checkout, and Palia compatibility on Windows PC.',
		imageAlt: "Palia Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Palia Cheats FAQ visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Palia Cheats?',
				'Palia Cheats is an undetected cheat package for Palia on Windows PC. It includes ESP wallhack, wallhack-style awareness, and Aimbot controls with EAC maintenance updates.',
				'Packages cover session and co-op sessions. Explore <a href="/features/">Features</a> for the full control list and <a href="/esp/">ESP</a> / <a href="/aimbot/">Aimbot</a> for module detail.',
				`Palia itself is published by Singularity 6 (${EXT.palia}). Cheats are third-party tools and may violate Singularity 6' rules — use is at your own risk.`,
			),
			section(
				'Are Palia Cheats undetected in 2026?',
				'Palia Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/status/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/cheats/">undetected Palia cheats</a> and the <a href="/status/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before logging in are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/store/">Pricing</a>.',
				'Contact support@paliacheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Palia Cheats Support | Help & Contact',
		description:
			'Contact palia cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Palia Cheats Support — Contact Us',
		intro:
			'Get help with Palia Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for Palia on Windows PC.',
		imageAlt: "Palia Cheats support page for license and setup help",
		galleryTitle: 'Palia Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/status/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Palia Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Singularity 6 bans.',
				`Account and game policy questions belong with Singularity 6. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href="/status/">Easy Anti-Cheat page</a>.',
				'Email: support@paliacheats.org',
				'Ready to purchase or renew? Open <a href="/store/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Palia Cheats 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected palia cheats with EAC maintenance for ESP boxes, soft aim, and wallhack on Windows PC. Check status before you logging in.',
		h1: 'Undetected Palia Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How Palia Cheats stays maintained for Palia after Easy Anti-Cheat patches — ESP wallhack, wallhack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Palia Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Palia Cheats visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'EAC bypass guide',
		ctaSecondaryHref: '/status/',
		sections: [
			section(
				'What undetected means for Palia Cheats',
				'Undetected Palia Cheats means the package is actively maintained against Easy Anti-Cheat and major Palia patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, wallhack behavior, and Aimbot signatures after EAC security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Palia client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'EAC maintenance workflow',
				'When Easy Anti-Cheat or Palia updates ship, the team assesses ESP, wallhack, and Aimbot modules, publishes status on the <a href="/status/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/status/">EAC bypass Palia guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/store/">Pricing</a>.',
				'New buyers should also read <a href="/cheats/">Palia cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Palia Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Palia wallhack ESP with resource ESP and resource markers for Windows PC. Undetected palia cheats — learn overlays and buy.',
		h1: 'Palia Wallhack — ESP Boxes & Visibility',
		intro:
			'Palia wallhack ESP for Palia — see players, loot, rare nodes, and containers through toggleable wallhack overlays built for Kilima and Bahari Bay sessions.',
		imageAlt: "Palia wallhack visibility through walls in a session",
		galleryTitle: 'Palia wallhack ESP gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Palia ESP page',
		ctaSecondaryHref: '/esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Palia wallhack focuses on information — player outlines, loot pins, rare nodes threat cues — rather than automatic aiming. Palia Cheats bundles wallhack ESP with wallhack and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and map zones holds.',
				'For the broader ESP keyword page see <a href="/esp/">Palia ESP</a>; for combat assist see <a href="/aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support session, co-op sessions, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.palia}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/teleport/">wallhack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/status/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/cheats/">undetected Palia cheats</a> and <a href="/status/">EAC bypass</a>.',
				'Ready to buy? Compare <a href="/store/">Pricing</a> or continue to the <a href="/esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Palia Wallhack | Teleport & ESP Overlay',
		description:
			'Palia wallhack and teleport tools for Windows PC — see resources through walls and move between Kilima and Bahari Bay.',
		h1: 'Palia Wallhack & Teleport',
		intro:
			'Palia wallhack overlays plus teleport bookmarks for Kilima Village and Bahari Bay. Included in the same palia cheats license.',
		imageAlt: 'Palia wallhack overlay with resource ESP in Bahari Bay',
		galleryTitle: 'Palia wallhack visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'See ESP guide',
		ctaSecondaryHref: '/esp/',
		sections: [
			section(
				'Wallhack for resource farming',
				'See ores, fish, and insects through walls while you farm Kilima Village and Bahari Bay.',
				'Pair wallhack with <a href="/esp/">resource ESP</a> for the fastest gold and skill routes.',
				'Teleport between saved coordinates to skip long walks between nodes.',
			),
			section(
				'Teleport bookmarks',
				'Save spots for fishing holes, ore clusters, and housing plots. Recall them from the cheat menu mid-session.',
				'Works alongside fishing tools and skill automation in one palia cheats license.',
				'Compare plans on <a href="/store/">Pricing</a> before checkout.',
			),
			section(
				'Maintenance',
				'Wallhack and teleport modules rebuild after Easy Anti-Cheat patches. Check <a href="/status/">Updates</a> before you play.',
				'Setup steps are on the <a href="/setup/">Setup guide</a>.',
				'Questions? Email <a href="/support/">Support</a> with your order ID.',
			),
		],
	},
	'eac': {
		title: 'EAC Bypass Palia | Palia Cheats Maintenance',
		description:
			'How palia cheats rebuild after EAC patches — ESP boxes, soft aim, and wallhack maintenance for Windows PC. Read before logging in.',
		h1: 'EAC Bypass — Palia Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for Palia Cheats — how ESP wallhack, wallhack, and Aimbot rebuild after Palia security updates.',
		imageAlt: "Palia Cheats maintenance after a EAC patch",
		galleryTitle: 'EAC maintenance visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/status/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Singularity 6' anti-cheat for Palia on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, wallhack, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Palia Cheats monitors EAC patch notes and Palia seasonal updates from ${EXT.palia} to schedule module reviews.`,
				'“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a EAC patch',
				'The team tests ESP overlays, wallhack signatures, and Aimbot profiles against the new build, publishes status on <a href="/status/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Singularity 6 service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid logging in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/cheats/">undetected Palia cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'EAC bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/store/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Palia Cheats 2026 | ESP Soft Aim & wallhack',
		description:
			'Best palia cheats 2026: ESP boxes, soft aim, and wallhack for Windows PC. Undetected palia cheats with EAC maintenance — compare and buy.',
		h1: 'Palia Cheats 2026 — ESP, Soft Aim & wallhack',
		intro:
			'The 2026 Palia Cheats package for Palia — undetected ESP wallhack, wallhack, and Aimbot with EAC maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Palia Cheats product overview for Palia",
		galleryTitle: 'Palia Cheats 2026 gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why palia cheats buyers choose Palia Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Palia Cheats bundles ESP wallhack, wallhack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.palia}, then use our <a href="/status/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover session and co-op sessions loops — see <a href="/store/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, resource markers, wallhack overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/cheats/">Palia cheats pillar</a>, <a href="/esp/">ESP</a>, <a href="/aimbot/">Aimbot</a>, <a href="/esp/">wallhack</a>, <a href="/teleport/">wallhack</a>, <a href="/cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/cheats/">Palia cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/cheats/">Palia cheats</a> checklist, <a href="/forum/cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@paliacheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Palia Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'Palia cheats for Windows PC: undetected ESP wallhack, wallhack, and Aimbot with EAC maintenance. Compare palia cheats options and buy the full package.',
		h1: 'Palia Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Palia cheats for session and co-op sessions combine ESP wallhack visibility, wallhack-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for palia cheats in 2026.',
		imageAlt: "Palia Cheats product page — ESP, aimbot, and wallhack",
		galleryTitle: 'Palia cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/cheats/',
		sections: [
			section(
				'What Palia cheats include in 2026',
				'Players searching for Palia cheats usually want visibility and combat tools without stacking separate downloads. Palia Cheats bundles player ESP wallhack, resource markers, wallhack overlays, and configurable Aimbot in one maintained package — the same toolkit often called palia cheats.',
				'Coverage spans session and co-op sessions with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.palia}; our hacks package tracks those releases via the <a href="/status/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day logging ins.`,
			),
			section(
				'How this Palia cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/cheats/">palia cheats 2026</a> and <a href="/cheats/">Palia cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/esp/">Palia ESP</a>, <a href="/aimbot/">Palia Aimbot</a>, <a href="/esp/">wallhack</a>, <a href="/teleport/">wallhack</a>, and <a href="/aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/forum/cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/forum/escape-from-palia-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/forum/undetected-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'Palia cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Palia Cheats maps the full session loop: read resource nodes, track rare nodes and containers, spot flanks on wallhack, and tune Aimbot per weapon class.',
				'Compare the <a href="/esp/">ESP</a>, <a href="/aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/store/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/cheats/">mod menu</a>, <a href="/aimbot/">aimbot</a>, <a href="/esp/">ESP</a>.',
			),
			section(
				'Undetected Palia cheats with EAC maintenance',
				'Undetected Palia cheats require rebuilds after Easy Anti-Cheat and major Palia patches. Check Updates before logging in — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/status/">EAC bypass guide</a> for the practical workflow. Pair with <a href="/cheats/">undetected Palia cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Palia Hack Download 2026 | Instant Access',
		description:
			'Palia cheat download with instant license delivery — ESP boxes, soft aim, and wallhack for Windows PC. Buy, activate, and play.',
		h1: 'Palia Hack Download — Instant License Delivery',
		intro:
			'How Palia cheat download works for Palia — digital license delivery after payment confirmation, with ESP wallhack, wallhack, and Aimbot access on Windows PC.',
		imageAlt: "Palia Cheats download and install delivery flow",
		galleryTitle: 'Palia cheat download visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Palia cheat download delivery works',
				'After checkout confirms payment, Palia Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Singularity 6 services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Palia cheat download includes player ESP wallhack, loot and container markers, wallhack overlays, Aimbot profiles, and in-client toggles for Kilima and Bahari Bay sessions.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/store/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/esp/">ESP</a>, <a href="/aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Palia or Easy Anti-Cheat patches ship, check the <a href="/status/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Palia Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Palia mod menu for in-match toggles — ESP boxes, soft aim, wallhack, and on Windows PC. Undetected palia cheats package.',
		h1: 'Palia Mod Menu — In-Client Control Panel',
		intro:
			'Palia mod menu controls for Palia — toggle ESP wallhack categories, wallhack range, and Aimbot profiles mid-match without leaving your Palia session on Windows PC.',
		imageAlt: "Palia Cheats in-game menu controls",
		galleryTitle: 'Palia mod menu gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Palia mod menu controls',
				'A Palia mod menu is the in-client panel where you enable ESP wallhack overlays, adjust wallhack range, and switch Aimbot profiles during live matches. Palia Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, resource markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Palia.',
				'Control deep-dives: <a href="/esp/">ESP</a>, <a href="/aimbot/">Aimbot</a>, <a href="/teleport/">wallhack</a>.',
			),
			section(
				'Mod menu categories for Kilima and Bahari Bay sessions',
				'Separate ESP wallhack categories for players, loot, containers, and rare nodes let you reduce overlay noise during rotations and map zones holds.',
				'wallhack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.palia} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after EAC patches',
				'Palia mod menu behavior is rebuilt when Easy Anti-Cheat or major Palia updates land. Follow the <a href="/status/">Updates page</a> and <a href="/status/">EAC bypass guide</a> before logging in on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/store/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Palia Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Palia soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our palia cheats with ESP boxes.',
		h1: 'Palia Soft Aim — Smooth Aimbot Controls',
		intro:
			'Palia soft aim settings for Palia — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and wallhack in one undetected license.',
		imageAlt: "Palia soft aim FOV and smoothness settings",
		galleryTitle: 'Palia soft aim gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/aimbot/',
		sections: [
			section(
				'What Palia soft aim means',
				'Palia soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Palia Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR hunting sessions.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during fishing sessions.',
				'Full Aimbot documentation: <a href="/aimbot/">Palia Aimbot</a>. Alternate wording: <a href="/aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for bows, rods, and tools. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.palia} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/esp/">ESP wallhack</a> and <a href="/teleport/">wallhack</a> overlays.',
			),
			section(
				'Undetected soft aim with EAC maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/status/">Updates page</a> before logging in — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/store/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Palia Cheats 2026 | Buyer Guide',
		description:
			'Best palia cheats for 2026: ESP boxes, soft aim, and EAC maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Palia Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Palia cheats for Palia in 2026 — undetected ESP wallhack, wallhack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "Palia Cheats overview for Palia on PC",
		galleryTitle: 'Best Palia cheats gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/store/',
		sections: [
			section(
				'What makes the Palia cheats in 2026',
				'The Palia cheats combine active EAC maintenance, a full ESP wallhack and wallhack stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Palia Cheats covers session and co-op sessions with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/status/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Palia cheats feature checklist',
				'Look for player ESP wallhack, resource markers, wallhack overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Palia patches.',
				'Review <a href="/features/">Features</a>, <a href="/cheats/">undetected status</a>, and <a href="/cheats/">Palia cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/esp/">ESP</a>, <a href="/aimbot/">Aimbot</a>, <a href="/cheats/">hacks</a>.',
			),
			section(
				'Buying the Palia cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first logging in — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Singularity 6 terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Palia Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Palia aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our palia cheats package.',
		h1: 'Palia Aimbot Hack — Soft Aim Assist',
		intro:
			'Palia aimbot hack tools for Palia — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and wallhack in one undetected license.',
		imageAlt: "Palia aimbot hack controls and bone priority",
		galleryTitle: 'Palia aimbot hack gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/aimbot/',
		sections: [
			section(
				'Palia aimbot hack vs visibility tools',
				'A Palia aimbot hack focuses on assisted targeting during hunting sessions — while ESP wallhack and wallhack handle map awareness. Palia Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Palia combat pace across Kilima and Bahari Bay sessions.',
				'Prefer softer tracking language? See <a href="/aimbot/">soft aim</a>. Full settings: <a href="/aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session map zones.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.palia} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/status/">Updates page</a> and <a href="/status/">EAC bypass guide</a> before logging in after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/store/">Pricing</a>.',
				'Pair with <a href="/esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Palia ESP Hack 2026 | resource ESP & Loot',
		description:
			'Palia ESP hack with resource ESP and resource markers for Windows PC. Undetected palia cheats with — see overlays and buy.',
		h1: 'Palia ESP Hack — resource ESP Guide',
		intro:
			'Palia ESP hack overlays for Palia — player outlines, rare nodes threat cues, loot and container markers with distance readouts across session and co-op sessions.',
		imageAlt: "Palia ESP hack boxes and resource markers",
		galleryTitle: 'Palia ESP hack gallery',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/esp/',
		sections: [
			section(
				'What a Palia ESP hack shows',
				'A Palia ESP hack renders ores, fish, and insects outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/esp/">Palia ESP</a>. Wallhack wording: <a href="/esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for sessions',
				'Toggle player ESP hack, resource markers, chest pins, and vehicle cues independently so only session-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Kilima and Bahari Bay sessions.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with EAC maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and Palia patches. Check the <a href="/status/">Updates page</a> before logging in — pair ESP hack awareness with <a href="/teleport/">wallhack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/store/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Palia Unlock All 2026 | What It Really Means',
		description:
			'Palia unlock all explained vs real palia cheats — ESP boxes, soft aim, and wallhack for Windows PC. Know what you are buying.',
		h1: 'Palia Unlock All — What Players Search For',
		intro:
			'Palia unlock all is a common search term for Palia — this page clarifies what unlock-all tools claim versus the ESP wallhack, wallhack, and Aimbot tools Palia Cheats actually provides on Windows PC.',
		imageAlt: "Palia Cheats license features overview",
		galleryTitle: 'Palia unlock all guide visuals',
		ctaPrimary: 'Buy Palia Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Palia unlock all usually means',
				'Palia unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Palia Cheats focuses on in-match awareness — player ESP, resource markers, wallhack overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and season progression items are sold through ${EXT.palia}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot resource nodes, rare nodes, and rare resources during live matches. wallhack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/cheats/">Palia cheats</a> and <a href="/cheats/">Palia cheats</a>.',
			),
			section(
				'Buying Palia Cheats for the right reasons',
				'If you need undetected ESP wallhack, wallhack, and Aimbot for Palia on Windows PC, compare <a href="/store/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/status/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Palia Cheats',
		description:
			'Privacy policy for Palia Cheats. How we handle support emails, order data, and checkout for palia cheats licenses on paliacheats.org.',
		h1: 'Privacy Policy',
		intro: 'How Palia Cheats handles information when you browse paliacheats.org or contact support about a Palia license.',
		imageAlt: "Palia Cheats privacy policy page",
		galleryTitle: 'Palia Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Palia Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@paliacheats.org with your request details.',
				'Policy updates publish on this page. Continued use of paliacheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Palia Cheats',
		description:
			'Refund policy for Palia Cheats. Digital delivery terms and eligibility for palia cheats packages with ESP, soft aim, and wallhack.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Palia Cheats licenses — ESP wallhack, wallhack, and Aimbot packages purchased through checkout for Palia.',
		imageAlt: "Palia Cheats refund policy page",
		galleryTitle: 'Palia Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Palia Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@paliacheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/store/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Palia Cheats Rules',
		description:
			'Terms of use for paliacheats.org and Palia Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of paliacheats.org and Palia Cheats licenses for Palia on Windows PC.',
		imageAlt: "Palia Cheats terms of use page",
		galleryTitle: 'Palia Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Palia Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, wallhack, and Aimbot tools for Palia on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Palia may violate Singularity 6 terms and result in account penalties. Palia Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@paliacheats.org for questions. Related policies: <a href="/privacy/">Privacy</a> and <a href="/refund/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripcheckoutFromMeta(page.title)),
		description: clampDesc(stripcheckoutFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
