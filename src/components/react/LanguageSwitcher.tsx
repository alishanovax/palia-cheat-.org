import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export type LocaleMeta = {
	code: string;
	name: string;
	nativeName: string;
	hreflang: string;
	region: string;
};

type Props = {
	currentLocale: string;
	locales: LocaleMeta[];
	hrefForLocale: Record<string, string>;
};

export default function LanguageSwitcher({ currentLocale, locales, hrefForLocale }: Props) {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);

	const currentMeta = useMemo(
		() => locales.find((l) => l.code === currentLocale) ?? locales[0],
		[locales, currentLocale],
	);

	useEffect(() => {
		if (!open) return;
		const onDoc = (e: MouseEvent) => {
			if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('mousedown', onDoc);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onDoc);
			document.removeEventListener('keydown', onKey);
		};
	}, [open]);

	return (
		<div className="lang-switcher" ref={rootRef}>
			<button
				type="button"
				className="lang-switcher__toggle"
				aria-label={t('common.selectLanguage')}
				aria-expanded={open}
				aria-haspopup="listbox"
				onClick={() => setOpen((v) => !v)}
			>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
					<path
						d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9s-1.3 6.2-3.8 9M12 3c-2.5 2.8-3.8 6-3.8 9s1.3 6.2 3.8 9"
						stroke="currentColor"
						strokeWidth="1.6"
					/>
				</svg>
				<span className="lang-switcher__current">{currentMeta.nativeName}</span>
				<svg
					className={`lang-switcher__chevron${open ? ' is-open' : ''}`}
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					aria-hidden="true"
				>
					<path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				</svg>
			</button>

			{open ? (
				<div className="lang-switcher__panel" role="listbox" aria-label={t('common.selectLanguage')}>
					<p className="lang-switcher__note">
						{currentLocale === 'en' ? t('common.englishOfficial') : t('common.englishIsOfficial')}
					</p>
					<ul className="lang-switcher__list">
						{locales.map((locale) => {
							const href = hrefForLocale[locale.code] ?? `/${locale.code}/`;
							const isCurrent = locale.code === currentLocale;
							return (
								<li key={locale.code} role="option" aria-selected={isCurrent}>
									<a
										href={href}
										hrefLang={locale.hreflang}
										lang={locale.code}
										className={`lang-switcher__link${isCurrent ? ' is-current' : ''}`}
										aria-current={isCurrent ? 'page' : undefined}
										data-locale={locale.code}
										onClick={() => {
											document.cookie = `fc_locale=${locale.code};path=/;max-age=31536000;SameSite=Lax`;
											setOpen(false);
										}}
									>
										<span className="lang-switcher__native">{locale.nativeName}</span>
										<span className="lang-switcher__region">{locale.region}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</div>
	);
}
