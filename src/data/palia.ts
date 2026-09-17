import { siteConfig } from './site';

/** Strip path + responsive width suffix → basename key (e.g. palia-cheats-esp). */
function imageBasename(src: string): string {
	return src
		.replace(/^.*\//, '')
		.replace(/-\d+w\.webp$/i, '.webp')
		.replace(/\.webp$/i, '');
}

/**
 * What each screenshot shows — not pricing, buy CTAs, or keyword lists.
 * Keys match image basenames under /images/.
 */
const IMAGE_ALTS: Record<string, string> = {
	'palia-gameplay-hero-night': 'Night sky over Kilima Valley with village lights below',
	'palia-gameplay-esp-overlay': 'In-game overlay with resource markers on a village bridge',
	'palia-cheats-esp': 'ESP boxes highlighting fish pools along a Bahari Bay river',
	'palia-cheats-aimbot': 'Soft-aim reticle on a Sernuk during a hunt',
	'palia-cheats-wallhack': 'Insect nodes visible through a wall with outline markers',
	'palia-cheats-radar': 'Minimap radar with teleport bookmark pins in Kilima square',
	'palia-cheats-raid': 'Homestead farm plots with crop markers on each field',
	'palia-gameplay-kilima-panorama': 'Wide panorama of Kilima Village roofs and stone paths',
	'palia-gameplay-foraging': 'Mushrooms and flowers marked on a forest foraging trail',
	'palia-gameplay-kilima-village': 'Kilima Village square with market stalls and walkways',
	'palia-gameplay-homestead': 'Player homestead with fenced crop plots and dirt paths',
	'palia-gameplay-housing-interior': 'Decorated housing interior with furniture and windows',
	'palia-gameplay-bahari-landscape': 'Bahari Bay cliffs and coastline under open sky',
	'palia-gameplay-ore-mining': 'Ore node with distance readouts during a mining swing',
	'palia-cheats-hero': 'Gameplay screenshot with an in-game settings menu overlay',
	'palia-cheats-aimbot-view': 'Aimbot panel showing FOV ring and smoothness sliders',
	'palia-player-esp': 'Player name tags and distance labels above nearby characters',
	'palia-cheats-cover': 'Third-person view of a character in a village street',
	'palia-cheats-combat': 'Combat scene with a target highlight on wildlife',
	'palia-housing': 'Player house exterior with porch steps and garden beds',
	'palia-bahari-bay': 'Bahari Bay vista with palm trees and distant hills',
};

/** Descriptive alt for any /images/*.webp path (with or without -1024w suffix). */
export function descriptiveAlt(src: string, fallback = 'Palia gameplay screenshot'): string {
	return IMAGE_ALTS[imageBasename(src)] ?? fallback;
}

/** Palia gameplay + cheat-overlay shots — hero, showcase, product pages, sitemap. */
export const paliaImages = {
	hero: '/images/palia-gameplay-hero-night.webp',
	kilimaPanorama: '/images/palia-gameplay-kilima-panorama.webp',
	/** War Dogs–style ESP / wallhack overlay on Palia world */
	espOverlay: '/images/palia-gameplay-esp-overlay.webp',
	cheatsEsp: '/images/palia-cheats-esp.webp',
	cheatsAimbot: '/images/palia-cheats-aimbot.webp',
	cheatsWallhack: '/images/palia-cheats-wallhack.webp',
	cheatsTeleport: '/images/palia-cheats-radar.webp',
	cheatsGarden: '/images/palia-cheats-raid.webp',
	cheatsMenu: '/images/palia-cheats-aimbot-view.webp',
	espWallhack: '/images/palia-cheats-esp.webp',
	aimbotCombat: '/images/palia-cheats-aimbot.webp',
	aimbotSkeleton: '/images/palia-gameplay-housing-interior.webp',
	playerEsp: '/images/palia-player-esp.webp',
	cheatsCombat: '/images/palia-cheats-combat.webp',
	logo: siteConfig.logo,
	cover: '/images/palia-cheats-cover.webp',
	loadoutBuilder: '/images/palia-gameplay-housing-interior.webp',
	squadFight: '/images/palia-gameplay-bahari-landscape.webp',
	cheatsPackage: '/images/palia-gameplay-homestead.webp',
	headerArt: '/images/palia-housing.webp',
	battleRoyaleCombat: '/images/palia-gameplay-foraging.webp',
	extractFight: '/images/palia-gameplay-ore-mining.webp',
	rebootFight: '/images/palia-gameplay-kilima-village.webp',
	scavRunCombat: '/images/palia-gameplay-ore-mining.webp',
	scavRunMode: '/images/palia-gameplay-kilima-village.webp',
	battleRoyaleIsland: '/images/palia-bahari-bay.webp',
	sessionMap: '/images/palia-gameplay-homestead.webp',
	product: [
		{ src: '/images/palia-gameplay-esp-overlay.webp', alt: descriptiveAlt('/images/palia-gameplay-esp-overlay.webp') },
		{ src: '/images/palia-cheats-esp.webp', alt: descriptiveAlt('/images/palia-cheats-esp.webp') },
		{ src: '/images/palia-cheats-aimbot.webp', alt: descriptiveAlt('/images/palia-cheats-aimbot.webp') },
		{ src: '/images/palia-cheats-wallhack.webp', alt: descriptiveAlt('/images/palia-cheats-wallhack.webp') },
		{ src: '/images/palia-cheats-radar.webp', alt: descriptiveAlt('/images/palia-cheats-radar.webp') },
		{ src: '/images/palia-cheats-raid.webp', alt: descriptiveAlt('/images/palia-cheats-raid.webp') },
		{ src: '/images/palia-gameplay-kilima-panorama.webp', alt: descriptiveAlt('/images/palia-gameplay-kilima-panorama.webp') },
		{ src: '/images/palia-gameplay-foraging.webp', alt: descriptiveAlt('/images/palia-gameplay-foraging.webp') },
	],
	gallery: [
		{ src: '/images/palia-gameplay-esp-overlay.webp', alt: descriptiveAlt('/images/palia-gameplay-esp-overlay.webp'), featured: true },
		{ src: '/images/palia-gameplay-kilima-panorama.webp', alt: descriptiveAlt('/images/palia-gameplay-kilima-panorama.webp') },
		{ src: '/images/palia-cheats-esp.webp', alt: descriptiveAlt('/images/palia-cheats-esp.webp') },
		{ src: '/images/palia-gameplay-ore-mining.webp', alt: descriptiveAlt('/images/palia-gameplay-ore-mining.webp') },
		{ src: '/images/palia-gameplay-homestead.webp', alt: descriptiveAlt('/images/palia-gameplay-homestead.webp') },
		{ src: '/images/palia-gameplay-housing-interior.webp', alt: descriptiveAlt('/images/palia-gameplay-housing-interior.webp') },
	],
	sitemap: [
		{
			src: '/images/palia-gameplay-kilima-panorama-1024w.webp',
			title: descriptiveAlt('/images/palia-gameplay-kilima-panorama.webp'),
			caption: descriptiveAlt('/images/palia-gameplay-kilima-panorama.webp'),
		},
		{
			src: '/images/palia-gameplay-esp-overlay.webp',
			title: descriptiveAlt('/images/palia-gameplay-esp-overlay.webp'),
			caption: descriptiveAlt('/images/palia-gameplay-esp-overlay.webp'),
		},
		{
			src: '/images/palia-cheats-esp.webp',
			title: descriptiveAlt('/images/palia-cheats-esp.webp'),
			caption: descriptiveAlt('/images/palia-cheats-esp.webp'),
		},
		{
			src: '/images/palia-gameplay-homestead.webp',
			title: descriptiveAlt('/images/palia-gameplay-homestead.webp'),
			caption: descriptiveAlt('/images/palia-gameplay-homestead.webp'),
		},
		{
			src: '/images/palia-gameplay-ore-mining.webp',
			title: descriptiveAlt('/images/palia-gameplay-ore-mining.webp'),
			caption: descriptiveAlt('/images/palia-gameplay-ore-mining.webp'),
		},
	],
} as const;
