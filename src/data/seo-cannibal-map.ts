/**
 * Near-duplicate pageIds → stronger pillars (edge 301 only).
 * Do not add src/pages routes for these — sync-cannibal-redirects.mjs + Workers middleware.
 * Weaker URLs redirect to the nav-linked pillar so Google gets one target per topic.
 */
export const cannibalRedirectTargets = {
	/** Retired module landings → single Features pillar */
	'palia-esp': 'features',
	'palia-aimbot': 'features',
	setup: 'features',
	'esp-hack': 'features',
	'aimbot-hack': 'features',
	'soft-aim': 'features',
	/** EAC maintenance → live status pillar */
	eac: 'updates',
	/** Year-stamped buyer guide → features pillar */
	'cheats-2026': 'features',
	/** Unlock-all searches → features (what the license includes) */
	'unlock-all': 'features',
	/** Delivery / download intent → features pillar */
	'cheat-download': 'features',
	/** In-game menu toggles → features list */
	'mod-menu': 'features',
	/** “Best cheats” comparisons → features pillar */
	'best-cheats': 'features',
	/** Retired preview URL → homepage hub */
	hacks: 'home',
	/** Wallhack intent → features pillar */
	wallhack: 'features',
	/** Undetected maintenance → status pillar */
	undetected: 'updates',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
