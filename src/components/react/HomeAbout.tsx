import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type HomeLinks = {
	cheats: string;
	esp: string;
	aimbot: string;
	updates: string;
};

type Props = {
	locale: string;
	links: HomeLinks;
};

function HomeAboutInner({ links }: Props) {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
			<p>{t('home.aboutP1')}</p>
			<p>
				{t('home.aboutP2Before')}{' '}
				<a href={links.cheats}>{t('home.aboutPillar')}</a>
				{t('home.aboutP2Mid')}
				<a href={links.esp}>{t('home.aboutEsp')}</a>
				{t('home.aboutP2Mid')}
				<a href={links.aimbot}>{t('home.aboutAimbot')}</a>
				{t('home.aboutP2Or')}
				<a href={links.updates}>{t('home.aboutUndetected')}</a>
				{t('home.aboutP2After')}
			</p>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner {...props} />
		</I18nProvider>
	);
}
