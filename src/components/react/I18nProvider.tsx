import { useLayoutEffect, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { syncI18nLocale } from '../../i18n.js';

type Props = {
	locale: string;
	children: ReactNode;
};

/** Syncs react-i18next with the Astro page locale (URL is source of truth for SEO). */
export default function I18nProvider({ locale, children }: Props) {
	syncI18nLocale(locale);

	useLayoutEffect(() => {
		syncI18nLocale(locale);
	}, [locale]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
