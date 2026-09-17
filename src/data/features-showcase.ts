import { fillBrandTokens } from './brand';
import { descriptiveAlt, paliaImages } from './palia';
import type { PageId } from './i18n/routing';

export type FeatureShowcaseItem = {
	id: string;
	tag: string;
	title: string;
	summary: string;
	paragraphs: string[];
	bullets: string[];
	image: string;
	imageAlt: string;
	learnMoreHref?: string;
	learnMorePageId?: PageId;
};

const rawFeatures: FeatureShowcaseItem[] = [
	{
		id: 'resource-esp',
		tag: 'ESP',
		title: 'Resource ESP',
		summary: 'Spot ores, forage nodes, and lootable objects through terrain with distance labels.',
		paragraphs: [
			'Resource ESP draws boxes and distance readouts on mining nodes, mushrooms, flowers, and treasure chests in Kilima Village and Bahari Bay.',
			'Filter by item type so your overlay stays clean while you farm routes or hunt rare spawns.',
		],
		bullets: [
			'Ore and clay node markers',
			'Forage & flower highlights',
			'Distance readouts in meters',
			'Kilima and Bahari filters',
		],
		image: paliaImages.cheatsEsp,
		imageAlt: descriptiveAlt(paliaImages.cheatsEsp),
	},
	{
		id: 'wallhack',
		tag: 'Wallhack',
		title: 'Wallhack outlines',
		summary: 'See insects, fish pools, and nodes behind walls and cliffs before you walk over.',
		paragraphs: [
			'Wallhack mode keeps critical spawns visible through buildings, rock faces, and dense foliage.',
			'Pair it with ESP filters to track bugs for bundles or fish pools along Bahari rivers without guessing.',
		],
		bullets: [
			'Through-wall insect markers',
			'Fish pool outlines',
			'Chest and bundle hints',
			'Adjustable line thickness',
		],
		image: paliaImages.cheatsWallhack,
		imageAlt: descriptiveAlt(paliaImages.cheatsWallhack),
	},
	{
		id: 'fishing',
		tag: 'Fishing',
		title: 'Fishing ESP',
		summary: 'Find fish pools faster and read water spots with clear on-screen markers.',
		paragraphs: [
			'Fishing ESP tags active pools, bait types, and distance so you stop casting into empty water.',
			'Works with the soft-aim module when you want help landing perfect catches during minigames.',
		],
		bullets: [
			'Live fish pool tags',
			'Bait & quality hints',
			'River and pond filters',
			'Works with hunting hotkeys',
		],
		image: paliaImages.espOverlay,
		imageAlt: descriptiveAlt(paliaImages.espOverlay),
	},
	{
		id: 'aimbot',
		tag: 'Soft aim',
		title: 'Hunting aimbot',
		summary: 'Tunable soft aim for Sernuk hunts and fishing minigames — strength you control.',
		paragraphs: [
			'Soft aim nudges your reticle toward valid targets without snapping like an obvious rage bot.',
			'Set FOV, smoothness, and toggle keys in the cheat menu before you leave the village.',
		],
		bullets: [
			'FOV ring & smoothness sliders',
			'Hunting and fishing modes',
			'Hold-to-aim hotkeys',
			'Per-weapon sensitivity',
		],
		image: paliaImages.cheatsAimbot,
		imageAlt: descriptiveAlt(paliaImages.cheatsAimbot),
	},
	{
		id: 'teleport',
		tag: 'Teleport',
		title: 'Teleport bookmarks',
		summary: 'Save map coordinates and jump between Kilima, Bahari, and homestead plots instantly.',
		paragraphs: [
			'Bookmark ore routes, vendor squares, and housing plots so you skip long walks between grinds.',
			'Named slots show on a mini radar overlay — recall a spot mid-session without opening maps.',
		],
		bullets: [
			'Unlimited named bookmarks',
			'Kilima ↔ Bahari jumps',
			'Radar pin preview',
			'Safe-distance recall option',
		],
		image: paliaImages.cheatsTeleport,
		imageAlt: descriptiveAlt(paliaImages.cheatsTeleport),
		learnMoreHref: '/teleport/',
		learnMorePageId: 'radar',
	},
	{
		id: 'homestead',
		tag: 'Homestead',
		title: 'Homestead & farming',
		summary: 'Mark crop plots, automate repetitive skill actions, and plan housing resource runs.',
		paragraphs: [
			'Homestead tools highlight tillable plots, ready crops, and storage chests on your lot.',
			'Skill automation assists with repetitive actions so you can focus on routing between nodes.',
		],
		bullets: [
			'Crop plot markers',
			'Chest & storage ESP',
			'Skill automation toggles',
			'Housing plot filters',
		],
		image: paliaImages.cheatsGarden,
		imageAlt: descriptiveAlt(paliaImages.cheatsGarden),
	},
	{
		id: 'menu',
		tag: 'Menu',
		title: 'Cheat menu & hotkeys',
		summary: 'Toggle every module in-game with a clean overlay and remappable keys.',
		paragraphs: [
			'Open the {brand} menu mid-session to switch ESP layers, aimbot strength, and teleport slots.',
			'All settings save per license — no alt-tabbing to external tools during a play session.',
		],
		bullets: [
			'In-game overlay menu',
			'Per-feature hotkeys',
			'Panic hide key',
			'Profile save & load',
		],
		image: paliaImages.cheatsMenu,
		imageAlt: descriptiveAlt(paliaImages.cheatsMenu),
	},
];

export function getFeatureShowcaseItems(): FeatureShowcaseItem[] {
	return rawFeatures.map((item) => ({
		...item,
		summary: fillBrandTokens(item.summary),
		paragraphs: item.paragraphs.map(fillBrandTokens),
		bullets: item.bullets.map(fillBrandTokens),
	}));
}
