import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; store: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'palia-esp' | 'palia-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Store",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
					store: "Store",
				},
				hero: {
					accent: "Palia cheats hub for Windows PC",
					accentShort: "Guides, status & plans",
					subtitle: "Hub for Palia cheats on Windows PC — compare features, setup guides, and live status. Buy on the Cheats page when you are ready.",
					subtitleShort: "Palia ESP & wallhack for PC",
					buyNow: "Buy Palia Cheats",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Palia Cheats is live for Palia on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "EAC maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Live status",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Palia Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Palia Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Palia cheats hub for Windows PC.\nFeatures, setup, and live status.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats | Palia Hub for Windows PC",
					description: "Palia Cheats hub — ESP, aimbot, setup, and live status for Kilima and Bahari Bay on Windows PC. Buy on the Cheats page when ready.",
					h1: "Palia Cheats",
					intro: "Your hub for {game} on Windows PC — compare features, guides, and patch status before checkout on <a href=\"/cheats/\">Cheats</a>.",
					imageAlt: "Palia Cheats homepage — ESP and aimbot for Palia",
					galleryTitle: "Palia Cheats gallery — ESP, aimbot, and wallhack visuals",
					ctaPrimary: "View Palia Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Start here",
							paragraphs: [
								"This homepage is your map — not the buy page. <a href=\"/cheats/\">Cheats</a> owns checkout and product detail for palia cheats.",
								"Patch and <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> updates ship through <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>. We post rebuild notes on <a href=\"/status/\">Status</a> (undetected maintenance) before you log in.",
								"Still researching? Compare <a href=\"/setup/\">download</a> and <a href=\"/cheats/\">best cheats</a> guides, then open Store when you are ready.",
							],
						},
						{
							h2: "Popular pages",
							paragraphs: [
								"Browse <a href=\"/esp/\">ESP & wallhack</a>, <a href=\"/aimbot/\">aimbot</a>, and <a href=\"/teleport/\">teleport</a> for module detail.",
								"Ready to buy? Open <a href=\"/cheats/\">Cheats</a> or <a href=\"/store/\">Store</a>, follow <a href=\"/setup/\">setup</a> after delivery, and bookmark <a href=\"/faq/\">FAQ</a> plus <a href=\"/support/\">support</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-kilima-village.webp",
				},
				"palia-esp": {
					title: "Palia ESP 2026 | resource ESP & Wallhack",
					description: "Palia ESP for Windows PC — resource ESP, resource markers, and distance readouts. Part of our undetected palia cheats for Palia.",
					h1: "Palia ESP — resource ESP & Wallhack",
					intro: "Palia esp visibility tools for session and co-op sessions. Read resource nodes, players, wildlife, loot, and distance before you commit — toggleable palia esp wallhack overlays bundled in our palia cheats package.",
					imageAlt: "Palia ESP resource ESP and distance readouts in a session",
					galleryTitle: "Palia ESP overlay visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Palia wallhack guide",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "What Palia ESP solves in sessions",
							paragraphs: [
								"Palia maps punish incomplete information. Palia Cheats ESP wallhack helps you spot resource nodes early, spot ores, fish, and insects before you commit to a route, and mark rare resources worth the detour.",
								"In co-op sessions, ESP helps you spot ores, fish, and insects before you commit to a route. ESP ships bundled with wallhack overlays and Aimbot in one license.",
								"Palia’s live seasons and map updates are published by Singularity 6 (<a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, rare nodes, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle ores, fish, and insects outlines, rare nodes markers, map zones cues, and loot pins so only session-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Category colour coding supports Kilima and Bahari Bay sessions lobbies alike.",
								"Compare category detail on the <a href=\"/esp/\">wallhack page</a> and pair visibility with the <a href=\"/teleport/\">wallhack</a> for flanks outside your FOV.",
							],
							list: [
								"ores, fish, and insects ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"rare nodes and map zones awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with EAC maintenance",
							paragraphs: [
								"Palia Cheats ESP wallhack is maintained for Palia with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/status/\">Updates page</a> before you log in — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/status/\">EAC bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first session.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins farming routes; Aimbot covers the hunting sessions. Review <a href=\"/aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/store/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/cheats/\">Palia cheats pillar</a> and <a href=\"/cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-ore-mining.webp",
				},
				"palia-aimbot": {
					title: "Palia Aimbot 2026 | Soft Aim for Windows PC",
					description: "Palia aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our palia cheats package.",
					h1: "Palia Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Palia hunting sessions. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and wallhack in one undetected license.",
					imageAlt: "Palia aimbot and soft aim controls on Windows PC",
					galleryTitle: "Palia Aimbot combat previews",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Aimbot tuned for Palia combat pace",
							paragraphs: [
								"Palia mixes hunting and fishing minigames with soft aim profiles. Palia Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-session.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during fishing sessions and close-range wildlife fights.",
								"Weapon balance and season rules change via <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live catch windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for bows, rods, and tools. Switch between long-range DMR fights and village center clears without reopening menus every session.",
								"Prefer softer tracking? Read the <a href=\"/aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/esp/\">ESP wallhack</a> and <a href=\"/teleport/\">wallhack</a> in the same Palia Cheats license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-session",
								"Per-weapon profile slots for bows, rods, and hunting tools",
							],
						},
						{
							h2: "EAC maintenance for undetected Aimbot",
							paragraphs: [
								"Palia Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Palia patches land. Maintenance notes appear on the <a href=\"/status/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> and anti-cheat context on <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>, then follow our <a href=\"/status/\">EAC maintenance guide</a> before logging in on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and wallhack. Compare options on <a href=\"/store/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
				},
				features: {
					title: "Palia Cheats Features | ESP, Soft Aim & wallhack",
					description: "Full palia cheats feature list: ESP boxes, soft aim, wallhack, and toggles for Windows PC. Review controls before checkout.",
					h1: "Palia Cheats Features — Full Control List",
					intro: "Every ESP wallhack, wallhack, and Aimbot control included in the Palia Cheats package for Palia on Windows PC — with EAC maintenance after major patches.",
					imageAlt: "Palia Cheats features — ESP, soft aim, and wallhack screenshots",
					galleryTitle: "Palia Cheats feature gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"ores, fish, and insects ESP wallhack, rare nodes and map zones awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.",
								"Category colour coding supports Kilima and Bahari Bay sessions. Deep-dive the <a href=\"/esp/\">ESP page</a> and <a href=\"/esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a> season and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "wallhack and Aimbot controls",
							paragraphs: [
								"wallhack overlay with directional threat cues, configurable range for rotations and late-session map zones, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, wallhack, and Aimbot during live Palia sessions. See <a href=\"/teleport/\">wallhack</a> and <a href=\"/aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/cheats/\">mod menu page</a> explains mid-session toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and EAC maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href=\"/status/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> on patch days, then confirm rebuild notes before you log in. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@paliacheats.org.",
								"Next step: compare plans on <a href=\"/store/\">Pricing</a> or read <a href=\"/cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-housing-interior.webp",
				},
				pricing: {
					title: "Palia Cheats Pricing | $35/mo or $150 Life",
					description: "Palia cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and wallhack on Windows PC. Instant delivery — pick a plan.",
					h1: "Palia Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Palia Cheats — ESP wallhack, wallhack, and Aimbot for Palia on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Palia Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Palia Cheats package visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Palia Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, wallhack, and Aimbot access with EAC maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Palia Cheats package — ideal if you play Palia regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, resource markers, wallhack overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Palia patches.",
								"Season calendars and client updates come from <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/status/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/cheats/\">Palia cheats</a>, <a href=\"/cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-homestead.webp",
				},
				setup: {
					title: "Palia Cheats Setup | Windows PC Guide",
					description: "Set up palia cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check EAC updates before your first logging in.",
					h1: "Palia Cheats Setup — Windows PC Guide",
					intro: "Install and configure Palia Cheats for Palia on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before logging in.",
					imageAlt: "Palia Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Palia Cheats setup visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Palia Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/status/\">Updates page</a> for the latest EAC maintenance build before launching Palia.",
								"Also glance at <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> if Singularity 6 services look unstable on patch day — a platform outage is not a license fault.",
								"Palia Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, wildlife, and loot — then tune wallhack range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, wallhack, and Aimbot mid-session. Details for Easy Anti-Cheat module live on <a href=\"/esp/\">ESP</a>, <a href=\"/aimbot/\">Aimbot</a>, and <a href=\"/cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Palia or Easy Anti-Cheat patches",
							paragraphs: [
								"When Singularity 6 ships a major Palia update or Easy Anti-Cheat patch, revisit Updates before logging in. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/status/\">EAC bypass page</a> and <a href=\"/cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-housing-interior.webp",
				},
				updates: {
					title: "Palia Cheats Updates | Easy Anti-Cheat Maintenance Log",
					description: "Palia cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and wallhack on Windows PC. Check status before logging in after patches.",
					h1: "Palia Cheats Updates — Maintenance Log",
					intro: "Track EAC maintenance and Palia patch rebuilds for the undetected ESP wallhack, wallhack, and Aimbot package. Check here before logging in after major updates.",
					imageAlt: "Palia Cheats live status after EAC and game patches",
					galleryTitle: "Palia patch and maintenance visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Palia and Easy Anti-Cheat receive frequent patches. Palia Cheats publishes maintenance notes when ESP wallhack, wallhack, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> for Singularity 6 platform health and this page for Palia Cheats build status — both matter on big update days.",
								"Checking this log before you log in reduces surprises after game days or seasonal launches on session and co-op sessions.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, wallhack range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/store/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/status/\">EAC bypass guide</a> and <a href=\"/cheats/\">undetected Palia cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>, then confirm our rebuild is live before you log in.",
								"For urgent status questions after a EAC update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-kilima-village.webp",
				},
				faq: {
					title: "Palia Cheats FAQ | ESP, Soft Aim & wallhack Answers",
					description: "Palia cheats FAQ: ESP boxes, soft aim, EAC maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Palia Cheats FAQ — Common Questions",
					intro: "Answers about undetected Palia Cheats — ESP wallhack, wallhack, Aimbot, EAC maintenance, checkout, and Palia compatibility on Windows PC.",
					imageAlt: "Palia Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "Palia Cheats FAQ visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Palia Cheats?",
							paragraphs: [
								"Palia Cheats is an undetected cheat package for Palia on Windows PC. It includes ESP wallhack, wallhack-style awareness, and Aimbot controls with EAC maintenance updates.",
								"Packages cover session and co-op sessions. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/esp/\">ESP</a> / <a href=\"/aimbot/\">Aimbot</a> for module detail.",
								"Palia itself is published by Singularity 6 (<a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>). Cheats are unofficial tools and may violate Singularity 6 rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Palia Cheats undetected in 2026?",
							paragraphs: [
								"Palia Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/status/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/cheats/\">undetected Palia cheats</a> and the <a href=\"/status/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before logging in are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/store/\">Pricing</a>.",
								"Contact support@paliacheats.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-homestead.webp",
				},
				support: {
					title: "Palia Cheats Support | Help & Contact",
					description: "Contact palia cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Palia Cheats Support — Contact Us",
					intro: "Get help with Palia Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for Palia on Windows PC.",
					imageAlt: "Palia Cheats support page for license and setup help",
					galleryTitle: "Palia Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/status/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Palia Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Singularity 6 bans.",
								"Account and game policy questions belong with Singularity 6. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href=\"/status/\">Easy Anti-Cheat page</a>.",
								"Email: support@paliacheats.org",
								"Ready to purchase or renew? Open <a href=\"/store/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-kilima-village.webp",
				},
				undetected: {
					title: "Undetected Palia Cheats 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected palia cheats with EAC maintenance for ESP boxes, soft aim, and wallhack on Windows PC. Check status before you log in.",
					h1: "Undetected Palia Cheats — Easy Anti-Cheat Maintenance",
					intro: "How Palia Cheats stays maintained for Palia after Easy Anti-Cheat patches — ESP wallhack, wallhack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Palia Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Palia Cheats visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "EAC bypass guide",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "What undetected means for Palia Cheats",
							paragraphs: [
								"Undetected Palia Cheats means the package is actively maintained against Easy Anti-Cheat and major Palia patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, wallhack behavior, and Aimbot signatures after EAC security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>; Palia client updates ship through <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "EAC maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or Palia updates ship, the team assesses ESP, wallhack, and Aimbot modules, publishes status on the <a href=\"/status/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/status/\">EAC bypass Palia guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/store/\">Pricing</a>.",
								"New buyers should also read <a href=\"/cheats/\">Palia cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-kilima-village.webp",
				},
				wallhack: {
					title: "Palia Wallhack 2026 | ESP Boxes & Visibility",
					description: "Palia wallhack ESP with resource ESP and resource markers for Windows PC. Undetected palia cheats — learn overlays and buy.",
					h1: "Palia Wallhack — ESP Boxes & Visibility",
					intro: "Palia wallhack ESP for Palia — see players, loot, rare nodes, and containers through toggleable wallhack overlays built for Kilima and Bahari Bay sessions.",
					imageAlt: "Palia wallhack visibility through walls in a session",
					galleryTitle: "Palia wallhack ESP gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Palia ESP page",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Palia wallhack focuses on information — player outlines, loot pins, rare nodes threat cues — rather than automatic aiming. Palia Cheats bundles wallhack ESP with wallhack and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and map zones holds.",
								"For the broader ESP keyword page see <a href=\"/esp/\">Palia ESP</a>; for combat assist see <a href=\"/aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support session, co-op sessions, and co-op sessions with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/teleport/\">wallhack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/status/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/cheats/\">undetected Palia cheats</a> and <a href=\"/status/\">EAC bypass</a>.",
								"Ready to buy? Compare <a href=\"/store/\">Pricing</a> or continue to the <a href=\"/esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-ore-mining.webp",
				},
				radar: {
					title: "Palia Wallhack | Teleport & ESP Overlay",
					description: "Palia wallhack and teleport tools for Windows PC — see resources through walls and move between Kilima and Bahari Bay.",
					h1: "Palia Wallhack & Teleport",
					intro: "Palia wallhack overlays plus teleport bookmarks for Kilima Village and Bahari Bay. Included in the same palia cheats license.",
					imageAlt: "Palia wallhack overlay with resource ESP in Bahari Bay",
					galleryTitle: "Palia wallhack visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "See ESP guide",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack for resource farming",
							paragraphs: [
								"See ores, fish, and insects through walls while you farm Kilima Village and Bahari Bay.",
								"Pair wallhack with <a href=\"/esp/\">resource ESP</a> for the fastest gold and skill routes.",
								"Teleport between saved coordinates to skip long walks between nodes.",
							],
						},
						{
							h2: "Teleport bookmarks",
							paragraphs: [
								"Save spots for fishing holes, ore clusters, and housing plots. Recall them from the cheat menu mid-session.",
								"Works alongside fishing tools and skill automation in one palia cheats license.",
								"Compare plans on <a href=\"/store/\">Pricing</a> before checkout.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Wallhack and teleport modules rebuild after Easy Anti-Cheat patches. Check <a href=\"/status/\">Updates</a> before you play.",
								"Setup steps are on the <a href=\"/setup/\">Setup guide</a>.",
								"Questions? Email <a href=\"/support/\">Support</a> with your order ID.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
				},
				eac: {
					title: "EAC Bypass Palia | Palia Cheats Maintenance",
					description: "How palia cheats rebuild after EAC patches — ESP boxes, soft aim, and wallhack maintenance for Windows PC. Read before logging in.",
					h1: "EAC Bypass — Palia Cheats Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for Palia Cheats — how ESP wallhack, wallhack, and Aimbot rebuild after Palia security updates.",
					imageAlt: "Palia Cheats maintenance after a EAC patch",
					galleryTitle: "EAC maintenance visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Singularity 6' anti-cheat for Palia on PC (see <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>). Security updates can affect ESP wallhack, wallhack, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Palia Cheats monitors EAC patch notes and Palia seasonal updates from <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a> to schedule module reviews.",
								"“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a EAC patch",
							paragraphs: [
								"The team tests ESP overlays, wallhack signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/status/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Singularity 6 service health on <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid logging in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/cheats/\">undetected Palia cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"EAC bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/store/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-kilima-village.webp",
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | ESP Soft Aim & wallhack",
					description: "Best palia cheats 2026: ESP boxes, soft aim, and wallhack for Windows PC. Undetected palia cheats with EAC maintenance — compare and buy.",
					h1: "Palia Cheats 2026 — ESP, Soft Aim & wallhack",
					intro: "The 2026 Palia Cheats package for Palia — undetected ESP wallhack, wallhack, and Aimbot with EAC maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Palia Cheats product overview for Palia",
					galleryTitle: "Palia Cheats 2026 gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why palia cheats buyers choose Palia Cheats in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Palia Cheats bundles ESP wallhack, wallhack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>, then use our <a href=\"/status/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover session and co-op sessions loops — see <a href=\"/store/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, resource markers, wallhack overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/cheats/\">Palia cheats pillar</a>, <a href=\"/esp/\">ESP</a>, <a href=\"/aimbot/\">Aimbot</a>, <a href=\"/esp/\">wallhack</a>, <a href=\"/teleport/\">wallhack</a>, <a href=\"/cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/cheats/\">Palia cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/cheats/\">Palia cheats</a> checklist, <a href=\"/forum/cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@paliacheats.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-homestead.webp",
				},
				hacks: {
					title: "Palia Cheats 2026 | Undetected ESP Aimbot Guide",
					description: "Palia cheats for Windows PC: undetected ESP wallhack, wallhack, and Aimbot with EAC maintenance. Compare palia cheats options and buy the full package.",
					h1: "Palia Cheats — Undetected ESP, Aimbot & Wallhack",
					intro: "Palia cheats for session and co-op sessions combine ESP wallhack visibility, wallhack-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for palia cheats in 2026.",
					imageAlt: "Palia Cheats product page — ESP, aimbot, and wallhack",
					galleryTitle: "Palia cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What Palia cheats include in 2026",
							paragraphs: [
								"Players searching for Palia cheats usually want visibility and combat tools without stacking separate downloads. Palia Cheats bundles player ESP wallhack, resource markers, wallhack overlays, and configurable Aimbot in one maintained package — the same toolkit often called palia cheats.",
								"Coverage spans session and co-op sessions with in-client toggles for co-op sessions. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>; our hacks package tracks those releases via the <a href=\"/status/\">Updates page</a>. Cross-check platform health on <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> before before you log in on patch day.",
							],
						},
						{
							h2: "How this Palia cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/cheats/\">palia cheats 2026</a> and <a href=\"/cheats/\">Palia cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/esp/\">Palia ESP</a>, <a href=\"/aimbot/\">Palia Aimbot</a>, <a href=\"/esp/\">wallhack</a>, <a href=\"/teleport/\">wallhack</a>, and <a href=\"/aimbot/\">soft aim</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/forum/cheats-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/forum/escape-from-palia-cheats-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/forum/undetected-eac/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "Palia cheats vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Palia Cheats maps the full session loop: read resource nodes, track rare nodes and containers, spot flanks on wallhack, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/esp/\">ESP</a>, <a href=\"/aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/store/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/cheats/\">mod menu</a>, <a href=\"/aimbot/\">aimbot</a>, <a href=\"/esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected Palia cheats with EAC maintenance",
							paragraphs: [
								"Undetected Palia cheats require rebuilds after Easy Anti-Cheat and major Palia patches. Check Updates before logging in — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for anti-cheat background and our <a href=\"/status/\">EAC bypass guide</a> for the practical workflow. Pair with <a href=\"/cheats/\">undetected Palia cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-ore-mining.webp",
				},
				"cheat-download": {
					title: "Palia Hack Download 2026 | Instant Access",
					description: "Palia cheat download with instant license delivery — ESP boxes, soft aim, and wallhack for Windows PC. Buy, activate, and play.",
					h1: "Palia Hack Download — Instant License Delivery",
					intro: "How Palia cheat download works for Palia — digital license delivery after payment confirmation, with ESP wallhack, wallhack, and Aimbot access on Windows PC.",
					imageAlt: "Palia Cheats download and install delivery flow",
					galleryTitle: "Palia cheat download visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Palia cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, Palia Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Singularity 6 services are down, check <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Palia cheat download includes player ESP wallhack, loot and container markers, wallhack overlays, Aimbot profiles, and in-client toggles for Kilima and Bahari Bay sessions.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/store/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/esp/\">ESP</a>, <a href=\"/aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Palia or Easy Anti-Cheat patches ship, check the <a href=\"/status/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-homestead.webp",
				},
				"mod-menu": {
					title: "Palia Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Palia mod menu for in-match toggles — ESP boxes, soft aim, wallhack, and on Windows PC. Undetected palia cheats package.",
					h1: "Palia Mod Menu — In-Client Control Panel",
					intro: "Palia mod menu controls for Palia — toggle ESP wallhack categories, wallhack range, and Aimbot profiles mid-session without leaving your Palia session on Windows PC.",
					imageAlt: "Palia Cheats in-game menu controls",
					galleryTitle: "Palia mod menu gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Palia mod menu controls",
							paragraphs: [
								"A Palia mod menu is the in-client panel where you enable ESP wallhack overlays, adjust wallhack range, and switch Aimbot profiles during co-op sessions. Palia Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, resource markers, map zone cues, and per-weapon Aimbot settings without alt-tabbing out of Palia.",
								"Control deep-dives: <a href=\"/esp/\">ESP</a>, <a href=\"/aimbot/\">Aimbot</a>, <a href=\"/teleport/\">wallhack</a>.",
							],
						},
						{
							h2: "Mod menu categories for Kilima and Bahari Bay sessions",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and rare nodes let you reduce overlay noise during rotations and map zones holds.",
								"wallhack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.palia} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after EAC patches",
							paragraphs: [
								"Palia mod menu behavior is rebuilt when Easy Anti-Cheat or major Palia updates land. Follow the <a href=\"/status/\">Updates page</a> and <a href=\"/status/\">EAC bypass guide</a> before logging in on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/store/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-housing-interior.webp",
				},
				"soft-aim": {
					title: "Palia Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Palia soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our palia cheats with ESP boxes.",
					h1: "Palia Soft Aim — Smooth Aimbot Controls",
					intro: "Palia soft aim settings for Palia — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and wallhack in one undetected license.",
					imageAlt: "Palia soft aim FOV and smoothness settings",
					galleryTitle: "Palia soft aim gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "What Palia soft aim means",
							paragraphs: [
								"Palia soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Palia Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR hunting sessions.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during fishing sessions.",
								"Full Aimbot documentation: <a href=\"/aimbot/\">Palia Aimbot</a>. Alternate wording: <a href=\"/aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for bows, rods, and tools. Switch between hunting and fishing minigames with hotkeys mid-session.",
								"Weapon TTKs shift with <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/esp/\">ESP wallhack</a> and <a href=\"/teleport/\">wallhack</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with EAC maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/status/\">Updates page</a> before logging in — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/store/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
				},
				"best-cheats": {
					title: "Best Palia Cheats 2026 | Buyer Guide",
					description: "Best palia cheats for 2026: ESP boxes, soft aim, and EAC maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Palia Cheats — 2026 Buyer Guide",
					intro: "Compare the Palia cheats for Palia in 2026 — undetected ESP wallhack, wallhack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "Palia Cheats overview for Palia on PC",
					galleryTitle: "Best Palia cheats gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the Palia cheats in 2026",
							paragraphs: [
								"The Palia cheats combine active EAC maintenance, a full ESP wallhack and wallhack stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Palia Cheats covers session and co-op sessions with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://palia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Palia Support</a>, then confirm our <a href=\"/status/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Palia cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, resource markers, wallhack overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Palia patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/cheats/\">undetected status</a>, and <a href=\"/cheats/\">Palia cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/esp/\">ESP</a>, <a href=\"/aimbot/\">Aimbot</a>, <a href=\"/cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Palia cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first logging in — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Singularity 6 terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-homestead.webp",
				},
				"aimbot-hack": {
					title: "Palia Aimbot Hack 2026 | Soft Aim Assist",
					description: "Palia aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our palia cheats package.",
					h1: "Palia Aimbot Hack — Soft Aim Assist",
					intro: "Palia aimbot hack tools for Palia — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and wallhack in one undetected license.",
					imageAlt: "Palia aimbot hack controls and bone priority",
					galleryTitle: "Palia aimbot hack gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Palia aimbot hack vs visibility tools",
							paragraphs: [
								"A Palia aimbot hack focuses on assisted targeting during hunting sessions — while ESP wallhack and wallhack handle map awareness. Palia Cheats bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Palia combat pace across Kilima and Bahari Bay sessions.",
								"Prefer softer tracking language? See <a href=\"/aimbot/\">soft aim</a>. Full settings: <a href=\"/aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-session without opening menus during rotations or late-session map zones.",
								"Per-weapon profile slots separate long-range bow and rod profile tuning.",
								"Balance patches from <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/status/\">Updates page</a> and <a href=\"/status/\">EAC bypass guide</a> before logging in after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/store/\">Pricing</a>.",
								"Pair with <a href=\"/esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
				},
				"esp-hack": {
					title: "Palia ESP Hack 2026 | resource ESP & Loot",
					description: "Palia ESP hack with resource ESP and resource markers for Windows PC. Undetected palia cheats with — see overlays and buy.",
					h1: "Palia ESP Hack — resource ESP Guide",
					intro: "Palia ESP hack overlays for Palia — player outlines, rare nodes threat cues, loot and container markers with distance readouts across session and co-op sessions.",
					imageAlt: "Palia ESP hack boxes and resource markers",
					galleryTitle: "Palia ESP hack gallery",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "What a Palia ESP hack shows",
							paragraphs: [
								"A Palia ESP hack renders ores, fish, and insects outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during long farming routes between villages.",
								"Canonical visibility guide: <a href=\"/esp/\">Palia ESP</a>. Wallhack wording: <a href=\"/esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for sessions",
							paragraphs: [
								"Toggle player ESP hack, resource markers, chest pins, and map zone cues independently so only session-critical overlays stay active during rotations.",
								"Category colour coding supports Kilima and Bahari Bay sessions.",
								"POI and loot changes publish through <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with EAC maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and Palia patches. Check the <a href=\"/status/\">Updates page</a> before logging in — pair ESP hack awareness with <a href=\"/teleport/\">wallhack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/store/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-ore-mining.webp",
				},
				"unlock-all": {
					title: "Palia Unlock All 2026 | What It Really Means",
					description: "Palia unlock all explained vs real palia cheats — ESP boxes, soft aim, and wallhack for Windows PC. Know what you are buying.",
					h1: "Palia Unlock All — What Players Search For",
					intro: "Palia unlock all is a common search term for Palia — this page clarifies what unlock-all tools claim versus the ESP wallhack, wallhack, and Aimbot tools Palia Cheats actually provides on Windows PC.",
					imageAlt: "Palia Cheats license features overview",
					galleryTitle: "Palia unlock all guide visuals",
					ctaPrimary: "Buy Palia Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Palia unlock all usually means",
							paragraphs: [
								"Palia unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Palia Cheats focuses on in-match awareness — player ESP, resource markers, wallhack overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and season progression items are sold through <a href=\"https://palia.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Palia</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot resource nodes, rare nodes, and rare resources during co-op sessions. wallhack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/cheats/\">Palia cheats</a> and <a href=\"/cheats/\">Palia cheats</a>.",
							],
						},
						{
							h2: "Buying Palia Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, wallhack, and Aimbot for Palia on Windows PC, compare <a href=\"/store/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/status/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-housing-interior.webp",
				},
				privacy: {
					title: "Palia Cheats Privacy Policy | Legal",
					description: "Privacy policy for Palia Cheats — how we handle support emails, order references, checkout data, and site security for palia cheats license holders on PC.",
					h1: "Privacy Policy",
					intro: "How Palia Cheats handles information when you browse paliacheats.org or contact support about a Palia license.",
					imageAlt: "Palia Cheats privacy policy page",
					galleryTitle: "Palia Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Palia Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@paliacheats.org with your request details.",
								"Policy updates publish on this page. Continued use of paliacheats.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-kilima-village.webp",
				},
				refund: {
					title: "Palia Cheats Refund Policy | Billing",
					description: "Refund policy for Palia Cheats licenses on Windows PC — delivery terms, eligibility windows, and how to request help for ESP, wallhack, and fishing tools.",
					h1: "Refund Policy",
					intro: "Refund terms for Palia Cheats licenses — ESP wallhack, wallhack, and Aimbot packages purchased through checkout for Palia.",
					imageAlt: "Palia Cheats refund policy page",
					galleryTitle: "Palia Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Palia Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@paliacheats.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/store/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-homestead.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Palia Cheats Rules",
					description: "Terms of use for Palia Cheats licenses on Windows PC — usage rules, anti-cheat risk notes, billing terms, and liability limits for buyers on paliacheats.org.",
					h1: "Terms of Use",
					intro: "Terms governing use of paliacheats.org and Palia Cheats licenses for Palia on Windows PC.",
					imageAlt: "Palia Cheats terms of use page",
					galleryTitle: "Palia Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Palia Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, wallhack, and Aimbot tools for Palia on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Palia may violate Singularity 6 terms and result in account penalties. Palia Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@paliacheats.org for questions. Related policies: <a href=\"/privacy/\">Privacy</a> and <a href=\"/refund/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/palia-gameplay-kilima-village.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
					store: "Precios",
				},
				hero: {
					accent: "Trucos Palia indetectables",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack y Aimbot para Palia en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, wallhack y Aimbot para Palia PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Palia Cheats está activo para Palia en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Palia",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Palia Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, wallhack y Aimbot indetectables para Palia — checkout seguro.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Palia indetectables para Palia en PC. ESP wallhack, wallhack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "Palia Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Palia en Windows PC: ESP wallhack, wallhack y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galería Palia Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Palia Cheats en 2026",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Ideal para leer recursos raros en Kilima y Bahari Bay.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, wallhack y Aimbot en una licencia",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Cajas de jugador y wallhack",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. entrega digital instantánea. Windows PC.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Controles soft aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. entrega digital instantánea. Windows PC.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. entrega digital instantánea. Windows PC.",
					h1: "Funciones",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Funciones",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. entrega digital instantánea. Windows PC.",
					h1: "Precios",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Precios",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. entrega digital instantánea. Windows PC.",
					h1: "Instalación",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Instalación",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. entrega digital instantánea. Windows PC.",
					h1: "Actualizaciones",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. entrega digital instantánea. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. entrega digital instantánea. Windows PC.",
					h1: "Soporte",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Soporte",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. entrega digital instantánea. Windows PC.",
					h1: "Trucos indetectables",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | Visibilidad ESP",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. entrega digital instantánea. Windows PC.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Wallhack y teleporte",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. entrega digital instantánea. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. entrega digital instantánea. Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Palia 2026 | Guía del comprador",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. entrega digital instantánea. Windows PC.",
					h1: "Trucos Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Trucos Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Palia | Guía ESP y Aimbot",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. entrega digital instantánea. Windows PC.",
					h1: "Trucos Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Trucos Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Palia Cheats | Acceso instantáneo",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. entrega digital instantánea. Windows PC.",
					h1: "Descarga Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Descarga Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Palia | Controles en partida",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. entrega digital instantánea. Windows PC.",
					h1: "Menú mod Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Menú mod Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Ajustes soft aim",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. entrega digital instantánea. Windows PC.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Palia | Lista de compra",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. entrega digital instantánea. Windows PC.",
					h1: "Mejores trucos Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Mejores trucos Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Asistencia soft aim",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. entrega digital instantánea. Windows PC.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | Cajas y loot",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. entrega digital instantánea. Windows PC.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Qué significa",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. entrega digital instantánea. Windows PC.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"entrega digital instantánea on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Palia Cheats",
					description: "Política de privacidad for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Política de privacidad for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@paliacheats.org para solicitudes legales o de soporte.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Palia Cheats",
					description: "Política de reembolso for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Política de reembolso for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Contact email, order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@paliacheats.org para solicitudes legales o de soporte.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Palia Cheats",
					description: "Términos de uso for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Términos de uso for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Contact email, order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout checkout. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Palia Cheats ofrece ESP wallhack, teleport hack y palia aimbot indetectables para Palia en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@paliacheats.org para solicitudes legales o de soporte.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
					store: "Tarifs",
				},
				hero: {
					accent: "Triches Palia indétectables",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack et Aimbot pour Palia sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, wallhack et Aimbot pour Palia PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Palia Cheats est actif pour Palia sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Palia",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Palia Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, wallhack et Aimbot indétectables pour Palia — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Palia indétectables pour Palia sur PC. ESP wallhack, wallhack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.",
					h1: "Palia Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Palia sur PC Windows : ESP wallhack, wallhack et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galerie Palia Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Palia Cheats en 2026",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Parfait pour lire les ressources rares en Kilima et Bahari Bay.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack et Aimbot en une licence",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Boîtes joueur et wallhack",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. livraison numérique instantanée. PC Windows.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Contrôles soft aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. livraison numérique instantanée. PC Windows.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. livraison numérique instantanée. PC Windows.",
					h1: "Fonctions",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Fonctions",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. livraison numérique instantanée. PC Windows.",
					h1: "Tarifs",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Tarifs",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. livraison numérique instantanée. PC Windows.",
					h1: "Installation",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Installation",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. livraison numérique instantanée. PC Windows.",
					h1: "Mises à jour",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. livraison numérique instantanée. PC Windows.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. livraison numérique instantanée. PC Windows.",
					h1: "Support",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Support",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. livraison numérique instantanée. PC Windows.",
					h1: "Triches indétectables",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | Visibilité ESP",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. livraison numérique instantanée. PC Windows.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Wallhack et téléport",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. livraison numérique instantanée. PC Windows.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. livraison numérique instantanée. PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Palia 2026 | Guide acheteur",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. livraison numérique instantanée. PC Windows.",
					h1: "Triches Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Triches Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Palia | Guide ESP et Aimbot",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. livraison numérique instantanée. PC Windows.",
					h1: "Triches Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Triches Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Palia Cheats | Accès instantané",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. livraison numérique instantanée. PC Windows.",
					h1: "Téléchargement Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Téléchargement Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Palia | Contrôles en jeu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. livraison numérique instantanée. PC Windows.",
					h1: "Menu mod Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Menu mod Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Réglages soft aim",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. livraison numérique instantanée. PC Windows.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Palia | Checklist acheteur",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. livraison numérique instantanée. PC Windows.",
					h1: "Meilleures triches Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Meilleures triches Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Assistance soft aim",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. livraison numérique instantanée. PC Windows.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | Boîtes et loot",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. livraison numérique instantanée. PC Windows.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Ce que ça signifie",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. livraison numérique instantanée. PC Windows.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acheter Palia Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"livraison numérique instantanée on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Palia Cheats",
					description: "Politique de confidentialité for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Politique de confidentialité for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@paliacheats.org pour le support ou les demandes légales.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Palia Cheats",
					description: "Politique de remboursement for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Politique de remboursement for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Contact email, order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@paliacheats.org pour le support ou les demandes légales.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Palia Cheats",
					description: "Conditions d'utilisation for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Conditions d'utilisation for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Contact email, order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout checkout. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Palia Cheats combine ESP wallhack, teleport hack et palia aimbot indétectables pour Palia sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@paliacheats.org pour le support ou les demandes légales.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
					store: "Preise",
				},
				hero: {
					accent: "Undetected Palia Cheats",
					accentShort: "Palia Cheats",
					subtitle: "ESP Wallhack, wallhack und Aimbot für Palia auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, wallhack & Aimbot für Palia PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Palia Cheats Paket ist live für Palia auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Palia Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Palia — Checkout über checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Palia Cheats für Palia auf PC. ESP Wallhack, wallhack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Palia Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Palia: ESP wallhack, wallhack und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Palia Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Palia Cheats 2026 führt",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Ideal um seltene Ressourcen in Kilima und Bahari Bay zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP wallhack, wallhack und Aimbot in einer Lizenz",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Spielerboxen & Wallhack",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Soft-Aim Steuerung",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. sofortige digitale Lieferung. Windows PC.",
					h1: "Features",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Features",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. sofortige digitale Lieferung. Windows PC.",
					h1: "Preise",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Preise",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. sofortige digitale Lieferung. Windows PC.",
					h1: "Setup",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Setup",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. sofortige digitale Lieferung. Windows PC.",
					h1: "Updates",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Updates",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. sofortige digitale Lieferung. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. sofortige digitale Lieferung. Windows PC.",
					h1: "Support",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Support",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. sofortige digitale Lieferung. Windows PC.",
					h1: "Undetected Cheats",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | ESP Sichtbarkeit",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Wallhack & Teleport",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. sofortige digitale Lieferung. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch-Wartung",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. sofortige digitale Lieferung. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | Käuferleitfaden",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Cheats 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Cheats 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Cheats | ESP Aimbot Guide",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Cheats",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Cheats",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia Cheat Download | Sofortzugang",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Cheat Download",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia Cheat Download",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia Mod-Menü | In-Game Toggles",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Mod-Menü",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia Mod-Menü",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft-Aim Einstellungen",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Palia Cheats | Käufer-Checkliste",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. sofortige digitale Lieferung. Windows PC.",
					h1: "Beste Palia Cheats",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Beste Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia Aimbot Hack | Soft-Aim Assist",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Aimbot Hack",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia Aimbot Hack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP Hack | Boxen & Loot",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia ESP Hack",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP Hack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Was es bedeutet",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. sofortige digitale Lieferung. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"sofortige digitale Lieferung on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Palia Cheats",
					description: "Datenschutz for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Datenschutz for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@paliacheats.org für Support und rechtliche Anfragen.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Palia Cheats",
					description: "Rückerstattung for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Rückerstattung for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Contact email, order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@paliacheats.org für Support und rechtliche Anfragen.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Palia Cheats",
					description: "Nutzungsbedingungen for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Nutzungsbedingungen for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Contact email, order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über checkout Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Palia Cheats bündelt ESP wallhack, teleport hack und palia aimbot als undetected Paket für Palia auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@paliacheats.org für Support und rechtliche Anfragen.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
					store: "Preços",
				},
				hero: {
					accent: "Cheats Palia indetectáveis",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack e Aimbot para Palia no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, wallhack e Aimbot para Palia PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Palia Cheats está ativo para Palia no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Palia",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Palia Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, wallhack e Aimbot indetectáveis para Palia — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Palia indetectáveis para Palia no PC. ESP wallhack, wallhack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "Palia Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Palia no Windows PC: ESP wallhack, wallhack e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galeria Palia Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Palia Cheats em 2026",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Ideal para ler recursos raros em Kilima e Bahari Bay.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack e Aimbot numa licença",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Caixas de jogador e wallhack",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. entrega digital instantânea. PC Windows.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Controles soft aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. entrega digital instantânea. PC Windows.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. entrega digital instantânea. PC Windows.",
					h1: "Recursos",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Recursos",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. entrega digital instantânea. PC Windows.",
					h1: "Preços",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Preços",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. entrega digital instantânea. PC Windows.",
					h1: "Instalação",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Instalação",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. entrega digital instantânea. PC Windows.",
					h1: "Atualizações",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. entrega digital instantânea. PC Windows.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. entrega digital instantânea. PC Windows.",
					h1: "Suporte",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Suporte",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. entrega digital instantânea. PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | Visibilidade ESP",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. entrega digital instantânea. PC Windows.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Wallhack e teleporte",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. entrega digital instantânea. PC Windows.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. entrega digital instantânea. PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Palia 2026 | Guia do comprador",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. entrega digital instantânea. PC Windows.",
					h1: "Cheats Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Cheats Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Palia | Guia ESP e Aimbot",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. entrega digital instantânea. PC Windows.",
					h1: "Cheats Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Cheats Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Palia Cheats | Acesso instantâneo",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. entrega digital instantânea. PC Windows.",
					h1: "Download Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Download Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Palia | Controles in-game",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. entrega digital instantânea. PC Windows.",
					h1: "Menu mod Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Menu mod Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Ajustes soft aim",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. entrega digital instantânea. PC Windows.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Palia | Checklist do comprador",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. entrega digital instantânea. PC Windows.",
					h1: "Melhores cheats Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Melhores cheats Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Assistência soft aim",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. entrega digital instantânea. PC Windows.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | Caixas e loot",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. entrega digital instantânea. PC Windows.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | O que significa",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. entrega digital instantânea. PC Windows.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Comprar Palia Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"entrega digital instantânea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Palia Cheats",
					description: "Política de privacidade for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Política de privacidade for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@paliacheats.org para suporte ou questões legais.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Palia Cheats",
					description: "Política de reembolso for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Política de reembolso for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Contact email, order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@paliacheats.org para suporte ou questões legais.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Palia Cheats",
					description: "Termos de uso for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Termos de uso for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Contact email, order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout checkout. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats reúne ESP wallhack, teleport hack e palia aimbot indetectáveis para Palia no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@paliacheats.org para suporte ou questões legais.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
					store: "Prezzi",
				},
				hero: {
					accent: "Cheat Palia indetectable",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack e Aimbot per Palia su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, wallhack e Aimbot per Palia PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Palia Cheats è attivo per Palia su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Palia",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Palia Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, wallhack e Aimbot indetectable per Palia — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Palia indetectable per Palia su PC. ESP wallhack, wallhack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.",
					h1: "Palia Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Palia su PC Windows: ESP wallhack, wallhack e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galleria Palia Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Palia Cheats nel 2026",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Ideale per leggere risorse rare in Kilima e Bahari Bay.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack e Aimbot in una licenza",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Box giocatore e wallhack",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. consegna digitale istantanea. PC Windows.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Controlli soft aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. consegna digitale istantanea. PC Windows.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. consegna digitale istantanea. PC Windows.",
					h1: "Funzioni",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Funzioni",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. consegna digitale istantanea. PC Windows.",
					h1: "Prezzi",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Prezzi",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. consegna digitale istantanea. PC Windows.",
					h1: "Setup",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Setup",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. consegna digitale istantanea. PC Windows.",
					h1: "Aggiornamenti",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. consegna digitale istantanea. PC Windows.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. consegna digitale istantanea. PC Windows.",
					h1: "Supporto",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Supporto",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. consegna digitale istantanea. PC Windows.",
					h1: "Cheat indetectable",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | Visibilità ESP",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. consegna digitale istantanea. PC Windows.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Wallhack e teleport",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. consegna digitale istantanea. PC Windows.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. consegna digitale istantanea. PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Palia 2026 | Guida acquirente",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. consegna digitale istantanea. PC Windows.",
					h1: "Cheat Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Cheat Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Palia | Guida ESP e Aimbot",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. consegna digitale istantanea. PC Windows.",
					h1: "Cheat Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Cheat Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Palia Cheats | Accesso istantaneo",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. consegna digitale istantanea. PC Windows.",
					h1: "Download Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Download Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Palia | Toggle in-game",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. consegna digitale istantanea. PC Windows.",
					h1: "Mod menu Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Mod menu Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Impostazioni soft aim",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. consegna digitale istantanea. PC Windows.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Palia | Checklist acquirente",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. consegna digitale istantanea. PC Windows.",
					h1: "Migliori cheat Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Migliori cheat Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Assist soft aim",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. consegna digitale istantanea. PC Windows.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | Box e loot",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. consegna digitale istantanea. PC Windows.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Cosa significa",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. consegna digitale istantanea. PC Windows.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Acquista Palia Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"consegna digitale istantanea on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Palia Cheats",
					description: "Informativa privacy for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Informativa privacy for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@paliacheats.org per supporto o richieste legali.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Palia Cheats",
					description: "Politica di rimborso for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Politica di rimborso for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Contact email, order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@paliacheats.org per supporto o richieste legali.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Palia Cheats",
					description: "Termini di utilizzo for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Termini di utilizzo for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Contact email, order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout checkout. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats unisce ESP wallhack, teleport hack e palia aimbot indetectable per Palia su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@paliacheats.org per supporto o richieste legali.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
					store: "Prijzen",
				},
				hero: {
					accent: "Undetected Palia Cheats",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack en Aimbot voor Palia op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, wallhack & Aimbot voor Palia PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Palia Cheats pakket is live voor Palia op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Palia Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, wallhack en Aimbot voor Palia — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Palia cheats voor Palia op PC. ESP wallhack, wallhack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "Palia Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Palia: ESP wallhack, wallhack en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Palia Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Palia Cheats in 2026",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Ideaal om zeldzame resources te lezen in Kilima en Bahari Bay.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, wallhack en Aimbot in één licentie",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. directe digitale levering. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. directe digitale levering. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. directe digitale levering. Windows PC.",
					h1: "Functies",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Functies",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. directe digitale levering. Windows PC.",
					h1: "Prijzen",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Prijzen",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. directe digitale levering. Windows PC.",
					h1: "Setup",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Setup",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. directe digitale levering. Windows PC.",
					h1: "Updates",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Updates",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. directe digitale levering. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. directe digitale levering. Windows PC.",
					h1: "Support",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Support",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. directe digitale levering. Windows PC.",
					h1: "Undetected Cheats",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. directe digitale levering. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. directe digitale levering. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. directe digitale levering. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. directe digitale levering. Windows PC.",
					h1: "Palia Cheats 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Cheats 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Cheats | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. directe digitale levering. Windows PC.",
					h1: "Palia Cheats",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Cheats",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia Cheat Download | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. directe digitale levering. Windows PC.",
					h1: "Palia Cheat Download",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia Cheat Download",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia Mod Menu | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. directe digitale levering. Windows PC.",
					h1: "Palia Mod Menu",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia Mod Menu",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. directe digitale levering. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Palia Cheats | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. directe digitale levering. Windows PC.",
					h1: "Beste Palia Cheats",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Beste Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia Aimbot Hack | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. directe digitale levering. Windows PC.",
					h1: "Palia Aimbot Hack",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia Aimbot Hack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP Hack | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. directe digitale levering. Windows PC.",
					h1: "Palia ESP Hack",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP Hack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. directe digitale levering. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"directe digitale levering on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Palia Cheats",
					description: "Privacybeleid for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Privacybeleid for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org voor support en juridische vragen.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Palia Cheats",
					description: "Restitutiebeleid for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Restitutiebeleid for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Contact email, order references, and basic site security data.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org voor support en juridische vragen.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Palia Cheats",
					description: "Gebruiksvoorwaarden for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Gebruiksvoorwaarden for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Contact email, order references, and basic site security data.",
								"Licenties met directe digitale levering via checkout checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats bundelt ESP wallhack, teleport hack en palia aimbot als undetected pakket voor Palia op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org voor support en juridische vragen.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
					store: "Cennik",
				},
				hero: {
					accent: "Undetected cheaty Palia",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack i Aimbot do Palia na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, wallhack i Aimbot dla Palia PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Palia Cheats jest aktywny dla Palia na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Palia",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Palia Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, wallhack i Aimbot dla Palia — checkout przez checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Palia dla Palia na PC. ESP wallhack, wallhack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "Palia Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Palia na Windows PC: ESP wallhack, wallhack i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galeria Palia Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Palia Cheats w 2026",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Idealny do czytania rzadkie surowce w Kilima i Bahari Bay.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack i Aimbot w jednej licencji",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Funkcje",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Funkcje",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Cennik",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Cennik",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Instalacja",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Instalacja",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Aktualizacje",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Wsparcie",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Cheaty undetected",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Palia 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Cheaty Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Cheaty Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Palia | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Cheaty Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Cheaty Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Palia Cheats | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Pobieranie Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Pobieranie Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Palia | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Mod menu Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Mod menu Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Palia | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Najlepsze cheaty Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Najlepsze cheaty Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. natychmiastowa dostawa cyfrowa. PC Windows.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Kup Palia Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"natychmiastowa dostawa cyfrowa on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Palia Cheats",
					description: "Polityka prywatności for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Polityka prywatności for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org w sprawach wsparcia i prawnych.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Palia Cheats",
					description: "Polityka zwrotów for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Polityka zwrotów for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Contact email, order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org w sprawach wsparcia i prawnych.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Palia Cheats",
					description: "Warunki użytkowania for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Warunki użytkowania for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Contact email, order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout checkout. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats łączy ESP wallhack, teleport hack i palia aimbot jako pakiet undetected dla Palia na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org w sprawach wsparcia i prawnych.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
					store: "Цены",
				},
				hero: {
					accent: "Undetected читы Palia",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack и Aimbot для Palia на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, wallhack и Aimbot для Palia PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Palia Cheats активен для Palia на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Palia Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, wallhack и Aimbot для Palia — оплата через checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Palia для Palia на PC. ESP wallhack, wallhack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "Palia Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Palia на Windows PC: ESP wallhack, wallhack и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Галерея Palia Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Palia Cheats в 2026",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Идеально для чтения редких ресурсов в Kilima и Bahari Bay.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack и Aimbot в одной лицензии",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Боксы игроков и wallhack",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. мгновенная цифровая доставка. Windows PC.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Управление soft aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. мгновенная цифровая доставка. Windows PC.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. мгновенная цифровая доставка. Windows PC.",
					h1: "Функции",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Функции",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. мгновенная цифровая доставка. Windows PC.",
					h1: "Цены",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Цены",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. мгновенная цифровая доставка. Windows PC.",
					h1: "Установка",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Установка",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. мгновенная цифровая доставка. Windows PC.",
					h1: "Обновления",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Обновления",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. мгновенная цифровая доставка. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. мгновенная цифровая доставка. Windows PC.",
					h1: "Поддержка",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Поддержка",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. мгновенная цифровая доставка. Windows PC.",
					h1: "Undetected читы",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected читы",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | Видимость ESP",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. мгновенная цифровая доставка. Windows PC.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Wallhack и телепорт",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. мгновенная цифровая доставка. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. мгновенная цифровая доставка. Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Palia 2026 | Гайд покупателя",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. мгновенная цифровая доставка. Windows PC.",
					h1: "Читы Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Читы Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Palia | Гайд ESP и Aimbot",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. мгновенная цифровая доставка. Windows PC.",
					h1: "Читы Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Читы Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Palia Cheats | Мгновенный доступ",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. мгновенная цифровая доставка. Windows PC.",
					h1: "Скачать Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Скачать Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Palia | Игровые переключатели",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. мгновенная цифровая доставка. Windows PC.",
					h1: "Мод-меню Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Мод-меню Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Настройки soft aim",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. мгновенная цифровая доставка. Windows PC.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Palia | Чеклист покупателя",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. мгновенная цифровая доставка. Windows PC.",
					h1: "Лучшие читы Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Лучшие читы Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Palia | Soft aim ассист",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. мгновенная цифровая доставка. Windows PC.",
					h1: "Хак aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Хак aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Palia | Боксы и лут",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. мгновенная цифровая доставка. Windows PC.",
					h1: "Хак ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Хак ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Что это значит",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. мгновенная цифровая доставка. Windows PC.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купить Palia Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"мгновенная цифровая доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Palia Cheats",
					description: "Политика конфиденциальности for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Политика конфиденциальности for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org для поддержки и юридических вопросов.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Palia Cheats",
					description: "Политика возврата for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Политика возврата for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Contact email, order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org для поддержки и юридических вопросов.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Palia Cheats",
					description: "Условия использования for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Условия использования for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Contact email, order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout checkout. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats объединяет ESP wallhack, teleport hack и palia aimbot в undetected пакете для Palia на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org для поддержки и юридических вопросов.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
					store: "Fiyatlar",
				},
				hero: {
					accent: "Undetected Palia hileleri",
					accentShort: "Palia Cheats",
					subtitle: "Palia Windows PC için ESP wallhack, wallhack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "Palia PC için ESP, wallhack ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Palia Cheats paketi Palia Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Palia Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Palia için undetected ESP, wallhack, wallhack ve Aimbot — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "Palia için undetected hileler. ESP wallhack, wallhack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "Palia Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "Palia Windows PC undetected paketi: ESP wallhack, wallhack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Palia Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Palia Cheats",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Kilima ve Bahari Bay'da nadir kaynaklar okumak için ideal.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, wallhack ve Aimbot tek lisans",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. anında dijital teslimat. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. anında dijital teslimat. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. anında dijital teslimat. Windows PC.",
					h1: "Özellikler",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Özellikler",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. anında dijital teslimat. Windows PC.",
					h1: "Fiyatlar",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. anında dijital teslimat. Windows PC.",
					h1: "Kurulum",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Kurulum",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. anında dijital teslimat. Windows PC.",
					h1: "Güncellemeler",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. anında dijital teslimat. Windows PC.",
					h1: "SSS",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "SSS",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. anında dijital teslimat. Windows PC.",
					h1: "Destek",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Destek",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. anında dijital teslimat. Windows PC.",
					h1: "Undetected hileler",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. anında dijital teslimat. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. anında dijital teslimat. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. anında dijital teslimat. Windows PC.",
					h1: "EAC bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Hileleri 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. anında dijital teslimat. Windows PC.",
					h1: "Palia Hileleri 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Hileleri 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Hileleri | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. anında dijital teslimat. Windows PC.",
					h1: "Palia Hileleri",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Hileleri",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia Hile İndir | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. anında dijital teslimat. Windows PC.",
					h1: "Palia Hile İndir",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia Hile İndir",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia Mod Menü | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. anında dijital teslimat. Windows PC.",
					h1: "Palia Mod Menü",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia Mod Menü",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. anında dijital teslimat. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Palia Hileleri | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. anında dijital teslimat. Windows PC.",
					h1: "En İyi Palia Hileleri",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "En İyi Palia Hileleri",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia Aimbot Hilesi | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. anında dijital teslimat. Windows PC.",
					h1: "Palia Aimbot Hilesi",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia Aimbot Hilesi",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP Hilesi | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. anında dijital teslimat. Windows PC.",
					h1: "Palia ESP Hilesi",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP Hilesi",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. anında dijital teslimat. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"anında dijital teslimat on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Palia Cheats",
					description: "Gizlilik politikası for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Gizlilik politikası for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@paliacheats.org.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Palia Cheats",
					description: "İade politikası for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. İade politikası for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Contact email, order references, and basic site security data.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@paliacheats.org.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Palia Cheats",
					description: "Kullanım şartları for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Kullanım şartları for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Contact email, order references, and basic site security data.",
								"checkout checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats, Palia için Windows PC üzerinde ESP wallhack, teleport hack ve palia aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@paliacheats.org.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
					store: "الأسعار",
				},
				hero: {
					accent: "غش Palia غير مكتشف",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Palia على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Palia PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Palia Cheats نشطة لـ Palia على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Palia Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Palia — الدفع عبر checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش Palia undetected لـ Palia على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "Palia Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Palia على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "معرض Palia Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Palia Cheats في 2026",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. مثالي لقراءة موارد نادرة في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. تسليم رقمي فوري. Windows PC.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. تسليم رقمي فوري. Windows PC.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. تسليم رقمي فوري. Windows PC.",
					h1: "الميزات",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "الميزات",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. تسليم رقمي فوري. Windows PC.",
					h1: "الأسعار",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "الأسعار",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. تسليم رقمي فوري. Windows PC.",
					h1: "التثبيت",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "التثبيت",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. تسليم رقمي فوري. Windows PC.",
					h1: "التحديثات",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. تسليم رقمي فوري. Windows PC.",
					h1: "الأسئلة",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "الأسئلة",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. تسليم رقمي فوري. Windows PC.",
					h1: "الدعم",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "الدعم",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. تسليم رقمي فوري. Windows PC.",
					h1: "غش undetected",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "غش undetected",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. تسليم رقمي فوري. Windows PC.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. تسليم رقمي فوري. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. تسليم رقمي فوري. Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Palia 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. تسليم رقمي فوري. Windows PC.",
					h1: "غش Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "غش Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "غش Palia | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. تسليم رقمي فوري. Windows PC.",
					h1: "غش Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "غش Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Palia Cheats | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. تسليم رقمي فوري. Windows PC.",
					h1: "تحميل Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "تحميل Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Palia | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. تسليم رقمي فوري. Windows PC.",
					h1: "قائمة مود Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "قائمة مود Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. تسليم رقمي فوري. Windows PC.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Palia | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. تسليم رقمي فوري. Windows PC.",
					h1: "أفضل غش Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "أفضل غش Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Palia | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. تسليم رقمي فوري. Windows PC.",
					h1: "هاك Aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "هاك Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Palia | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. تسليم رقمي فوري. Windows PC.",
					h1: "هاك ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "هاك ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. تسليم رقمي فوري. Windows PC.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "اشترِ Palia Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"تسليم رقمي فوري on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Palia Cheats",
					description: "سياسة الخصوصية for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. سياسة الخصوصية for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@paliacheats.org للدعم والطلبات القانونية.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Palia Cheats",
					description: "سياسة الاسترداد for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. سياسة الاسترداد for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. Contact email, order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@paliacheats.org للدعم والطلبات القانونية.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Palia Cheats",
					description: "شروط الاستخدام for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. شروط الاستخدام for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. Contact email, order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout checkout. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Palia Cheats يجمع ESP wallhack وteleport hack وpalia aimbot غير مكتشف لـ Palia على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@paliacheats.org للدعم والطلبات القانونية.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
					store: "料金",
				},
				hero: {
					accent: "Undetected Paliaチート",
					accentShort: "Palia Cheats",
					subtitle: "Palia Windows PC向けESP wallhack、wallhack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "Palia PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Palia CheatsパッケージはPalia Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Palia Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Palia向けundetected ESP、wallhack、radar、Aimbot — checkoutで購入。",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "Palia向けundetectedチート。ESP wallhack、wallhack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "Palia Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "Palia Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "Palia cheats hero ESP aimbot wallhack",
					galleryTitle: "Palia Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にPalia Cheatsを選ぶ理由",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。KilimaとBahari Bayでレア資源を読むのに最適。",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. 即時デジタル配信. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. 即時デジタル配信. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. 即時デジタル配信. Windows PC.",
					h1: "機能",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "機能",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. 即時デジタル配信. Windows PC.",
					h1: "料金",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "料金",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. 即時デジタル配信. Windows PC.",
					h1: "セットアップ",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "セットアップ",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "更新 | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. 即時デジタル配信. Windows PC.",
					h1: "更新",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "更新",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. 即時デジタル配信. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. 即時デジタル配信. Windows PC.",
					h1: "サポート",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "サポート",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. 即時デジタル配信. Windows PC.",
					h1: "Undetectedチート",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. 即時デジタル配信. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. 即時デジタル配信. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. 即時デジタル配信. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. 即時デジタル配信. Windows PC.",
					h1: "Palia Cheats 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Cheats 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Cheats | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. 即時デジタル配信. Windows PC.",
					h1: "Palia Cheats",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Cheats",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia Cheat Download | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. 即時デジタル配信. Windows PC.",
					h1: "Palia Cheat Download",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia Cheat Download",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia Mod Menu | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. 即時デジタル配信. Windows PC.",
					h1: "Palia Mod Menu",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia Mod Menu",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. 即時デジタル配信. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Paliaチート | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. 即時デジタル配信. Windows PC.",
					h1: "最強Paliaチート",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "最強Paliaチート",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia Aimbot Hack | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. 即時デジタル配信. Windows PC.",
					h1: "Palia Aimbot Hack",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia Aimbot Hack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP Hack | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. 即時デジタル配信. Windows PC.",
					h1: "Palia ESP Hack",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP Hack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. 即時デジタル配信. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"即時デジタル配信 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Palia Cheats",
					description: "プライバシーポリシー for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。プライバシーポリシー for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Palia Cheats",
					description: "返金ポリシー for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。返金ポリシー for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。Contact email, order references, and basic site security data.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Palia Cheats",
					description: "利用規約 for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。利用規約 for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。Contact email, order references, and basic site security data.",
								"checkout checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Palia CheatsはPalia向けWindows PC用ESP wallhack、teleport hack、palia aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
					store: "가격",
				},
				hero: {
					accent: "Undetected Palia 치트",
					accentShort: "Palia Cheats",
					subtitle: "Palia Windows PC용 ESP wallhack, wallhack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "Palia PC용 ESP, wallhack, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Palia Cheats 패키지는 Palia Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Palia Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Palia용 undetected ESP, wallhack, wallhack, Aimbot — checkout 결제.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "Palia undetected 치트. ESP wallhack, wallhack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "Palia Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "Palia Windows PC undetected 패키지: ESP wallhack, wallhack, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "Palia cheats hero ESP aimbot wallhack",
					galleryTitle: "Palia Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Palia Cheats를 선택하는 이유",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. Kilima 및 Bahari Bay에서 희귀 자원 읽기에 이상적.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, wallhack, Aimbot 단일 라이선스",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. 즉시 디지털 배송. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. 즉시 디지털 배송. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. 즉시 디지털 배송. Windows PC.",
					h1: "기능",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "기능",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. 즉시 디지털 배송. Windows PC.",
					h1: "가격",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "가격",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. 즉시 디지털 배송. Windows PC.",
					h1: "설치",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "설치",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. 즉시 디지털 배송. Windows PC.",
					h1: "업데이트",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "업데이트",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. 즉시 디지털 배송. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. 즉시 디지털 배송. Windows PC.",
					h1: "지원",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "지원",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. 즉시 디지털 배송. Windows PC.",
					h1: "Undetected 치트",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. 즉시 디지털 배송. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. 즉시 디지털 배송. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. 즉시 디지털 배송. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. 즉시 디지털 배송. Windows PC.",
					h1: "Palia Cheats 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Cheats 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Cheats | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. 즉시 디지털 배송. Windows PC.",
					h1: "Palia Cheats",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Cheats",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia Cheat Download | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. 즉시 디지털 배송. Windows PC.",
					h1: "Palia Cheat Download",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia Cheat Download",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia 모드 메뉴 | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. 즉시 디지털 배송. Windows PC.",
					h1: "Palia 모드 메뉴",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia 모드 메뉴",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. 즉시 디지털 배송. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Palia 치트 | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. 즉시 디지털 배송. Windows PC.",
					h1: "최고의 Palia 치트",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "최고의 Palia 치트",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia 에임봇 핵 | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. 즉시 디지털 배송. Windows PC.",
					h1: "Palia 에임봇 핵",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia 에임봇 핵",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP 핵 | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. 즉시 디지털 배송. Windows PC.",
					h1: "Palia ESP 핵",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP 핵",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. 즉시 디지털 배송. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"즉시 디지털 배송 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Palia Cheats",
					description: "개인정보 처리방침 for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. 개인정보 처리방침 for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Palia Cheats",
					description: "환불 정책 for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. 환불 정책 for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. Contact email, order references, and basic site security data.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Palia Cheats",
					description: "이용 약관 for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. 이용 약관 for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. Contact email, order references, and basic site security data.",
								"checkout checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats는 Palia Windows PC용 ESP wallhack, teleport hack, palia aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
					store: "价格",
				},
				hero: {
					accent: "Undetected Palia作弊",
					accentShort: "Palia Cheats",
					subtitle: "适用于Palia Windows PC的ESP wallhack、wallhack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "Palia PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Palia Cheats套餐已在Palia Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Palia Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Palia undetected ESP、wallhack、radar与Aimbot — 通过checkout结账。",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "Palia undetected作弊。ESP wallhack、wallhack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "Palia Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "Palia Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "Palia cheats hero ESP aimbot wallhack",
					galleryTitle: "Palia Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Palia Cheats的原因",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。适合在Kilima和Bahari Bay中读取稀有资源。",
								"通过checkout checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. 即时数字交付. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. 即时数字交付. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. 即时数字交付. Windows PC.",
					h1: "功能",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "功能",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. 即时数字交付. Windows PC.",
					h1: "价格",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "价格",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. 即时数字交付. Windows PC.",
					h1: "安装",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "安装",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "更新 | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. 即时数字交付. Windows PC.",
					h1: "更新",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "更新",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. 即时数字交付. Windows PC.",
					h1: "常见问题",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "常见问题",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. 即时数字交付. Windows PC.",
					h1: "支持",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "支持",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. 即时数字交付. Windows PC.",
					h1: "Undetected作弊",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. 即时数字交付. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. 即时数字交付. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. 即时数字交付. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia作弊 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. 即时数字交付. Windows PC.",
					h1: "Palia作弊 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia作弊 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia作弊 | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. 即时数字交付. Windows PC.",
					h1: "Palia作弊",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia作弊",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia作弊下载 | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. 即时数字交付. Windows PC.",
					h1: "Palia作弊下载",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia作弊下载",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia修改菜单 | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. 即时数字交付. Windows PC.",
					h1: "Palia修改菜单",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia修改菜单",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. 即时数字交付. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Palia作弊 | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. 即时数字交付. Windows PC.",
					h1: "最佳Palia作弊",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "最佳Palia作弊",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia自瞄外挂 | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. 即时数字交付. Windows PC.",
					h1: "Palia自瞄外挂",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia自瞄外挂",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP外挂 | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. 即时数字交付. Windows PC.",
					h1: "Palia ESP外挂",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP外挂",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. 即时数字交付. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "购买 Palia Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"即时数字交付 on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Palia Cheats",
					description: "隐私政策 for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。隐私政策 for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Palia Cheats",
					description: "退款政策 for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。退款政策 for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。Contact email, order references, and basic site security data.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Palia Cheats",
					description: "使用条款 for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。使用条款 for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。Contact email, order references, and basic site security data.",
								"通过checkout checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats为PaliaWindows PC提供ESP wallhack、teleport hack和palia aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
					store: "कीमत",
				},
				hero: {
					accent: "Undetected Palia cheats",
					accentShort: "Palia Cheats",
					subtitle: "Palia Windows PC के लिए ESP wallhack, wallhack और Aimbot — EAC maintenance शामिल।",
					subtitleShort: "Palia PC के लिए ESP, wallhack और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Palia Cheats पैकेज Palia Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "EAC maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Palia Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Palia के लिए undetected ESP, wallhack, wallhack और Aimbot — secure checkout।",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "Palia undetected cheats. ESP wallhack, wallhack, Aimbot, EAC maintenance. Instant digital delivery.",
					h1: "Palia Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "Palia Windows PC undetected पैकेज: ESP wallhack, wallhack, Aimbot, EAC maintenance सहित.",
					imageAlt: "Palia cheats hero ESP aimbot wallhack",
					galleryTitle: "Palia Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Palia Cheats क्यों",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। Kilima और Bahari Bay में दुर्लभ संसाधन पढ़ने के लिए आदर्श.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, wallhack, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "कीमत",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "कीमत",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "सेटअप",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "सेटअप",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "अपडेट",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "सहायता",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "सहायता",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Undetected cheats",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Cheats 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Cheats 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Cheats | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Cheats",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Cheats",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia Cheat Download | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Cheat Download",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia Cheat Download",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia Mod Menu | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Mod Menu",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia Mod Menu",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Palia Cheats | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "सर्वश्रेष्ठ Palia Cheats",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "सर्वश्रेष्ठ Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia Aimbot Hack | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Aimbot Hack",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia Aimbot Hack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP Hack | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia ESP Hack",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP Hack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. तुरंत डिजिटल डिलीवरी. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Palia Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"तुरंत डिजिटल डिलीवरी on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Palia Cheats",
					description: "गोपनीयता नीति for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। गोपनीयता नीति for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Palia Cheats",
					description: "रिफंड नीति for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। रिफंड नीति for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। Contact email, order references, and basic site security data.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Palia Cheats",
					description: "उपयोग की शर्तें for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। उपयोग की शर्तें for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। Contact email, order references, and basic site security data.",
								"checkout checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats Palia के लिए Windows PC पर ESP wallhack, teleport hack और palia aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@paliacheats.org",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
					store: "Harga",
				},
				hero: {
					accent: "Cheat Palia undetected",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack, dan Aimbot untuk Palia di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, wallhack & Aimbot untuk Palia PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Palia Cheats aktif untuk Palia di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Palia Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, wallhack, dan Aimbot undetected untuk Palia — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Palia undetected untuk Palia di PC. ESP wallhack, wallhack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.",
					h1: "Palia Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Palia di Windows PC: ESP wallhack, wallhack, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galeri Palia Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Palia Cheats di 2026",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Ideal membaca sumber daya langka di Kilima dan Bahari Bay.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack, Aimbot dalam satu lisensi",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. pengiriman digital instan. PC Windows.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. pengiriman digital instan. PC Windows.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. pengiriman digital instan. PC Windows.",
					h1: "Fitur",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Fitur",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. pengiriman digital instan. PC Windows.",
					h1: "Harga",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Harga",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. pengiriman digital instan. PC Windows.",
					h1: "Setup",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Setup",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. pengiriman digital instan. PC Windows.",
					h1: "Pembaruan",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. pengiriman digital instan. PC Windows.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. pengiriman digital instan. PC Windows.",
					h1: "Dukungan",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Dukungan",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. pengiriman digital instan. PC Windows.",
					h1: "Cheat undetected",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. pengiriman digital instan. PC Windows.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. pengiriman digital instan. PC Windows.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. pengiriman digital instan. PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Palia 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. pengiriman digital instan. PC Windows.",
					h1: "Cheat Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Cheat Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Palia | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. pengiriman digital instan. PC Windows.",
					h1: "Cheat Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Cheat Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Palia | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. pengiriman digital instan. PC Windows.",
					h1: "Download Cheat Palia",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Download Cheat Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Palia | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. pengiriman digital instan. PC Windows.",
					h1: "Menu mod Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Menu mod Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. pengiriman digital instan. PC Windows.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Palia terbaik | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. pengiriman digital instan. PC Windows.",
					h1: "Cheat Palia terbaik",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Cheat Palia terbaik",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. pengiriman digital instan. PC Windows.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. pengiriman digital instan. PC Windows.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. pengiriman digital instan. PC Windows.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Beli Palia Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"pengiriman digital instan on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Palia Cheats",
					description: "Kebijakan privasi for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Kebijakan privasi for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org untuk dukungan dan legal.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Palia Cheats",
					description: "Kebijakan refund for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Kebijakan refund for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Contact email, order references, and basic site security data.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org untuk dukungan dan legal.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Palia Cheats",
					description: "Syarat penggunaan for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Syarat penggunaan for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Contact email, order references, and basic site security data.",
								"pengiriman digital instan via checkout checkout. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats menyediakan ESP wallhack, teleport hack, dan palia aimbot undetected untuk Palia di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org untuk dukungan dan legal.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
					store: "ราคา",
				},
				hero: {
					accent: "Palia cheats ไม่ถูกตรวจจับ",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack และ Aimbot สำหรับ Palia บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, wallhack และ Aimbot สำหรับ Palia PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Palia Cheats พร้อมใช้งานสำหรับ Palia บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Palia Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, wallhack และ Aimbot ไม่ถูกตรวจจับสำหรับ Palia — ชำระผ่าน checkout",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Palia undetected สำหรับ Palia บน PC. ESP wallhack, wallhack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Palia Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Palia บน Windows PC: ESP wallhack, wallhack, Aimbot พร้อม EAC maintenance",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "แกลเลอรี Palia Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Palia Cheats ปี 2026",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC เหมาะสำหรับอ่าน ทรัพยากรหายากใน Kilima และ Bahari Bay",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, wallhack, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "ราคา",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "ราคา",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "ติดตั้ง",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "อัปเดต",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "สนับสนุน",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Cheats undetected",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Palia Cheats 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Cheats 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Cheats | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Palia Cheats",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Cheats",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Palia Cheats | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "ดาวน์โหลด Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "ดาวน์โหลด Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Palia | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "เมนูมอด Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "เมนูมอด Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Palia ที่ดีที่สุด | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Cheat Palia ที่ดีที่สุด",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Cheat Palia ที่ดีที่สุด",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Palia | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Hack Aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. จัดส่งดิจิทัลทันที. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "ซื้อ Palia Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"จัดส่งดิจิทัลทันที on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Palia Cheats",
					description: "นโยบายความเป็นส่วนตัว for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC นโยบายความเป็นส่วนตัว for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org สำหรับการสนับสนุน",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Palia Cheats",
					description: "นโยบายการคืนเงิน for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC นโยบายการคืนเงิน for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC Contact email, order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org สำหรับการสนับสนุน",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Palia Cheats",
					description: "ข้อกำหนดการใช้งาน for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC ข้อกำหนดการใช้งาน for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC Contact email, order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout checkout แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats รวม ESP wallhack, teleport hack และ palia aimbot แบบ undetected สำหรับ Palia บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org สำหรับการสนับสนุน",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
					store: "Giá",
				},
				hero: {
					accent: "Cheat Palia undetected",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack và Aimbot cho Palia trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, wallhack & Aimbot cho Palia PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Palia Cheats đang hoạt động cho Palia trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Palia Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, wallhack và Aimbot undetected cho Palia — thanh toán qua checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Palia undetected cho Palia trên PC. ESP wallhack, wallhack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "Palia Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Palia trên Windows PC: ESP wallhack, wallhack, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Thư viện Palia Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Palia Cheats 2026",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Lý tưởng đọc tài nguyên hiếm trong Kilima và Bahari Bay.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack, Aimbot trong một giấy phép",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Tính năng",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Tính năng",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Giá",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Giá",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Cài đặt",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Cài đặt",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Cập nhật",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Hỗ trợ",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Cheat undetected",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Palia 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Cheat Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Cheat Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Palia | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Cheat Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Cheat Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Palia | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Tải Cheat Palia",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Tải Cheat Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Palia | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Mod menu Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Mod menu Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Palia tốt nhất | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Cheat Palia tốt nhất",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Cheat Palia tốt nhất",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. giao hàng kỹ thuật số tức thì. PC Windows.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Mua Palia Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"giao hàng kỹ thuật số tức thì on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Palia Cheats",
					description: "Chính sách bảo mật for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Chính sách bảo mật for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org cho hỗ trợ và pháp lý.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Palia Cheats",
					description: "Chính sách hoàn tiền for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Chính sách hoàn tiền for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Contact email, order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org cho hỗ trợ và pháp lý.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Palia Cheats",
					description: "Điều khoản sử dụng for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Điều khoản sử dụng for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Contact email, order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout checkout. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats cung cấp ESP wallhack, teleport hack và palia aimbot undetected cho Palia trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org cho hỗ trợ và pháp lý.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
					store: "Ціни",
				},
				hero: {
					accent: "Undetected чіти Palia",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack і Aimbot для Palia на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, wallhack і Aimbot для Palia PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Palia Cheats активний для Palia на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Palia Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, wallhack і Aimbot для Palia — оплата через checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Palia для Palia на PC. ESP wallhack, wallhack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "Palia Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Palia на Windows PC: ESP wallhack, wallhack, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Галерея Palia Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Palia Cheats у 2026",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Ідеально для читання рідкісних ресурсів у Kilima і Bahari Bay.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack і Aimbot в одній ліцензії",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. миттєва цифрова доставка. Windows PC.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. миттєва цифрова доставка. Windows PC.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. миттєва цифрова доставка. Windows PC.",
					h1: "Функції",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Функції",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. миттєва цифрова доставка. Windows PC.",
					h1: "Ціни",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Ціни",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. миттєва цифрова доставка. Windows PC.",
					h1: "Встановлення",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Встановлення",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. миттєва цифрова доставка. Windows PC.",
					h1: "Оновлення",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. миттєва цифрова доставка. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. миттєва цифрова доставка. Windows PC.",
					h1: "Підтримка",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Підтримка",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. миттєва цифрова доставка. Windows PC.",
					h1: "Undetected чіти",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. миттєва цифрова доставка. Windows PC.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. миттєва цифрова доставка. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. миттєва цифрова доставка. Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Palia 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. миттєва цифрова доставка. Windows PC.",
					h1: "Чіти Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Чіти Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Palia | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. миттєва цифрова доставка. Windows PC.",
					h1: "Чіти Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Чіти Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Palia Cheats | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. миттєва цифрова доставка. Windows PC.",
					h1: "Завантаження Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Завантаження Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Palia | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. миттєва цифрова доставка. Windows PC.",
					h1: "Мод-меню Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Мод-меню Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. миттєва цифрова доставка. Windows PC.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Palia | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. миттєва цифрова доставка. Windows PC.",
					h1: "Найкращі чіти Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Найкращі чіти Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Palia | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. миттєва цифрова доставка. Windows PC.",
					h1: "Хак aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Хак aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Palia | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. миттєва цифрова доставка. Windows PC.",
					h1: "Хак ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Хак ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. миттєва цифрова доставка. Windows PC.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Купити Palia Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"миттєва цифрова доставка on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Palia Cheats",
					description: "Політика конфіденційності for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Політика конфіденційності for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org для підтримки та правових питань.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Palia Cheats",
					description: "Політика повернення for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Політика повернення for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Contact email, order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org для підтримки та правових питань.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Palia Cheats",
					description: "Умови використання for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Умови використання for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Contact email, order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout checkout. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats об'єднує ESP wallhack, teleport hack і palia aimbot у undetected пакеті для Palia на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org для підтримки та правових питань.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
					store: "Ceny",
				},
				hero: {
					accent: "Undetected Palia cheaty",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack a Aimbot pro Palia na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, wallhack a Aimbot pro Palia PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Palia Cheats je aktivní pro Palia na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Palia Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, wallhack a Aimbot pro Palia — checkout přes checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Palia cheaty pro Palia na PC. ESP wallhack, wallhack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "Palia Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Palia na Windows PC: ESP wallhack, wallhack, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galerie Palia Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Palia Cheats v roce 2026",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Ideální pro čtení vzácných surovin v Kilima a Bahari Bay.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack a Aimbot v jedné licenci",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. okamžité digitální doručení. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. okamžité digitální doručení. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. okamžité digitální doručení. Windows PC.",
					h1: "Funkce",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Funkce",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. okamžité digitální doručení. Windows PC.",
					h1: "Ceny",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Ceny",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. okamžité digitální doručení. Windows PC.",
					h1: "Instalace",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Instalace",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. okamžité digitální doručení. Windows PC.",
					h1: "Aktualizace",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. okamžité digitální doručení. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. okamžité digitální doručení. Windows PC.",
					h1: "Podpora",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Podpora",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. okamžité digitální doručení. Windows PC.",
					h1: "Undetected cheaty",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. okamžité digitální doručení. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. okamžité digitální doručení. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. okamžité digitální doručení. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia cheaty 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. okamžité digitální doručení. Windows PC.",
					h1: "Palia cheaty 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia cheaty 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia cheaty | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. okamžité digitální doručení. Windows PC.",
					h1: "Palia cheaty",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia cheaty",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Palia Cheats | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. okamžité digitální doručení. Windows PC.",
					h1: "Stáhnout Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Stáhnout Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia mod menu | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. okamžité digitální doručení. Windows PC.",
					h1: "Palia mod menu",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia mod menu",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. okamžité digitální doručení. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Palia cheaty | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. okamžité digitální doručení. Windows PC.",
					h1: "Nejlepší Palia cheaty",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Nejlepší Palia cheaty",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia aimbot hack | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. okamžité digitální doručení. Windows PC.",
					h1: "Palia aimbot hack",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia aimbot hack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP hack | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. okamžité digitální doručení. Windows PC.",
					h1: "Palia ESP hack",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP hack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. okamžité digitální doručení. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Koupit Palia Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"okamžité digitální doručení on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Palia Cheats",
					description: "Zásady ochrany soukromí for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Zásady ochrany soukromí for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org pro podporu a právní dotazy.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Palia Cheats",
					description: "Zásady vrácení peněz for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Zásady vrácení peněz for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Contact email, order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org pro podporu a právní dotazy.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Palia Cheats",
					description: "Podmínky použití for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Podmínky použití for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Contact email, order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout checkout. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats spojuje ESP wallhack, teleport hack a palia aimbot jako undetected balíček pro Palia na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org pro podporu a právní dotazy.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
					store: "Prețuri",
				},
				hero: {
					accent: "Cheats Palia undetected",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack și Aimbot pentru Palia pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, wallhack și Aimbot pentru Palia PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Palia Cheats este activ pentru Palia pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Palia Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, wallhack și Aimbot undetected pentru Palia — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Palia undetected pentru Palia pe PC. ESP wallhack, wallhack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.",
					h1: "Palia Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Palia pe Windows PC: ESP wallhack, wallhack, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Galerie Palia Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Palia Cheats în 2026",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Ideal pentru citirea resurse rare în Kilima și Bahari Bay.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, wallhack și Aimbot într-o licență",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"palia-esp": {
					title: "ESP Palia | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. livrare digitală instantă. PC Windows.",
					h1: "ESP Palia",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Aimbot Palia | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. livrare digitală instantă. PC Windows.",
					h1: "Aimbot Palia",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. livrare digitală instantă. PC Windows.",
					h1: "Funcții",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Funcții",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. livrare digitală instantă. PC Windows.",
					h1: "Prețuri",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Prețuri",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. livrare digitală instantă. PC Windows.",
					h1: "Instalare",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Instalare",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. livrare digitală instantă. PC Windows.",
					h1: "Actualizări",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. livrare digitală instantă. PC Windows.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. livrare digitală instantă. PC Windows.",
					h1: "Suport",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Suport",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. livrare digitală instantă. PC Windows.",
					h1: "Cheats undetected",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Palia | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. livrare digitală instantă. PC Windows.",
					h1: "Wallhack Palia",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Wallhack Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. livrare digitală instantă. PC Windows.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. livrare digitală instantă. PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Palia 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. livrare digitală instantă. PC Windows.",
					h1: "Cheats Palia 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Cheats Palia 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Palia | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. livrare digitală instantă. PC Windows.",
					h1: "Cheats Palia",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Cheats Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Palia Cheats | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. livrare digitală instantă. PC Windows.",
					h1: "Descărcare Palia Cheats",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Descărcare Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Palia | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. livrare digitală instantă. PC Windows.",
					h1: "Meniu mod Palia",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Meniu mod Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Palia | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. livrare digitală instantă. PC Windows.",
					h1: "Soft aim Palia",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Soft aim Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Palia | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. livrare digitală instantă. PC Windows.",
					h1: "Cele mai bune cheats Palia",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Cele mai bune cheats Palia",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Palia | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. livrare digitală instantă. PC Windows.",
					h1: "Hack aimbot Palia",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Hack aimbot Palia",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Palia | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. livrare digitală instantă. PC Windows.",
					h1: "Hack ESP Palia",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Hack ESP Palia",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Palia | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. livrare digitală instantă. PC Windows.",
					h1: "Unlock all Palia",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Unlock all Palia",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Cumpără Palia Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"livrare digitală instantă on PC Windows. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Palia Cheats",
					description: "Politica de confidențialitate for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Politica de confidențialitate for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org pentru suport și legal.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Palia Cheats",
					description: "Politica de rambursare for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Politica de rambursare for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Contact email, order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org pentru suport și legal.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Palia Cheats",
					description: "Termeni de utilizare for Palia Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Termeni de utilizare for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Contact email, order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout checkout. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats combină ESP wallhack, teleport hack și palia aimbot undetected pentru Palia pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org pentru suport și legal.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
					store: "Priser",
				},
				hero: {
					accent: "Undetected Palia cheats",
					accentShort: "Palia Cheats",
					subtitle: "ESP wallhack, wallhack och Aimbot för Palia på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, wallhack & Aimbot för Palia PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Palia Cheats-paketet är live för Palia på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "Palia Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Palia",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Palia Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, wallhack och Aimbot för Palia — secure checkout.",
				},
				images: {
					hero: "Palia Cheats hero — ESP and aimbot overlay in Palia",
					espWallhack: "Wallhack outlines showing ores, fish, and insects through walls",
					aimbotCombat: "Soft aim assist overlay during an Palia session",
					squadFight: "Palia Cheats combat overlay during a farming session",
					playerEsp: "Player ESP boxes and distance readouts in a Palia session",
					headerArt: "Aimbot view and bone priority controls for Palia",
					cheatsPackage: "wallhack threat overlay for Palia",
					rebootFight: "Aimbot assist during a Palia fishing session",
					battleRoyale: "Palia Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for ores and fish nodes in Palia",
				},
			},
			pages: {
				home: {
					title: "Palia Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Palia cheats för Palia på PC. ESP wallhack, wallhack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "Palia Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Palia på Windows PC: ESP wallhack, wallhack, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "Palia ESP player tags hack",
					galleryTitle: "Palia Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Palia Cheats 2026",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Ideal för att läsa sällsynta resurser i Kilima och Bahari Bay.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, wallhack och Aimbot i en licens",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"palia-esp": {
					title: "Palia ESP | Resource ESP",
					description: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay. omedelbar digital leverans. Windows PC.",
					h1: "Palia ESP",
					intro: "Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with resource ESP boxes and distance readouts",
					galleryTitle: "Palia ESP",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What resource ESP shows",
							paragraphs: [
								"Ore pins, fishing spots, bug markers, and distance readouts through walls.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farming routes",
							paragraphs: [
								"Filter by resource type to farm gold and skills faster without missing rare nodes.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included in one license",
							paragraphs: [
								"Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"palia-aimbot": {
					title: "Palia Aimbot | Hunting & Fishing Aim",
					description: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC. omedelbar digital leverans. Windows PC.",
					h1: "Palia Aimbot",
					intro: "Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.",
					imageAlt: "Bahari Bay hunting routes with soft aim for Palia wildlife",
					galleryTitle: "Palia Aimbot",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Soft aim controls",
							paragraphs: [
								"Tune strength, smoothness, and hotkeys before you hunt or fish.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Per-tool profiles",
							paragraphs: [
								"Save separate settings for bows, rods, and hunting tools.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Works with ESP",
							paragraphs: [
								"Pair aimbot with resource ESP and wallhack in one palia cheats license.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation. omedelbar digital leverans. Windows PC.",
					h1: "Funktioner",
					intro: "Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.",
					imageAlt: "Palia housing interior — cheat menu, ESP, and automation tools",
					galleryTitle: "Funktioner",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "ESP & wallhack",
							paragraphs: [
								"See resources through walls with filters for Kilima Village and Bahari Bay.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Teleport & automation",
							paragraphs: [
								"Bookmark coordinates and automate repetitive skill grinds.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery. omedelbar digital leverans. Windows PC.",
					h1: "Priser",
					intro: "Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.",
					imageAlt: "Palia homestead plot — buy Palia cheats monthly or lifetime",
					galleryTitle: "Priser",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "What you pay for",
							paragraphs: [
								"Full ESP, wallhack, fishing tools, and cheat menu on every plan.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Pick a plan",
							paragraphs: [
								"Try monthly first or buy lifetime for one payment — same features either way.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After checkout",
							paragraphs: [
								"License arrives by email. Follow setup, then check status after patches.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Install Guide",
					description: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu. omedelbar digital leverans. Windows PC.",
					h1: "Installation",
					intro: "Install palia cheats on Windows PC — download loader, paste license, open cheat menu.",
					imageAlt: "Palia housing interior — setup cheat menu after checkout",
					galleryTitle: "Installation",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before install",
							paragraphs: [
								"Windows 10 or 11, disable conflicting overlays, keep order email ready.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Install steps",
							paragraphs: [
								"Run loader as admin, paste license key, launch Palia, open cheat menu.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "If setup fails",
							paragraphs: [
								"Check status after patches. Email support with your order ID.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Undetected Status",
					description: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play. omedelbar digital leverans. Windows PC.",
					h1: "Uppdateringar",
					intro: "Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.",
					imageAlt: "Kilima Village gameplay — Palia cheats status after EAC patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "Current build",
							paragraphs: [
								"We post a note here when a patch needs a rebuild. Wait if status is yellow.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After a patch",
							paragraphs: [
								"Read the latest note, update the loader, then launch Palia.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "No permanent guarantee",
							paragraphs: [
								"No cheat stays undetected forever. Status first, then play.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Questions",
					description: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds. omedelbar digital leverans. Windows PC.",
					h1: "FAQ",
					intro: "Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.",
					imageAlt: "Palia homestead — FAQ about buying Palia cheats on Windows PC",
					galleryTitle: "FAQ",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Buying & delivery",
							paragraphs: [
								"Digital license by email after payment. Keep your order confirmation.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Setup & patches",
							paragraphs: [
								"Follow setup after purchase. Check status after big game or EAC updates.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Refunds & support",
							paragraphs: [
								"Read refund policy before checkout. Email support with order ID.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Palia cheats support for setup, delivery, and billing — email with your order ID. omedelbar digital leverans. Windows PC.",
					h1: "Support",
					intro: "Palia cheats support for setup, delivery, and billing — email with your order ID.",
					imageAlt: "Kilima Village — Palia cheats support and license help",
					galleryTitle: "Support",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Contact us",
							paragraphs: [
								"Email support@paliacheats.org with order ID, Windows version, and issue details.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Faster help",
							paragraphs: [
								"Check FAQ and status before you write — many answers are already there.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "License issues",
							paragraphs: [
								"Include receipt, what you tried, and any error text from the loader.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | EAC Safe Status",
					description: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches. omedelbar digital leverans. Windows PC.",
					h1: "Undetected cheats",
					intro: "Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.",
					imageAlt: "Kilima Village — undetected Palia cheats status overview",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "What undetected means",
							paragraphs: [
								"Active maintenance after EAC updates — not a permanent safety promise.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Rebuild workflow",
							paragraphs: [
								"We test ESP, wallhack, and fishing modules, then post status notes.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before you play",
							paragraphs: [
								"Check status after patch days. Use conservative cheat menu settings.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				wallhack: {
					title: "Palia Wallhack | See Through Walls",
					description: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay. omedelbar digital leverans. Windows PC.",
					h1: "Palia Wallhack",
					intro: "Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.",
					imageAlt: "Palia ore mining with wallhack resource markers through terrain",
					galleryTitle: "Palia Wallhack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Wallhack overlays",
							paragraphs: [
								"Resource outlines with adjustable range and opacity filters.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With resource ESP",
							paragraphs: [
								"Wallhack shows hidden nodes; ESP adds distance and type labels.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "One license",
							paragraphs: [
								"Wallhack is bundled with fishing tools and teleport in palia cheats.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				radar: {
					title: "wallhack | Teleport Tools",
					description: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay. omedelbar digital leverans. Windows PC.",
					h1: "wallhack",
					intro: "Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.",
					imageAlt: "Bahari Bay landscape — teleport bookmarks and map ESP",
					galleryTitle: "wallhack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "Save coordinates",
							paragraphs: [
								"Bookmark fishing holes, ore clusters, and housing plots mid-session.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Skip long walks",
							paragraphs: [
								"Recall saved spots from the cheat menu to farm faster.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "With wallhack",
							paragraphs: [
								"Teleport pairs with wallhack and resource ESP in one license.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | EAC Bypass Guide",
					description: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia. omedelbar digital leverans. Windows PC.",
					h1: "EAC Bypass",
					intro: "EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.",
					imageAlt: "Kilima Village — EAC maintenance for Palia cheats after patches",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/status/",
					sections: [
						{
							h2: "How EAC affects cheats",
							paragraphs: [
								"Security updates can break ESP and fishing modules until we rebuild.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Our maintenance process",
							paragraphs: [
								"Test new builds, publish status notes, ship updates to active licenses.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Patch day rules",
							paragraphs: [
								"Do not play on an old build after a major EAC or game update.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Palia Cheats 2026 | 2026 Buyer Guide",
					description: "Palia cheats 2026 — what to look for before you buy on Windows PC. omedelbar digital leverans. Windows PC.",
					h1: "Palia Cheats 2026",
					intro: "Palia cheats 2026 — what to look for before you buy on Windows PC.",
					imageAlt: "Palia homestead — 2026 Palia cheats buyer guide",
					galleryTitle: "Palia Cheats 2026",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/cheats/",
					sections: [
						{
							h2: "2026 checklist",
							paragraphs: [
								"Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What is included",
							paragraphs: [
								"Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Before checkout",
							paragraphs: [
								"Compare pricing, read setup, and bookmark the status page.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				hacks: {
					title: "Palia Cheats | Buy Palia Cheats",
					description: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35. omedelbar digital leverans. Windows PC.",
					h1: "Palia Cheats",
					intro: "Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.",
					imageAlt: "Palia ore mining — buy Palia cheats with ESP and fishing tools",
					galleryTitle: "Palia Cheats",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat menu overview",
							paragraphs: [
								"One Windows PC license for cozy MMO farming and multiplayer sessions.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Core tools",
							paragraphs: [
								"Resource ESP, wallhack, fishing ESP, teleport, and skill automation.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Get started",
							paragraphs: [
								"Pick a plan, get license by email, follow setup, check status after patches.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Palia Cheat Download | Instant Download",
					description: "Palia cheats download — instant digital license after checkout on Windows PC. omedelbar digital leverans. Windows PC.",
					h1: "Palia Cheat Download",
					intro: "Palia cheats download — instant digital license after checkout on Windows PC.",
					imageAlt: "Palia homestead — instant Palia cheats license delivery",
					galleryTitle: "Palia Cheat Download",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How delivery works",
							paragraphs: [
								"License details arrive by email after payment confirms.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What you unlock",
							paragraphs: [
								"Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "First launch",
							paragraphs: [
								"Follow setup guide. Check status if the game patched recently.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Palia Mod-meny | Cheat Menu",
					description: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game. omedelbar digital leverans. Windows PC.",
					h1: "Palia Mod-meny",
					intro: "Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.",
					imageAlt: "Palia housing interior — in-game cheat menu controls",
					galleryTitle: "Palia Mod-meny",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu controls",
							paragraphs: [
								"Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Reduce clutter",
							paragraphs: [
								"Turn off overlays you do not need while farming or fishing.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "After patches",
							paragraphs: [
								"Menu modules rebuild when EAC updates — check status before play.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Palia Soft Aim | Soft Aim Settings",
					description: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural. omedelbar digital leverans. Windows PC.",
					h1: "Palia Soft Aim",
					intro: "Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.",
					imageAlt: "Bahari Bay — soft aim settings for hunting and fishing",
					galleryTitle: "Palia Soft Aim",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Smooth tracking",
							paragraphs: [
								"Adjust strength and smoothness so assist looks subtle in longer sessions.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Fishing & hunting",
							paragraphs: [
								"Separate profiles for rods, bows, and hunting tools.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Included with cheats",
							paragraphs: [
								"Soft aim ships with ESP and wallhack in one palia cheats license.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Palia Cheats | Best Provider Guide",
					description: "Best palia cheats — compare maintenance, features, and price before you buy. omedelbar digital leverans. Windows PC.",
					h1: "Bästa Palia Cheats",
					intro: "Best palia cheats — compare maintenance, features, and price before you buy.",
					imageAlt: "Palia homestead — best Palia cheats comparison",
					galleryTitle: "Bästa Palia Cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/store/",
					sections: [
						{
							h2: "What makes the best",
							paragraphs: [
								"Live EAC rebuilds, full feature stack, and honest status updates.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Feature checklist",
							paragraphs: [
								"Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy safely",
							paragraphs: [
								"Use secure checkout, read refund policy, keep your order email.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Palia Aimbot Hack | Aimbot Hack",
					description: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC. omedelbar digital leverans. Windows PC.",
					h1: "Palia Aimbot Hack",
					intro: "Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.",
					imageAlt: "Bahari Bay — hunting aimbot controls for Palia",
					galleryTitle: "Palia Aimbot Hack",
					heroImage: "/images/palia-gameplay-bahari-landscape.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/aimbot/",
					sections: [
						{
							h2: "Aimbot vs ESP",
							paragraphs: [
								"Aimbot assists catches; ESP and wallhack show where resources are.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Hack controls",
							paragraphs: [
								"FOV, bone priority, and per-tool profiles from the cheat menu.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Maintenance",
							paragraphs: [
								"Aimbot modules rebuild after EAC patches — check status first.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Palia ESP Hack | ESP Hack",
					description: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC. omedelbar digital leverans. Windows PC.",
					h1: "Palia ESP Hack",
					intro: "Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.",
					imageAlt: "Palia ore mining — ESP hack resource markers",
					galleryTitle: "Palia ESP Hack",
					heroImage: "/images/palia-gameplay-ore-mining.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/esp/",
					sections: [
						{
							h2: "ESP hack overlays",
							paragraphs: [
								"Ores, fish, insects, and forage nodes through walls with snaplines.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Farm faster",
							paragraphs: [
								"Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Full package",
							paragraphs: [
								"ESP hack is part of palia cheats — wallhack and teleport included.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Palia Unlock All | Unlock All Explained",
					description: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools. omedelbar digital leverans. Windows PC.",
					h1: "Palia Unlock All",
					intro: "Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.",
					imageAlt: "Palia housing interior — real cheat tools vs unlock-all scams",
					galleryTitle: "Palia Unlock All",
					heroImage: "/images/palia-gameplay-housing-interior.webp",
					ctaPrimary: "Köp Palia Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock-all myths",
							paragraphs: [
								"Searches often mean free skins or items — not the same as ESP or fishing tools.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "What we provide",
							paragraphs: [
								"Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
						{
							h2: "Buy the right tool",
							paragraphs: [
								"Compare features and pricing if you need farming cheats, not skin hacks.",
								"omedelbar digital leverans on Windows PC. Check Updates after Easy Anti-Cheat patches.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Palia Cheats",
					description: "Integritetspolicy for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Integritetspolicy for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by secure checkout — not stored on paliacheats.org.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@paliacheats.org för support och juridik.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Palia Cheats",
					description: "Återbetalningspolicy for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Återbetalningspolicy for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-homestead.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Contact email, order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@paliacheats.org för support och juridik.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Palia Cheats",
					description: "Användarvillkor for Palia Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Användarvillkor for paliacheats.org and Palia licenses.",
					imageAlt: "palia cheats",
					galleryTitle: "palia cheats",
					heroImage: "/images/palia-gameplay-kilima-village.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Contact email, order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via checkout checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Palia Cheats kombinerar ESP wallhack, teleport hack och palia aimbot som undetected paket för Palia på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@paliacheats.org för support och juridik.",
								"Email: support@paliacheats.org",
							],
						},
					],
				},
			},
		},
	};
