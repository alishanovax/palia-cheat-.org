import { brand, fillBrandTokens } from './brand';
import { siteConfig } from './site-core';

export type StatusState = 'online' | 'rebuilding' | 'maintenance';

export type StatusUpdate = {
	id: string;
	/** ISO date YYYY-MM-DD — shown in the log */
	date: string;
	state: StatusState;
	title: string;
	body: string;
};

/**
 * Patch-day log — newest first. Add a row when Palia / EAC updates ship.
 */
export const statusUpdates: readonly StatusUpdate[] = [
	{
		id: '2026-08-13-online',
		date: '2026-08-13',
		state: 'online',
		title: 'Package online after Palia patch',
		body:
			'{brand} is online for {game} on Windows PC. ESP, wallhack, and fishing modules match the current client.',
	},
] as const;

export function getLatestStatusUpdate(): StatusUpdate {
	return statusUpdates[0];
}

export function formatStatusDate(isoDate: string, locale = 'en-US'): string {
	const parsed = new Date(`${isoDate}T12:00:00Z`);
	return parsed.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function statusPageUrl(): string {
	return new URL('/status/', siteConfig.url).href;
}

/**
 * Short notice for license holders (Discord pin, support ticket, email).
 * One link, factual tone — not for mass forum posting.
 */
export function buildStatusNotice(update: StatusUpdate = getLatestStatusUpdate()): string {
	const statusUrl = statusPageUrl();
	const dateLabel = formatStatusDate(update.date);
	const title = fillBrandTokens(update.title);
	const summary = fillBrandTokens(update.body);

	const stateLine =
		update.state === 'online'
			? 'Build is live. Update your loader before you play.'
			: update.state === 'rebuilding'
				? 'Rebuild in progress. Wait for the next note before you launch.'
				: 'Maintenance in progress. Check the status page before you log in.';

	return [`${brand.name} — ${title} (${dateLabel})`, summary, stateLine, statusUrl].join('\n');
}

export function statusStateLabel(state: StatusState): string {
	switch (state) {
		case 'online':
			return 'Online';
		case 'rebuilding':
			return 'Rebuilding';
		default:
			return 'Maintenance';
	}
}
