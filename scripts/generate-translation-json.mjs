#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 * Merges EN template with ui-strings so React components render native copy.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { LOCALES } from './i18n-data/constants.mjs';
import { buildPagesForLocale } from './i18n-data/pages-i18n.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EN_PATH = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');

const NAV_ARIA = {
	en: { primaryAria: 'Primary navigation', mobileAria: 'Mobile navigation', openMenu: 'Open menu', closeMenu: 'Close menu' },
	es: { primaryAria: 'Navegación principal', mobileAria: 'Navegación móvil', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
	fr: { primaryAria: 'Navigation principale', mobileAria: 'Navigation mobile', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu' },
	de: { primaryAria: 'Hauptnavigation', mobileAria: 'Mobile Navigation', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen' },
	pt: { primaryAria: 'Navegação principal', mobileAria: 'Navegação móvel', openMenu: 'Abrir menu', closeMenu: 'Fechar menu' },
	it: { primaryAria: 'Navigazione principale', mobileAria: 'Navigazione mobile', openMenu: 'Apri menu', closeMenu: 'Chiudi menu' },
	nl: { primaryAria: 'Hoofdnavigatie', mobileAria: 'Mobiele navigatie', openMenu: 'Menu openen', closeMenu: 'Menu sluiten' },
	pl: { primaryAria: 'Nawigacja główna', mobileAria: 'Nawigacja mobilna', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu' },
	ru: { primaryAria: 'Основная навигация', mobileAria: 'Мобильная навигация', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню' },
	tr: { primaryAria: 'Ana gezinme', mobileAria: 'Mobil gezinme', openMenu: 'Menüyü aç', closeMenu: 'Menüyü kapat' },
	ar: { primaryAria: 'التنقل الرئيسي', mobileAria: 'التنقل على الجوال', openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة' },
	ja: { primaryAria: 'メインナビゲーション', mobileAria: 'モバイルナビ', openMenu: 'メニューを開く', closeMenu: 'メニューを閉じる' },
	ko: { primaryAria: '기본 내비게이션', mobileAria: '모바일 내비게이션', openMenu: '메뉴 열기', closeMenu: '메뉴 닫기' },
	zh: { primaryAria: '主导航', mobileAria: '移动端导航', openMenu: '打开菜单', closeMenu: '关闭菜单' },
	hi: { primaryAria: 'मुख्य नेविगेशन', mobileAria: 'मोबाइल नेविगेशन', openMenu: 'मेनू खोलें', closeMenu: 'मेनू बंद करें' },
	id: { primaryAria: 'Navigasi utama', mobileAria: 'Navigasi mobile', openMenu: 'Buka menu', closeMenu: 'Tutup menu' },
	th: { primaryAria: 'เมนูหลัก', mobileAria: 'เมนูมือถือ', openMenu: 'เปิดเมนู', closeMenu: 'ปิดเมนู' },
	vi: { primaryAria: 'Điều hướng chính', mobileAria: 'Điều hướng di động', openMenu: 'Mở menu', closeMenu: 'Đóng menu' },
	uk: { primaryAria: 'Головна навігація', mobileAria: 'Мобільна навігація', openMenu: 'Відкрити меню', closeMenu: 'Закрити меню' },
	cs: { primaryAria: 'Hlavní navigace', mobileAria: 'Mobilní navigace', openMenu: 'Otevřít menu', closeMenu: 'Zavřít menu' },
	ro: { primaryAria: 'Navigare principală', mobileAria: 'Navigare mobilă', openMenu: 'Deschide meniul', closeMenu: 'Închide meniul' },
	sv: { primaryAria: 'Huvudnavigering', mobileAria: 'Mobil navigering', openMenu: 'Öppna meny', closeMenu: 'Stäng meny' },
};

const LANG_LABELS = {
	en: { select: 'Select language', official: 'English — official language', isOfficial: 'English is the official language' },
	es: { select: 'Seleccionar idioma', official: 'Inglés — idioma oficial', isOfficial: 'El inglés es el idioma oficial' },
	fr: { select: 'Choisir la langue', official: 'Anglais — langue officielle', isOfficial: "L'anglais est la langue officielle" },
	de: { select: 'Sprache wählen', official: 'Englisch — offizielle Sprache', isOfficial: 'Englisch ist die offizielle Sprache' },
	pt: { select: 'Selecionar idioma', official: 'Inglês — idioma oficial', isOfficial: 'O inglês é o idioma oficial' },
	it: { select: 'Seleziona lingua', official: 'Inglese — lingua ufficiale', isOfficial: "L'inglese è la lingua ufficiale" },
	nl: { select: 'Taal kiezen', official: 'Engels — officiële taal', isOfficial: 'Engels is de officiële taal' },
	pl: { select: 'Wybierz język', official: 'Angielski — język oficjalny', isOfficial: 'Angielski jest językiem oficjalnym' },
	ru: { select: 'Выберите язык', official: 'Английский — официальный язык', isOfficial: 'Английский — официальный язык' },
	tr: { select: 'Dil seçin', official: 'İngilizce — resmi dil', isOfficial: 'İngilizce resmi dildir' },
	ar: { select: 'اختر اللغة', official: 'الإنجليزية — اللغة الرسمية', isOfficial: 'الإنجليزية هي اللغة الرسمية' },
	ja: { select: '言語を選択', official: '英語が公式言語です', isOfficial: '英語が公式言語です' },
	ko: { select: '언어 선택', official: '영어가 공식 언어입니다', isOfficial: '영어가 공식 언어입니다' },
	zh: { select: '选择语言', official: '英语为官方语言', isOfficial: '英语为官方语言' },
	hi: { select: 'भाषा चुनें', official: 'अंग्रेज़ी — आधिकारिक भाषा', isOfficial: 'अंग्रेज़ी आधिकारिक भाषा है' },
	id: { select: 'Pilih bahasa', official: 'Bahasa Inggris — bahasa resmi', isOfficial: 'Bahasa Inggris adalah bahasa resmi' },
	th: { select: 'เลือกภาษา', official: 'อังกฤษ — ภาษาทางการ', isOfficial: 'อังกฤษเป็นภาษาทางการ' },
	vi: { select: 'Chọn ngôn ngữ', official: 'Tiếng Anh — ngôn ngữ chính thức', isOfficial: 'Tiếng Anh là ngôn ngữ chính thức' },
	uk: { select: 'Оберіть мову', official: 'Англійська — офіційна мова', isOfficial: 'Англійська — офіційна мова' },
	cs: { select: 'Vyberte jazyk', official: 'Angličtina — oficiální jazyk', isOfficial: 'Angličtina je oficiální jazyk' },
	ro: { select: 'Selectează limba', official: 'Engleza — limba oficială', isOfficial: 'Engleza este limba oficială' },
	sv: { select: 'Välj språk', official: 'Engelska — officiellt språk', isOfficial: 'Engelska är det officiella språket' },
};

function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function cleanHeroCopy(text) {
	return text
		.replace(/\bradar hack\b/gi, 'wallhack')
		.replace(/\b2D radar\b/gi, 'wallhack')
		.replace(/, radar\b/gi, ', wallhack')
		.replace(/\brandar\b/gi, 'wallhack');
}

function buildForLocale(locale, enBase) {
	const ui = allUiStrings[locale];
	if (!ui) throw new Error(`Missing ui strings: ${locale}`);

	const out = deepClone(enBase);
	const pages = locale === 'en' ? null : buildPagesForLocale(locale);
	const homePage = pages?.home;
	const labels = LANG_LABELS[locale] ?? LANG_LABELS.en;
	const navAria = NAV_ARIA[locale] ?? NAV_ARIA.en;

	// Nav
	Object.assign(out.nav, ui.nav, {
		preview: ui.nav.hacks ?? out.nav.preview,
		store: ui.nav.pricing ?? out.nav.store,
		status: ui.nav.updates ?? out.nav.status,
		reviews: locale === 'en' ? out.nav.reviews : ui.reviews?.countLabel ?? out.nav.reviews,
		...navAria,
	});

	// Hero — brand title stays; subtitle localized
	out.hero = {
		...out.hero,
		accent: ui.hero.accent,
		accentShort: ui.hero.accentShort,
		subtitle: cleanHeroCopy(ui.hero.subtitle),
		subtitleShort: cleanHeroCopy(ui.hero.subtitleShort),
		buyNow: ui.hero.buyNow,
		seeFeatures: ui.hero.seeFeatures,
		title: locale === 'en' ? out.hero.title : 'Palia Cheats',
		chipEsp: 'ESP',
		chipAim: out.hero.chipAim,
		chipRadar: 'Wallhack',
		chipUpdates: out.hero.chipUpdates,
	};

	out.cta = {
		buy: ui.hero.buyNow ?? ui.common.buyNow,
		buyShort: ui.nav.buyNow ?? out.cta.buyShort,
	};

	out.trust = { ...out.trust, ...ui.trust };
	out.product = { ...out.product, ...ui.product };
	out.reviews = {
		...out.reviews,
		...ui.reviews,
		eyebrow: locale === 'en' ? out.reviews.eyebrow : ui.reviews.title,
		homeTitle: locale === 'en' ? out.reviews.homeTitle : ui.reviews.title,
		buyerReviews: locale === 'en' ? out.reviews.buyerReviews : `${ui.reviews.countLabel}`,
		readAll: locale === 'en' ? out.reviews.readAll : `${ui.common.readGuide} →`,
	};
	out.footer = { ...out.footer, ...ui.footer };
	out.images = { ...out.images, ...ui.images };

	out.common = {
		...out.common,
		...ui.common,
		selectLanguage: labels.select,
		englishOfficial: labels.official,
		englishIsOfficial: labels.isOfficial,
		forum: out.common.forum ?? 'Forum',
	};

	if (homePage) {
		out.home = {
			...out.home,
			aboutTitle: homePage.h1,
			aboutP1: homePage.intro,
		};
	}

	out.homeSeo = {
		...out.homeSeo,
		eyebrow: ui.common.relatedPages,
		title: ui.common.relatedPages,
		lede: ui.footer.tagline.split('\n')[0],
		catFeatures: ui.nav.features,
		catFeaturesHint: ui.nav.features,
		catStatus: ui.nav.updates,
		catStatusHint: ui.nav.updates,
		catStore: ui.nav.pricing,
		catStoreHint: ui.nav.pricing,
		catHelp: ui.footer.help,
		catHelpHint: ui.footer.help,
		linkAllFeatures: ui.nav.features,
		linkEsp: ui.nav.esp,
		linkAimbot: ui.nav.aimbot,
		linkSetup: ui.nav.setup,
		linkFaq: ui.nav.faq,
		linkPlans: ui.nav.pricing,
		linkSupport: ui.nav.home,
		linkSetupGuide: ui.nav.setup,
		linkBlog: out.common.forum ?? 'Forum',
		linkRefunds: locale === 'en' ? out.homeSeo.linkRefunds : ui.footer.help,
		linkLiveStatus: ui.nav.updates,
		linkUndetected: ui.nav.hacks,
		linkPaliaCheats: ui.product?.title ?? out.homeSeo.linkPaliaCheats,
		linkReviews: ui.reviews.countLabel,
	};

	out.common = {
		...out.common,
		share: locale === 'en' ? out.common.share : ui.footer.explore,
		featureList: ui.nav.features,
		pricingPlans: ui.nav.pricing,
		buyerReviewsNav: ui.reviews.countLabel,
		support: locale === 'en' ? out.common.support : 'Support',
		privacy: out.common.privacy,
		terms: out.common.terms,
	};

	out.deals = {
		...out.deals,
		pricing: ui.nav.pricing,
		featEsp: out.deals.featEsp,
	};

	return out;
}

async function main() {
	const enBase = JSON.parse(await readFile(EN_PATH, 'utf8'));

	for (const locale of LOCALES) {
		const data = locale === 'en' ? deepClone(enBase) : buildForLocale(locale, enBase);
		if (locale === 'en') {
			const storeLabel = data.nav.store;
			data.nav.pricing = storeLabel;
			data.common.pricingPlans = storeLabel;
			data.deals.pricing = storeLabel;
			data.homeSeo.catStore = storeLabel;
		}
		const dir = path.join(ROOT, 'public', 'locales', locale);
		await mkdir(dir, { recursive: true });
		await writeFile(path.join(dir, 'translation.json'), `${JSON.stringify(data, null, 2)}\n`, 'utf8');
		console.log(`Wrote public/locales/${locale}/translation.json`);
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
