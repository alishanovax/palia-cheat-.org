import { HERO_IMAGES, clampTitle, clampDesc, section, stripcheckoutFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Palia Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Palia indetectables para Palia en PC. ESP wallhack, wallhack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Palia Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Palia en Windows PC: ESP wallhack, wallhack y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galería Palia Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Palia Cheats en 2026', h2b: 'ESP wallhack, wallhack y Aimbot en una licencia', topicA: 'Ideal para leer recursos raros en Kilima y Bahari Bay.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Palia Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Palia indétectables pour Palia sur PC. ESP wallhack, wallhack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Palia Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Palia sur PC Windows : ESP wallhack, wallhack et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galerie Palia Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Palia Cheats en 2026', h2b: 'ESP wallhack, wallhack et Aimbot en une licence', topicA: 'Parfait pour lire les ressources rares en Kilima et Bahari Bay.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Palia Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Palia Cheats für Palia auf PC. ESP Wallhack, wallhack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Palia Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Palia: ESP wallhack, wallhack und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Palia ESP player tags hack', gallery: 'Palia Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Palia Cheats 2026 führt', h2b: 'ESP wallhack, wallhack und Aimbot in einer Lizenz', topicA: 'Ideal um seltene Ressourcen in Kilima und Bahari Bay zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Palia Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Palia indetectáveis para Palia no PC. ESP wallhack, wallhack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Palia Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Palia no Windows PC: ESP wallhack, wallhack e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galeria Palia Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Palia Cheats em 2026', h2b: 'ESP wallhack, wallhack e Aimbot numa licença', topicA: 'Ideal para ler recursos raros em Kilima e Bahari Bay.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Palia Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Palia indetectable per Palia su PC. ESP wallhack, wallhack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Palia Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Palia su PC Windows: ESP wallhack, wallhack e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galleria Palia Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Palia Cheats nel 2026', h2b: 'ESP wallhack, wallhack e Aimbot in una licenza', topicA: 'Ideale per leggere risorse rare in Kilima e Bahari Bay.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Palia Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Palia cheats voor Palia op PC. ESP wallhack, wallhack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Palia Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Palia: ESP wallhack, wallhack en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Palia ESP player tags hack', gallery: 'Palia Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Palia Cheats in 2026', h2b: 'ESP wallhack, wallhack en Aimbot in één licentie', topicA: 'Ideaal om zeldzame resources te lezen in Kilima en Bahari Bay.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Palia Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Palia dla Palia na PC. ESP wallhack, wallhack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Palia Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Palia na Windows PC: ESP wallhack, wallhack i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galeria Palia Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Palia Cheats w 2026', h2b: 'ESP wallhack, wallhack i Aimbot w jednej licencji', topicA: 'Idealny do czytania rzadkie surowce w Kilima i Bahari Bay.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Palia Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Palia для Palia на PC. ESP wallhack, wallhack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Palia Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Palia на Windows PC: ESP wallhack, wallhack и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Palia ESP player tags hack', gallery: 'Галерея Palia Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Palia Cheats в 2026', h2b: 'ESP wallhack, wallhack и Aimbot в одной лицензии', topicA: 'Идеально для чтения редких ресурсов в Kilima и Bahari Bay.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Palia Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Palia için undetected hileler. ESP wallhack, wallhack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Palia Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Palia Windows PC undetected paketi: ESP wallhack, wallhack ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Palia ESP player tags hack', gallery: 'Palia Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Palia Cheats', h2b: 'ESP wallhack, wallhack ve Aimbot tek lisans', topicA: 'Kilima ve Bahari Bay\'da nadir kaynaklar okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Palia Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Palia undetected لـ Palia على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Palia Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Palia على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'Palia ESP player tags hack', gallery: 'معرض Palia Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Palia Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة موارد نادرة في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Palia Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Palia向けundetectedチート。ESP wallhack、wallhack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Palia Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Palia Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Palia cheats hero ESP aimbot wallhack', gallery: 'Palia Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にPalia Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'KilimaとBahari Bayでレア資源を読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Palia Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Palia undetected 치트. ESP wallhack, wallhack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Palia Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Palia Windows PC undetected 패키지: ESP wallhack, wallhack, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Palia cheats hero ESP aimbot wallhack', gallery: 'Palia Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Palia Cheats를 선택하는 이유', h2b: 'ESP wallhack, wallhack, Aimbot 단일 라이선스', topicA: 'Kilima 및 Bahari Bay에서 희귀 자원 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Palia Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Palia undetected作弊。ESP wallhack、wallhack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Palia Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Palia Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'Palia cheats hero ESP aimbot wallhack', gallery: 'Palia Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Palia Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在Kilima和Bahari Bay中读取稀有资源。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Palia Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Palia undetected cheats. ESP wallhack, wallhack, Aimbot, EAC maintenance. Instant digital delivery.', h1: 'Palia Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Palia Windows PC undetected पैकेज: ESP wallhack, wallhack, Aimbot, EAC maintenance सहित.', imageAlt: 'Palia cheats hero ESP aimbot wallhack', gallery: 'Palia Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Palia Cheats क्यों', h2b: 'ESP wallhack, wallhack, Aimbot एक लाइसेंस में', topicA: 'Kilima और Bahari Bay में दुर्लभ संसाधन पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Palia Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Palia undetected untuk Palia di PC. ESP wallhack, wallhack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Palia Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Palia di Windows PC: ESP wallhack, wallhack, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galeri Palia Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Palia Cheats di 2026', h2b: 'ESP wallhack, wallhack, Aimbot dalam satu lisensi', topicA: 'Ideal membaca sumber daya langka di Kilima dan Bahari Bay.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Palia Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Palia undetected สำหรับ Palia บน PC. ESP wallhack, wallhack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'Palia Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Palia บน Windows PC: ESP wallhack, wallhack, Aimbot พร้อม EAC maintenance', imageAlt: 'Palia ESP player tags hack', gallery: 'แกลเลอรี Palia Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Palia Cheats ปี 2026', h2b: 'ESP wallhack, wallhack, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน ทรัพยากรหายากใน Kilima และ Bahari Bay', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Palia Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Palia undetected cho Palia trên PC. ESP wallhack, wallhack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Palia Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Palia trên Windows PC: ESP wallhack, wallhack, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'Palia ESP player tags hack', gallery: 'Thư viện Palia Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Palia Cheats 2026', h2b: 'ESP wallhack, wallhack, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc tài nguyên hiếm trong Kilima và Bahari Bay.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Palia Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Palia для Palia на PC. ESP wallhack, wallhack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Palia Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Palia на Windows PC: ESP wallhack, wallhack, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Palia ESP player tags hack', gallery: 'Галерея Palia Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Palia Cheats у 2026', h2b: 'ESP wallhack, wallhack і Aimbot в одній ліцензії', topicA: 'Ідеально для читання рідкісних ресурсів у Kilima і Bahari Bay.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Palia Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Palia cheaty pro Palia na PC. ESP wallhack, wallhack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Palia Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Palia na Windows PC: ESP wallhack, wallhack, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galerie Palia Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Palia Cheats v roce 2026', h2b: 'ESP wallhack, wallhack a Aimbot v jedné licenci', topicA: 'Ideální pro čtení vzácných surovin v Kilima a Bahari Bay.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Palia Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Palia undetected pentru Palia pe PC. ESP wallhack, wallhack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Palia Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Palia pe Windows PC: ESP wallhack, wallhack, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'Palia ESP player tags hack', gallery: 'Galerie Palia Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Palia Cheats în 2026', h2b: 'ESP wallhack, wallhack și Aimbot într-o licență', topicA: 'Ideal pentru citirea resurse rare în Kilima și Bahari Bay.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Palia Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Palia cheats för Palia på PC. ESP wallhack, wallhack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Palia Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Palia på Windows PC: ESP wallhack, wallhack, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'Palia ESP player tags hack', gallery: 'Palia Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Palia Cheats 2026', h2b: 'ESP wallhack, wallhack och Aimbot i en licens', topicA: 'Ideal för att läsa sällsynta resurser i Kilima och Bahari Bay.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripcheckoutFromMeta(m.title)),
		description: clampDesc(stripcheckoutFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/**
 * Unique search intent per page — intro + section topics (no shared boilerplate).
 * Each page targets a different Google query.
 */
const PAGE_INTENT = {
	'palia-esp': {
		suffix: 'Resource ESP',
		intro: 'Palia ESP for ores, fish, insects, and forage nodes in Kilima and Bahari Bay.',
		sections: [
			['What resource ESP shows', 'Ore pins, fishing spots, bug markers, and distance readouts through walls.'],
			['Farming routes', 'Filter by resource type to farm gold and skills faster without missing rare nodes.'],
			['Included in one license', 'Resource ESP ships with wallhack, fishing tools, and teleport in palia cheats.'],
		],
	},
	'palia-aimbot': {
		suffix: 'Hunting & Fishing Aim',
		intro: 'Palia aimbot and soft aim for hunting wildlife and fishing minigames on Windows PC.',
		sections: [
			['Soft aim controls', 'Tune strength, smoothness, and hotkeys before you hunt or fish.'],
			['Per-tool profiles', 'Save separate settings for bows, rods, and hunting tools.'],
			['Works with ESP', 'Pair aimbot with resource ESP and wallhack in one palia cheats license.'],
		],
	},
	features: {
		suffix: 'Full Feature List',
		intro: 'Every palia cheats feature in one license — ESP, wallhack, fishing, teleport, and automation.',
		sections: [
			['ESP & wallhack', 'See resources through walls with filters for Kilima Village and Bahari Bay.'],
			['Fishing & hunting', 'Fishing ESP, hunting soft aim, and cheat menu hotkeys mid-session.'],
			['Teleport & automation', 'Bookmark coordinates and automate repetitive skill grinds.'],
		],
	},
	pricing: {
		suffix: 'Monthly & Lifetime',
		intro: 'Palia cheats price — $35 monthly or $150 lifetime with instant license delivery.',
		sections: [
			['What you pay for', 'Full ESP, wallhack, fishing tools, and cheat menu on every plan.'],
			['Pick a plan', 'Try monthly first or buy lifetime for one payment — same features either way.'],
			['After checkout', 'License arrives by email. Follow setup, then check status after patches.'],
		],
	},
	setup: {
		suffix: 'PC Install Guide',
		intro: 'Install palia cheats on Windows PC — download loader, paste license, open cheat menu.',
		sections: [
			['Before install', 'Windows 10 or 11, disable conflicting overlays, keep order email ready.'],
			['Install steps', 'Run loader as admin, paste license key, launch Palia, open cheat menu.'],
			['If setup fails', 'Check status after patches. Email support with your order ID.'],
		],
	},
	updates: {
		suffix: 'Undetected Status',
		intro: 'Palia cheats undetected status after game or Easy Anti-Cheat patches — check before you play.',
		sections: [
			['Current build', 'We post a note here when a patch needs a rebuild. Wait if status is yellow.'],
			['After a patch', 'Read the latest note, update the loader, then launch Palia.'],
			['No permanent guarantee', 'No cheat stays undetected forever. Status first, then play.'],
		],
	},
	faq: {
		suffix: 'Common Questions',
		intro: 'Answers about buying palia cheats — delivery, setup, ESP, wallhack, and refunds.',
		sections: [
			['Buying & delivery', 'Digital license by email after payment. Keep your order confirmation.'],
			['Setup & patches', 'Follow setup after purchase. Check status after big game or EAC updates.'],
			['Refunds & support', 'Read refund policy before checkout. Email support with order ID.'],
		],
	},
	support: {
		suffix: 'Help & Contact',
		intro: 'Palia cheats support for setup, delivery, and billing — email with your order ID.',
		sections: [
			['Contact us', 'Email support@paliacheats.org with order ID, Windows version, and issue details.'],
			['Faster help', 'Check FAQ and status before you write — many answers are already there.'],
			['License issues', 'Include receipt, what you tried, and any error text from the loader.'],
		],
	},
	undetected: {
		suffix: 'EAC Safe Status',
		intro: 'Undetected palia cheats with Easy Anti-Cheat maintenance — how we rebuild after patches.',
		sections: [
			['What undetected means', 'Active maintenance after EAC updates — not a permanent safety promise.'],
			['Rebuild workflow', 'We test ESP, wallhack, and fishing modules, then post status notes.'],
			['Before you play', 'Check status after patch days. Use conservative cheat menu settings.'],
		],
	},
	wallhack: {
		suffix: 'See Through Walls',
		intro: 'Palia wallhack — see ores, fish, and insects through walls in Kilima and Bahari Bay.',
		sections: [
			['Wallhack overlays', 'Resource outlines with adjustable range and opacity filters.'],
			['With resource ESP', 'Wallhack shows hidden nodes; ESP adds distance and type labels.'],
			['One license', 'Wallhack is bundled with fishing tools and teleport in palia cheats.'],
		],
	},
	radar: {
		suffix: 'Teleport Tools',
		intro: 'Palia teleport bookmarks — save spots and jump between Kilima Village and Bahari Bay.',
		sections: [
			['Save coordinates', 'Bookmark fishing holes, ore clusters, and housing plots mid-session.'],
			['Skip long walks', 'Recall saved spots from the cheat menu to farm faster.'],
			['With wallhack', 'Teleport pairs with wallhack and resource ESP in one license.'],
		],
	},
	eac: {
		suffix: 'EAC Bypass Guide',
		intro: 'EAC bypass for palia cheats — what happens when Easy Anti-Cheat patches Palia.',
		sections: [
			['How EAC affects cheats', 'Security updates can break ESP and fishing modules until we rebuild.'],
			['Our maintenance process', 'Test new builds, publish status notes, ship updates to active licenses.'],
			['Patch day rules', 'Do not play on an old build after a major EAC or game update.'],
		],
	},
	'cheats-2026': {
		suffix: '2026 Buyer Guide',
		intro: 'Palia cheats 2026 — what to look for before you buy on Windows PC.',
		sections: [
			['2026 checklist', 'Active EAC maintenance, full ESP stack, fishing tools, and clear status updates.'],
			['What is included', 'Resource ESP, wallhack, teleport, hunting aimbot, and cheat menu toggles.'],
			['Before checkout', 'Compare pricing, read setup, and bookmark the status page.'],
		],
	},
	hacks: {
		suffix: 'Buy Palia Cheats',
		intro: 'Buy palia cheats — premium cheat menu with ESP, fishing tools, and teleport from $35.',
		sections: [
			['Cheat menu overview', 'One Windows PC license for cozy MMO farming and multiplayer sessions.'],
			['Core tools', 'Resource ESP, wallhack, fishing ESP, teleport, and skill automation.'],
			['Get started', 'Pick a plan, get license by email, follow setup, check status after patches.'],
		],
	},
	'cheat-download': {
		suffix: 'Instant Download',
		intro: 'Palia cheats download — instant digital license after checkout on Windows PC.',
		sections: [
			['How delivery works', 'License details arrive by email after payment confirms.'],
			['What you unlock', 'Loader access, cheat menu, ESP, wallhack, fishing tools, and teleport.'],
			['First launch', 'Follow setup guide. Check status if the game patched recently.'],
		],
	},
	'mod-menu': {
		suffix: 'Cheat Menu',
		intro: 'Palia cheat menu — toggle ESP, wallhack, fishing tools, and teleport in-game.',
		sections: [
			['Menu controls', 'Hotkeys for ESP categories, wallhack range, and fishing assist mid-session.'],
			['Reduce clutter', 'Turn off overlays you do not need while farming or fishing.'],
			['After patches', 'Menu modules rebuild when EAC updates — check status before play.'],
		],
	},
	'soft-aim': {
		suffix: 'Soft Aim Settings',
		intro: 'Palia soft aim — smooth hunting and fishing assist you can tune to feel natural.',
		sections: [
			['Smooth tracking', 'Adjust strength and smoothness so assist looks subtle in longer sessions.'],
			['Fishing & hunting', 'Separate profiles for rods, bows, and hunting tools.'],
			['Included with cheats', 'Soft aim ships with ESP and wallhack in one palia cheats license.'],
		],
	},
	'best-cheats': {
		suffix: 'Best Provider Guide',
		intro: 'Best palia cheats — compare maintenance, features, and price before you buy.',
		sections: [
			['What makes the best', 'Live EAC rebuilds, full feature stack, and honest status updates.'],
			['Feature checklist', 'Resource ESP, wallhack, fishing tools, teleport, and cheat menu hotkeys.'],
			['Buy safely', 'Use secure checkout, read refund policy, keep your order email.'],
		],
	},
	'aimbot-hack': {
		suffix: 'Aimbot Hack',
		intro: 'Palia aimbot hack for hunting and fishing — soft aim with hotkeys on Windows PC.',
		sections: [
			['Aimbot vs ESP', 'Aimbot assists catches; ESP and wallhack show where resources are.'],
			['Hack controls', 'FOV, bone priority, and per-tool profiles from the cheat menu.'],
			['Maintenance', 'Aimbot modules rebuild after EAC patches — check status first.'],
		],
	},
	'esp-hack': {
		suffix: 'ESP Hack',
		intro: 'Palia ESP hack — resource boxes, fishing markers, and distance readouts on PC.',
		sections: [
			['ESP hack overlays', 'Ores, fish, insects, and forage nodes through walls with snaplines.'],
			['Farm faster', 'Filter markers for Kilima Village ore routes and Bahari Bay fishing holes.'],
			['Full package', 'ESP hack is part of palia cheats — wallhack and teleport included.'],
		],
	},
	'unlock-all': {
		suffix: 'Unlock All Explained',
		intro: 'Palia unlock all — what the search means vs real ESP, fishing, and cheat menu tools.',
		sections: [
			['Unlock-all myths', 'Searches often mean free skins or items — not the same as ESP or fishing tools.'],
			['What we provide', 'Resource ESP, wallhack, fishing assist, and teleport — not cosmetic unlocks.'],
			['Buy the right tool', 'Compare features and pricing if you need farming cheats, not skin hacks.'],
		],
	},
};

/** @deprecated use PAGE_INTENT */
const PAGE_META_TAILS = Object.fromEntries(
	Object.entries(PAGE_INTENT).map(([k, v]) => [k, { suffix: v.suffix, focus: v.sections[0][1], altKeyword: v.intro.slice(0, 40) }]),
);

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'palia-esp': 'Cajas de jugador y wallhack',
		'palia-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Wallhack y teleporte',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'palia-esp': 'Boîtes joueur et wallhack',
		'palia-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Wallhack et téléport',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'palia-esp': 'Spielerboxen & Wallhack',
		'palia-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: 'Wallhack & Teleport',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'palia-esp': 'Caixas de jogador e wallhack',
		'palia-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Wallhack e teleporte',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'palia-esp': 'Box giocatore e wallhack',
		'palia-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Wallhack e teleport',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'palia-esp': 'Боксы игроков и wallhack',
		'palia-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: 'Wallhack и телепорт',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const intent = PAGE_INTENT[pageKey] ?? {
		suffix: 'Palia Cheats',
		intro: 'Palia cheats for Windows PC.',
		sections: [['Overview', 'ESP, wallhack, fishing tools, and teleport in one license.']],
	};
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? intent.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripcheckoutFromMeta(titleBase)),
		description: clampDesc(stripcheckoutFromMeta(`${intent.intro} ${p.delivery}. ${p.win}.`)),
		h1: topicName,
		intro: intent.intro,
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Palia Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: intent.sections.map(([h2, body]) =>
			section(h2, body, `${p.delivery} on ${p.win}. Check Updates after Easy Anti-Cheat patches.`),
		),
	};
}

