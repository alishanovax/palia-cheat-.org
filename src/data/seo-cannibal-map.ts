/**
 * Near-duplicate pageIds → stronger pillars (edge 301 only).
 * Do not add src/pages routes for these — sync-cannibal-redirects.mjs + Workers middleware.
 * Weaker URLs redirect to the nav-linked pillar so Google gets one target per topic.
 */
export const cannibalRedirectTargets = {
	'esp-hack': 'palia-esp',
	'aimbot-hack': 'palia-aimbot',
	'soft-aim': 'palia-aimbot',
	/** EAC maintenance → live status pillar */
	eac: 'updates',
	/** Year-stamped buyer guide → cheats money page */
	'cheats-2026': 'hacks',
	/** Unlock-all searches → features (what the license includes) */
	'unlock-all': 'features',
	/** Delivery / download intent → setup pillar */
	'cheat-download': 'setup',
	/** In-game menu toggles → features list */
	'mod-menu': 'features',
	/** “Best cheats” comparisons → money page */
	'best-cheats': 'hacks',
	/** Wallhack intent → ESP pillar (one visibility URL) */
	wallhack: 'palia-esp',
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
