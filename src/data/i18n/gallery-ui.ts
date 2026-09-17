import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

const paliaGalleryBase: GalleryUi = {
	eyebrow: 'Gallery',
	title: 'In-game look',
	subtitle: 'ESP, wallhack, and fishing tools on Windows PC.',
	lead: 'Spot resources, fish, and insects with ESP and wallhack in one license.',
	highlights: [
		{
			title: 'Resource ESP',
			copy: 'See ores, fish, and insects with distance readouts in Kilima and Bahari Bay.',
		},
		{
			title: 'Wallhack',
			copy: 'Track nodes and fishing spots through walls with toggleable overlays.',
		},
		{
			title: 'Soft aim',
			copy: 'Tune hunting and fishing aim with hotkeys for Palia sessions on PC.',
		},
	],
	updatesLabel: 'Patch updates',
	updatesShort: 'Updates',
};

/** Locale labels only — body copy stays Palia-focused. */
const localeLabels: Partial<Record<LocaleCode, Pick<GalleryUi, 'title' | 'updatesLabel'>>> = {
	es: { title: 'Aspecto en juego', updatesLabel: 'Actualizaciones' },
	fr: { title: 'Aperçu en jeu', updatesLabel: 'Mises à jour' },
	de: { title: 'Ingame-Ansicht', updatesLabel: 'Updates' },
	pt: { title: 'Visual no jogo', updatesLabel: 'Atualizações' },
	it: { title: 'Aspetto in gioco', updatesLabel: 'Aggiornamenti' },
	nl: { title: 'In-game weergave', updatesLabel: 'Updates' },
	pl: { title: 'Wygląd w grze', updatesLabel: 'Aktualizacje' },
	ru: { title: 'В игре', updatesLabel: 'Обновления' },
	tr: { title: 'Oyun içi görünüm', updatesLabel: 'Güncellemeler' },
	ar: { title: 'مظهر داخل اللعبة', updatesLabel: 'تحديثات' },
	ja: { title: 'ゲーム内の見た目', updatesLabel: '更新' },
	ko: { title: '인게임 미리보기', updatesLabel: '업데이트' },
	zh: { title: '游戏内预览', updatesLabel: '更新' },
	hi: { title: 'इन-गेम लुक', updatesLabel: 'अपडेट' },
	id: { title: 'Tampilan dalam game', updatesLabel: 'Pembaruan' },
	th: { title: 'มุมมองในเกม', updatesLabel: 'อัปเดต' },
	vi: { title: 'Giao diện trong game', updatesLabel: 'Cập nhật' },
	uk: { title: 'Вигляд у грі', updatesLabel: 'Оновлення' },
	cs: { title: 'Vzhled ve hře', updatesLabel: 'Aktualizace' },
	ro: { title: 'Aspect în joc', updatesLabel: 'Actualizări' },
	sv: { title: 'Utseende i spelet', updatesLabel: 'Uppdateringar' },
};

function galleryFor(locale: LocaleCode): GalleryUi {
	const labels = localeLabels[locale];
	return {
		...paliaGalleryBase,
		...(labels ?? {}),
	};
}

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: paliaGalleryBase,
	es: galleryFor('es'),
	fr: galleryFor('fr'),
	de: galleryFor('de'),
	pt: galleryFor('pt'),
	it: galleryFor('it'),
	nl: galleryFor('nl'),
	pl: galleryFor('pl'),
	ru: galleryFor('ru'),
	tr: galleryFor('tr'),
	ar: galleryFor('ar'),
	ja: galleryFor('ja'),
	ko: galleryFor('ko'),
	zh: galleryFor('zh'),
	hi: galleryFor('hi'),
	id: galleryFor('id'),
	th: galleryFor('th'),
	vi: galleryFor('vi'),
	uk: galleryFor('uk'),
	cs: galleryFor('cs'),
	ro: galleryFor('ro'),
	sv: galleryFor('sv'),
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