const TOPIC_NAMES = {
	'palia-esp': { en: 'Palia ESP', es: 'ESP Palia', fr: 'ESP Palia', de: 'Palia ESP', pt: 'ESP Palia', it: 'ESP Palia', nl: 'Palia ESP', pl: 'ESP Palia', ru: 'ESP Palia', tr: 'Palia ESP', ar: 'ESP Palia', ja: 'Palia ESP', ko: 'Palia ESP', zh: 'Palia ESP', hi: 'Palia ESP', id: 'ESP Palia', th: 'Palia ESP', vi: 'ESP Palia', uk: 'ESP Palia', cs: 'Palia ESP', ro: 'ESP Palia', sv: 'Palia ESP' },
	'palia-aimbot': { en: 'Palia Aimbot', es: 'Aimbot Palia', fr: 'Aimbot Palia', de: 'Palia Aimbot', pt: 'Aimbot Palia', it: 'Aimbot Palia', nl: 'Palia Aimbot', pl: 'Aimbot Palia', ru: 'Aimbot Palia', tr: 'Palia Aimbot', ar: 'Aimbot Palia', ja: 'Palia Aimbot', ko: 'Palia Aimbot', zh: 'Palia Aimbot', hi: 'Palia Aimbot', id: 'Aimbot Palia', th: 'Palia Aimbot', vi: 'Aimbot Palia', uk: 'Aimbot Palia', cs: 'Palia Aimbot', ro: 'Aimbot Palia', sv: 'Palia Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Palia Wallhack', es: 'Wallhack Palia', fr: 'Wallhack Palia', de: 'Palia Wallhack', pt: 'Wallhack Palia', it: 'Wallhack Palia', nl: 'Palia Wallhack', pl: 'Wallhack Palia', ru: 'Wallhack Palia', tr: 'Palia Wallhack', ar: 'Wallhack Palia', ja: 'Palia Wallhack', ko: 'Palia Wallhack', zh: 'Palia Wallhack', hi: 'Palia Wallhack', id: 'Wallhack Palia', th: 'Palia Wallhack', vi: 'Wallhack Palia', uk: 'Wallhack Palia', cs: 'Palia Wallhack', ro: 'Wallhack Palia', sv: 'Palia Wallhack' },
	radar: { en: 'wallhack', es: 'wallhack', fr: 'wallhack', de: 'wallhack', pt: 'wallhack', it: 'wallhack', nl: 'wallhack', pl: 'wallhack', ru: 'wallhack', tr: 'wallhack', ar: 'wallhack', ja: 'wallhack', ko: 'wallhack', zh: 'wallhack', hi: 'wallhack', id: 'wallhack', th: 'wallhack', vi: 'wallhack', uk: 'wallhack', cs: 'wallhack', ro: 'wallhack', sv: 'wallhack' },
	eac: { en: 'EAC Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'EAC Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'EAC Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'EAC bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Easy Anti-Cheat', th: 'EAC Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'EAC Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'Palia Cheats 2026', es: 'Trucos Palia 2026', fr: 'Triches Palia 2026', de: 'Palia Cheats 2026', pt: 'Cheats Palia 2026', it: 'Cheat Palia 2026', nl: 'Palia Cheats 2026', pl: 'Cheaty Palia 2026', ru: 'Читы Palia 2026', tr: 'Palia Hileleri 2026', ar: 'غش Palia 2026', ja: 'Palia Cheats 2026', ko: 'Palia Cheats 2026', zh: 'Palia作弊 2026', hi: 'Palia Cheats 2026', id: 'Cheat Palia 2026', th: 'Palia Cheats 2026', vi: 'Cheat Palia 2026', uk: 'Чіти Palia 2026', cs: 'Palia cheaty 2026', ro: 'Cheats Palia 2026', sv: 'Palia Cheats 2026' },
	hacks: { en: 'Palia Cheats', es: 'Trucos Palia', fr: 'Triches Palia', de: 'Palia Cheats', pt: 'Cheats Palia', it: 'Cheat Palia', nl: 'Palia Cheats', pl: 'Cheaty Palia', ru: 'Читы Palia', tr: 'Palia Hileleri', ar: 'غش Palia', ja: 'Palia Cheats', ko: 'Palia Cheats', zh: 'Palia作弊', hi: 'Palia Cheats', id: 'Cheat Palia', th: 'Palia Cheats', vi: 'Cheat Palia', uk: 'Чіти Palia', cs: 'Palia cheaty', ro: 'Cheats Palia', sv: 'Palia Cheats' },
	'cheat-download': { en: 'Palia Cheat Download', es: 'Descarga Palia Cheats', fr: 'Téléchargement Palia Cheats', de: 'Palia Cheat Download', pt: 'Download Palia Cheats', it: 'Download Palia Cheats', nl: 'Palia Cheat Download', pl: 'Pobieranie Palia Cheats', ru: 'Скачать Palia Cheats', tr: 'Palia Hile İndir', ar: 'تحميل Palia Cheats', ja: 'Palia Cheat Download', ko: 'Palia Cheat Download', zh: 'Palia作弊下载', hi: 'Palia Cheat Download', id: 'Download Cheat Palia', th: 'ดาวน์โหลด Palia Cheats', vi: 'Tải Cheat Palia', uk: 'Завантаження Palia Cheats', cs: 'Stáhnout Palia Cheats', ro: 'Descărcare Palia Cheats', sv: 'Palia Cheat Download' },
	'mod-menu': { en: 'Palia Mod Menu', es: 'Menú mod Palia', fr: 'Menu mod Palia', de: 'Palia Mod-Menü', pt: 'Menu mod Palia', it: 'Mod menu Palia', nl: 'Palia Mod Menu', pl: 'Mod menu Palia', ru: 'Мод-меню Palia', tr: 'Palia Mod Menü', ar: 'قائمة مود Palia', ja: 'Palia Mod Menu', ko: 'Palia 모드 메뉴', zh: 'Palia修改菜单', hi: 'Palia Mod Menu', id: 'Menu mod Palia', th: 'เมนูมอด Palia', vi: 'Mod menu Palia', uk: 'Мод-меню Palia', cs: 'Palia mod menu', ro: 'Meniu mod Palia', sv: 'Palia Mod-meny' },
	'soft-aim': { en: 'Palia Soft Aim', es: 'Soft aim Palia', fr: 'Soft aim Palia', de: 'Palia Soft Aim', pt: 'Soft aim Palia', it: 'Soft aim Palia', nl: 'Palia Soft Aim', pl: 'Soft aim Palia', ru: 'Soft aim Palia', tr: 'Palia Soft Aim', ar: 'Soft aim Palia', ja: 'Palia Soft Aim', ko: 'Palia Soft Aim', zh: 'Palia Soft Aim', hi: 'Palia Soft Aim', id: 'Soft aim Palia', th: 'Palia Soft Aim', vi: 'Soft aim Palia', uk: 'Soft aim Palia', cs: 'Palia Soft Aim', ro: 'Soft aim Palia', sv: 'Palia Soft Aim' },
	'best-cheats': { en: 'Best Palia Cheats', es: 'Mejores trucos Palia', fr: 'Meilleures triches Palia', de: 'Beste Palia Cheats', pt: 'Melhores cheats Palia', it: 'Migliori cheat Palia', nl: 'Beste Palia Cheats', pl: 'Najlepsze cheaty Palia', ru: 'Лучшие читы Palia', tr: 'En İyi Palia Hileleri', ar: 'أفضل غش Palia', ja: '最強Paliaチート', ko: '최고의 Palia 치트', zh: '最佳Palia作弊', hi: 'सर्वश्रेष्ठ Palia Cheats', id: 'Cheat Palia terbaik', th: 'Cheat Palia ที่ดีที่สุด', vi: 'Cheat Palia tốt nhất', uk: 'Найкращі чіти Palia', cs: 'Nejlepší Palia cheaty', ro: 'Cele mai bune cheats Palia', sv: 'Bästa Palia Cheats' },
	'aimbot-hack': { en: 'Palia Aimbot Hack', es: 'Hack aimbot Palia', fr: 'Hack aimbot Palia', de: 'Palia Aimbot Hack', pt: 'Hack aimbot Palia', it: 'Hack aimbot Palia', nl: 'Palia Aimbot Hack', pl: 'Hack aimbot Palia', ru: 'Хак aimbot Palia', tr: 'Palia Aimbot Hilesi', ar: 'هاك Aimbot Palia', ja: 'Palia Aimbot Hack', ko: 'Palia 에임봇 핵', zh: 'Palia自瞄外挂', hi: 'Palia Aimbot Hack', id: 'Hack aimbot Palia', th: 'Hack Aimbot Palia', vi: 'Hack aimbot Palia', uk: 'Хак aimbot Palia', cs: 'Palia aimbot hack', ro: 'Hack aimbot Palia', sv: 'Palia Aimbot Hack' },
	'esp-hack': { en: 'Palia ESP Hack', es: 'Hack ESP Palia', fr: 'Hack ESP Palia', de: 'Palia ESP Hack', pt: 'Hack ESP Palia', it: 'Hack ESP Palia', nl: 'Palia ESP Hack', pl: 'Hack ESP Palia', ru: 'Хак ESP Palia', tr: 'Palia ESP Hilesi', ar: 'هاك ESP Palia', ja: 'Palia ESP Hack', ko: 'Palia ESP 핵', zh: 'Palia ESP外挂', hi: 'Palia ESP Hack', id: 'Hack ESP Palia', th: 'Hack ESP Palia', vi: 'Hack ESP Palia', uk: 'Хак ESP Palia', cs: 'Palia ESP hack', ro: 'Hack ESP Palia', sv: 'Palia ESP Hack' },
	'unlock-all': { en: 'Palia Unlock All', es: 'Unlock all Palia', fr: 'Unlock all Palia', de: 'Palia Unlock All', pt: 'Unlock all Palia', it: 'Unlock all Palia', nl: 'Palia Unlock All', pl: 'Unlock all Palia', ru: 'Unlock all Palia', tr: 'Palia Unlock All', ar: 'Unlock all Palia', ja: 'Palia Unlock All', ko: 'Palia Unlock All', zh: 'Palia Unlock All', hi: 'Palia Unlock All', id: 'Unlock all Palia', th: 'Palia Unlock All', vi: 'Unlock all Palia', uk: 'Unlock all Palia', cs: 'Palia Unlock All', ro: 'Unlock all Palia', sv: 'Palia Unlock All' },
};

const CTA2_HREF = {
	'palia-esp': '/cheats/',
	'palia-aimbot': '/esp/',
	features: '/store/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/cheats/',
	wallhack: '/esp/',
	radar: '/esp/',
	eac: '/status/',
	'cheats-2026': '/cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/aimbot/',
	'best-cheats': '/store/',
	'aimbot-hack': '/aimbot/',
	'esp-hack': '/esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripcheckoutFromMeta(`${h1} | Palia Cheats`)),
		description: clampDesc(stripcheckoutFromMeta(`${h1} for Palia Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for paliacheats.org and Palia licenses.`),
		imageAlt: 'palia cheats',
		galleryTitle: 'palia cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by secure checkout — not stored on paliacheats.org.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@paliacheats.org',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
