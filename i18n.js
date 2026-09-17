import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportedLngs = [
	'en',
	'es',
	'fr',
	'de',
	'pt',
	'it',
	'nl',
	'pl',
	'ru',
	'tr',
	'ar',
	'ja',
	'ko',
	'zh',
	'hi',
	'id',
	'th',
	'vi',
	'uk',
	'cs',
	'ro',
	'sv',
];

/** Eager-load all locale JSON — one file per language for React islands. */
const localeModules = import.meta.glob('./public/locales/*/translation.json', {
	eager: true,
	import: 'default',
});

const resources = {};
for (const [filePath, translation] of Object.entries(localeModules)) {
	const match = filePath.match(/locales\/([^/]+)\/translation\.json$/);
	if (match) {
		resources[match[1]] = { translation };
	}
}

if (!i18n.isInitialized) {
	i18n.use(initReactI18next).init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		supportedLngs,
		nonExplicitSupportedLngs: true,
		load: 'languageOnly',
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
	});
}

/** Astro passes locale from the URL — sync before React islands render. */
export function syncI18nLocale(locale) {
	if (!locale || !supportedLngs.includes(locale)) return;
	if (i18n.language === locale && i18n.resolvedLanguage === locale) return;

	// Bundles are eager-loaded — switch synchronously so the first island paint matches the URL locale.
	if (i18n.hasResourceBundle(locale, 'translation')) {
		i18n.language = locale;
		i18n.resolvedLanguage = locale;
		i18n.languages = i18n.services?.languageUtils?.toResolveHierarchy?.(locale) ?? [locale, 'en'];
		i18n.emit('languageChanged', locale);
		return;
	}

	void i18n.changeLanguage(locale);
}

export default i18n;
