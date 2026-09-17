import { useEffect, useMemo, useState } from 'react';
import I18nProvider from './I18nProvider';
import LanguageSwitcher, { type LocaleMeta } from './LanguageSwitcher';

type NavLink = {
	id: string;
	label: string;
	edit?: string;
	href: string;
};

type NavUiLabels = {
	primaryAria: string;
	mobileAria: string;
	openMenu: string;
	closeMenu: string;
	buyShort: string;
	buy: string;
};

type Props = {
	locale: string;
	siteName: string;
	logoUrl: string;
	logoAlt: string;
	checkoutUrl: string;
	currentPath: string;
	homeHref: string;
	reviewsBasePath: string;
	locales: LocaleMeta[];
	hrefForLocale: Record<string, string>;
	links: NavLink[];
	uiLabels: NavUiLabels;
};

const icons: Record<string, string> = {
	home: 'M4.5 10.5L12 4.5l7.5 6v9.2a1.3 1.3 0 01-1.3 1.3H5.8A1.3 1.3 0 014.5 19.7V10.5zM9.5 20.5V13h5v7.5',
	hacks:
		'M12 3.5l7.5 4.2v8.6L12 20.5l-7.5-4.2V7.7L12 3.5zm0 2.2L6.8 8.5v6.9L12 18.3l5.2-2.9V8.5L12 5.7z',
	'palia-esp':
		'M4.5 7.5h15M4.5 12h15M4.5 16.5h9M7.5 4.5v15',
	features: 'M4.5 7.5h15M4.5 12h15M4.5 16.5h9M7.5 4.5v15',
	'palia-aimbot':
		'M12 4.5l1.7 4.8H19l-4 3.1 1.5 4.8L12 14.8 7.5 17.2 9 12.4 5 9.3h5.3L12 4.5z',
	pricing:
		'M7.5 7.2h9M7.5 12h9M7.5 16.8H14M5 4.8h14a1.2 1.2 0 011.2 1.2v12a1.2 1.2 0 01-1.2 1.2H5A1.2 1.2 0 013.8 18V6A1.2 1.2 0 015 4.8z',
	updates:
		'M12 4.2v3.2M12 16.6v3.2M4.2 12h3.2M16.6 12h3.2M7.1 7.1l2.3 2.3M14.6 14.6l2.3 2.3M16.9 7.1l-2.3 2.3M9.4 14.6l-2.3 2.3',
	reviews:
		'M12 4.5l1.8 4.9H19l-4.1 3.2 1.6 5L12 14.9 7.5 17.6l1.6-5L5 9.4h5.2L12 4.5z',
	forum:
		'M6.5 7.5h11a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5H10l-3.5 3.5V9a1.5 1.5 0 011.5-1.5z',
	setup:
		'M12 4.5v4.2M9.2 7.8l2.8-2.8 2.8 2.8M8.2 11.2h7.6a1.2 1.2 0 011.2 1.2v5.1a1.2 1.2 0 01-1.2 1.2H8.2a1.2 1.2 0 01-1.2-1.2v-5.1a1.2 1.2 0 011.2-1.2z',
};

function NavbarInner({
	locale,
	siteName,
	logoUrl,
	logoAlt,
	checkoutUrl,
	currentPath,
	homeHref,
	reviewsBasePath,
	locales,
	hrefForLocale,
	links,
	uiLabels,
}: Props) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const isActive = (href: string) => {
		if (href === '/' || href === homeHref) {
			return currentPath === '/' || currentPath === homeHref || currentPath === `/${locale}/`;
		}
		if (href === reviewsBasePath) return currentPath === href || currentPath.startsWith(href);
		return currentPath === href || currentPath.startsWith(href);
	};

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		document.body.classList.toggle('nav-lock', open);
		return () => document.body.classList.remove('nav-lock');
	}, [open]);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		const onResize = () => {
			if (window.matchMedia('(min-width: 1025px)').matches) setOpen(false);
		};
		document.addEventListener('keydown', onKey);
		window.addEventListener('resize', onResize);
		return () => {
			document.removeEventListener('keydown', onKey);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	const navLinks = useMemo(
		() =>
			links.map((item) => ({
				...item,
				active: isActive(item.href),
			})),
		[links, currentPath, locale, homeHref, reviewsBasePath],
	);

	return (
		<header className={`site-header${scrolled || open ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`} data-nav>
			<div className="shell site-header__bar">
				<a className="site-brand" href={homeHref} data-edit="name">
					<img
						className="site-brand__logo"
						src={logoUrl}
						alt={logoAlt}
						width={152}
						height={102}
						loading="eager"
						decoding="async"
					/>
					<span className="site-brand__name">{siteName}</span>
				</a>
				<nav className="site-nav" aria-label={uiLabels.primaryAria}>
					{navLinks.map((item) => (
						<a key={item.id} href={item.href} className={item.active ? 'is-active' : undefined}>
							<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d={icons[item.id] ?? icons.home}
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span data-edit={item.edit}>{item.label}</span>
						</a>
					))}
				</nav>

				<div className="site-tools">
					<div className="site-tools__lang">
						<LanguageSwitcher
							currentLocale={locale}
							locales={locales}
							hrefForLocale={hrefForLocale}
						/>
					</div>
					<a
						href={checkoutUrl}
						className="site-tools__buy"
						rel="noopener noreferrer"
						aria-label={uiLabels.buyShort}
					>
						<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M4.5 6.5h2.1l1.2 9.2h9.4l1.8-6.6H8.1M9.2 19.2a.9.9 0 100-1.8.9.9 0 000 1.8zm7.4 0a.9.9 0 100-1.8.9.9 0 000 1.8z"
								stroke="currentColor"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span data-edit="ctaBuyShort">{uiLabels.buyShort}</span>
					</a>
					<button
						type="button"
						className="site-menu"
						aria-expanded={open}
						aria-controls="site-nav-panel"
						aria-label={open ? uiLabels.closeMenu : uiLabels.openMenu}
						onClick={() => setOpen((v) => !v)}
					>
						<span className="site-menu__bars" aria-hidden="true">
							<span />
							<span />
							<span />
						</span>
					</button>
				</div>
			</div>

			{open ? (
				<div className="site-panel" id="site-nav-panel">
					<div className="shell site-panel__inner">
						<nav className="site-panel__nav" aria-label={uiLabels.mobileAria}>
							{navLinks.map((item) => (
								<a
									key={item.id}
									href={item.href}
									className={item.active ? 'is-active' : undefined}
									onClick={() => setOpen(false)}
								>
									<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
										<path
											d={icons[item.id] ?? icons.home}
											stroke="currentColor"
											strokeWidth="1.6"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span>{item.label}</span>
								</a>
							))}
						</nav>
						<div className="site-panel__foot">
							<div className="site-panel__lang">
								<LanguageSwitcher
									currentLocale={locale}
									locales={locales}
									hrefForLocale={hrefForLocale}
								/>
							</div>
							<a href={checkoutUrl} className="site-panel__buy" rel="noopener noreferrer">
								<span data-edit="ctaBuy">{uiLabels.buy}</span>
							</a>
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
}

export default function NavbarApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<NavbarInner {...props} />
		</I18nProvider>
	);
}
