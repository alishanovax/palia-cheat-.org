export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Palia Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const forumUi: Record<
	LocaleCode,
	{
		forumTitle: string;
		forumDescription: string;
		forumH1: string;
		forumIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		forumTitle: 'Palia Forum | Setup Guides & Community',
		forumDescription:
			'Palia cheats forum — setup guides, aimbot settings, fishing ESP tips, and buyer discussions at paliacheats.org/forum/.',
		forumH1: 'Palia Cheats Forum',
		forumIntro:
			'Community guides for Palia cheats — setup instructions, aimbot settings, fishing ESP, and buyer discussions. Sign up to post and access all threads.',
		readMore: 'Read thread',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related forum threads',
		allPosts: 'All forum threads',
		home: 'Palia Cheats home',
		language: 'Language',
	},
	es: {
		forumTitle: 'Blog Palia Cheats 2026 | Guías en 22 idiomas',
		forumDescription:
			'Blog de Palia Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Palia en PC Windows.',
		forumH1: 'Blog Palia Cheats — Guías globales',
		forumIntro:
			'Guías SEO de trucos Palia indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Palia relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Palia Cheats',
		language: 'Idioma',
	},
	fr: {
		forumTitle: 'Blog Palia Cheats 2026 | Guides en 22 langues',
		forumDescription:
			'Blog Palia Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Palia sur PC Windows.',
		forumH1: 'Blog Palia Cheats — Guides mondiaux',
		forumIntro:
			'Guides SEO triches Palia indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Palia associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Palia Cheats',
		language: 'Langue',
	},
	de: {
		forumTitle: 'Palia Cheats Blog 2026 | Guides in 22 Sprachen',
		forumDescription:
			'Palia Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Palia auf Windows PC.',
		forumH1: 'Palia Cheats Blog — Globale Guides',
		forumIntro:
			'SEO-Guides für undetected Palia Cheats, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Palia Guides',
		allPosts: 'Alle Beiträge',
		home: 'Palia Cheats Start',
		language: 'Sprache',
	},
	pt: {
		forumTitle: 'Blog Palia Cheats 2026 | Guias em 22 idiomas',
		forumDescription:
			'Blog Palia Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Palia no PC.',
		forumH1: 'Blog Palia Cheats — Guias globais',
		forumIntro:
			'Guias SEO de cheats Palia indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Palia relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Palia Cheats',
		language: 'Idioma',
	},
	it: {
		forumTitle: 'Blog Palia Cheats 2026 | Guide in 22 lingue',
		forumDescription:
			'Blog Palia Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Palia su PC Windows.',
		forumH1: 'Blog Palia Cheats — Guide globali',
		forumIntro:
			'Guide SEO cheat Palia indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Palia correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Palia Cheats',
		language: 'Lingua',
	},
	nl: {
		forumTitle: 'Palia Cheats Blog 2026 | Gidsen in 22 talen',
		forumDescription:
			'Palia Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Palia op Windows PC.',
		forumH1: 'Palia Cheats Blog — Wereldwijde gidsen',
		forumIntro:
			'SEO-gidsen voor undetected Palia cheats, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Palia gidsen',
		allPosts: 'Alle posts',
		home: 'Palia Cheats home',
		language: 'Taal',
	},
	pl: {
		forumTitle: 'Blog Palia Cheats 2026 | Poradniki w 22 językach',
		forumDescription:
			'Blog Palia Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Palia na PC.',
		forumH1: 'Blog Palia Cheats — Globalne poradniki',
		forumIntro:
			'Poradniki SEO undetected cheatów Palia, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Palia',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Palia Cheats',
		language: 'Język',
	},
	ru: {
		forumTitle: 'Блог Palia Cheats 2026 | Гайды на 22 языках',
		forumDescription:
			'Блог Palia Cheats: undetected ESP, wallhack, radar и Aimbot для Palia на Windows PC.',
		forumH1: 'Блог Palia Cheats — Глобальные гайды',
		forumIntro:
			'SEO-гайды по undetected читам Palia, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Palia',
		allPosts: 'Все статьи',
		home: 'Главная Palia Cheats',
		language: 'Язык',
	},
	tr: {
		forumTitle: 'Palia Cheats Blog 2026 | 22 dilde rehberler',
		forumDescription:
			'Palia Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Palia Windows PC.',
		forumH1: 'Palia Cheats Blog — Küresel rehberler',
		forumIntro:
			'Undetected Palia hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Palia rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Palia Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		forumTitle: 'مدونة Palia Cheats 2026 | أدلة بـ 22 لغة',
		forumDescription:
			'مدونة Palia Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Palia على Windows PC.',
		forumH1: 'مدونة Palia Cheats — أدلة عالمية',
		forumIntro:
			'أدلة SEO لغش Palia undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Palia ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Palia Cheats',
		language: 'اللغة',
	},
	ja: {
		forumTitle: 'Palia Cheats ブログ 2026 | 22言語ガイド',
		forumDescription:
			'Palia Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Palia Windows PC向け。',
		forumH1: 'Palia Cheats ブログ — グローバルガイド',
		forumIntro:
			'undetected Paliaチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Paliaガイド',
		allPosts: 'すべての記事',
		home: 'Palia Cheats ホーム',
		language: '言語',
	},
	ko: {
		forumTitle: 'Palia Cheats 블로그 2026 | 22개 언어 가이드',
		forumDescription:
			'Palia Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Palia Windows PC.',
		forumH1: 'Palia Cheats 블로그 — 글로벌 가이드',
		forumIntro:
			'undetected Palia 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Palia 가이드',
		allPosts: '모든 게시물',
		home: 'Palia Cheats 홈',
		language: '언어',
	},
	zh: {
		forumTitle: 'Palia Cheats 博客 2026 | 22种语言指南',
		forumDescription:
			'Palia Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Palia Windows PC。',
		forumH1: 'Palia Cheats 博客 — 全球指南',
		forumIntro:
			'undetected Palia作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Palia指南',
		allPosts: '所有文章',
		home: 'Palia Cheats 首页',
		language: '语言',
	},
	hi: {
		forumTitle: 'Palia Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		forumDescription:
			'Palia Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Palia Windows PC के लिए।',
		forumH1: 'Palia Cheats ब्लॉग — वैश्विक गाइड',
		forumIntro:
			'undetected Palia cheats, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Palia गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Palia Cheats होम',
		language: 'भाषा',
	},
	id: {
		forumTitle: 'Blog Palia Cheats 2026 | Panduan 22 bahasa',
		forumDescription:
			'Blog Palia Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Palia di PC Windows.',
		forumH1: 'Blog Palia Cheats — Panduan global',
		forumIntro:
			'Panduan SEO cheat Palia undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Palia terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Palia Cheats',
		language: 'Bahasa',
	},
	th: {
		forumTitle: 'บล็อก Palia Cheats 2026 | คู่มือ 22 ภาษา',
		forumDescription:
			'บล็อก Palia Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Palia บน PC',
		forumH1: 'บล็อก Palia Cheats — คู่มือทั่วโลก',
		forumIntro:
			'คู่มือ SEO สำหรับ cheat Palia undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Palia ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Palia Cheats',
		language: 'ภาษา',
	},
	vi: {
		forumTitle: 'Blog Palia Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		forumDescription:
			'Blog Palia Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Palia trên PC.',
		forumH1: 'Blog Palia Cheats — Hướng dẫn toàn cầu',
		forumIntro:
			'Hướng dẫn SEO cheat Palia undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Palia liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Palia Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		forumTitle: 'Блог Palia Cheats 2026 | Гайди 22 мовами',
		forumDescription:
			'Блог Palia Cheats: undetected ESP, wallhack, radar та Aimbot для Palia на Windows PC.',
		forumH1: 'Блог Palia Cheats — Глобальні гайди',
		forumIntro:
			'SEO-гайди з undetected читів Palia, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Palia",
		allPosts: 'Усі статті',
		home: 'Головна Palia Cheats',
		language: 'Мова',
	},
	cs: {
		forumTitle: 'Blog Palia Cheats 2026 | Průvodce ve 22 jazycích',
		forumDescription:
			'Blog Palia Cheats: undetected ESP, wallhack, radar a Aimbot pro Palia na Windows PC.',
		forumH1: 'Blog Palia Cheats — Globální průvodce',
		forumIntro:
			'SEO průvodce undetected Palia cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Palia průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Palia Cheats',
		language: 'Jazyk',
	},
	ro: {
		forumTitle: 'Blog Palia Cheats 2026 | Ghiduri în 22 de limbi',
		forumDescription:
			'Blog Palia Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Palia pe PC.',
		forumH1: 'Blog Palia Cheats — Ghiduri globale',
		forumIntro:
			'Ghiduri SEO cheat-uri Palia undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Palia related',
		allPosts: 'Toate articolele',
		home: 'Acasă Palia Cheats',
		language: 'Limbă',
	},
	sv: {
		forumTitle: 'Palia Cheats Blogg 2026 | Guider på 22 språk',
		forumDescription:
			'Palia Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Palia på PC.',
		forumH1: 'Palia Cheats Blogg — Globala guider',
		forumIntro:
			'SEO-guider för undetected Palia cheats, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Palia guider',
		allPosts: 'Alla inlägg',
		home: 'Palia Cheats hem',
		language: 'Språk',
	},
};
