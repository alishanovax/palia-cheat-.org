import I18nProvider from './I18nProvider';

type HeroCopy = {
	title: string;
	subtitle: string;
	ctaCheats: string;
	plansCta: string;
	imageAlt: string;
	trustPillsAria: string;
	chips: {
		chipEsp: string;
		chipAim: string;
		chipRadar: string;
		chipUpdates: string;
	};
	trustPills: {
		fastUpdates: string;
		secureCheckout: string;
		easySetup: string;
		premiumSupport: string;
		instantDelivery: string;
		eacMaintenance: string;
	};
};

type Props = {
	locale: string;
	siteName: string;
	cheatsHref: string;
	storeHref: string;
	monthlyPrice: number;
	heroSrc: string;
	heroSrcSet: string;
	heroSizes: string;
	heroWidth: number;
	heroHeight: number;
	/** When true, use brand EN hero keys; otherwise localized hero.* */
	useBrandHero?: boolean;
	copy: HeroCopy;
};

const chipKeys = [
	{ key: 'chipEsp', icon: 'esp' },
	{ key: 'chipAim', icon: 'aim' },
	{ key: 'chipRadar', icon: 'radar' },
	{ key: 'chipUpdates', icon: 'updates' },
] as const;

const trustPillKeys = [
	'fastUpdates',
	'secureCheckout',
	'easySetup',
	'premiumSupport',
	'instantDelivery',
	'eacMaintenance',
] as const;

function ChipIcon({ icon }: { icon: string }) {
	if (icon === 'esp') {
		return (
			<>
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path d="M12 8.5v3.2L14.2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</>
		);
	}
	if (icon === 'aim') {
		return (
			<path
				d="M12 4.5l1.7 4.8H19l-4 3.1 1.5 4.8L12 14.8 7.5 17.2 9 12.4 5 9.3h5.3L12 4.5z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		);
	}
	if (icon === 'radar') {
		return (
			<>
				<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path
					d="M12 2.8v2.2M12 19v2.2M2.8 12h2.2M19 12h2.2"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
				/>
			</>
		);
	}
	return (
		<path
			d="M5 13.2l4.2 4.2L19 7.6"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	);
}

function HeroInner({
	siteName,
	cheatsHref,
	storeHref,
	heroSrc,
	heroSrcSet,
	heroSizes,
	heroWidth,
	heroHeight,
	useBrandHero = true,
	copy,
}: Props) {
	const { title, subtitle, ctaCheats, plansCta, imageAlt, trustPillsAria, chips, trustPills } = copy;

	return (
		<section className="hero" aria-label={title}>
			<div className="hero__media">
				<img
					src={heroSrc}
					srcSet={heroSrcSet}
					sizes={heroSizes}
					alt={imageAlt}
					width={heroWidth}
					height={heroHeight}
					fetchPriority="high"
					loading="eager"
					decoding="async"
				/>
			</div>
			<div className="hero__veil" aria-hidden="true" />
			<div className="shell hero__content">
				<div className="hero__copy">
					<h1 className="hero__brand">
						{useBrandHero ? <span data-edit="name">{title}</span> : title}
					</h1>
					<p className="hero__lede" data-edit={useBrandHero ? 'heroLede' : undefined}>
						{subtitle}
					</p>
					<div className="hero__actions">
						<a className="hero__buy" href={cheatsHref}>
							<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M12 3.5l7.5 4.2v8.6L12 20.5l-7.5-4.2V7.7L12 3.5zm0 2.2L6.8 8.5v6.9L12 18.3l5.2-2.9V8.5L12 5.7z"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="hero__buy-label">{ctaCheats}</span>
						</a>
						<a className="hero__ghost" href={storeHref}>
							{plansCta}
						</a>
					</div>
					<ul className="hero__features">
						{chipKeys.map((chip) => (
							<li key={chip.key}>
								<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
									<ChipIcon icon={chip.icon} />
								</svg>
								<span data-edit={useBrandHero ? chip.key : undefined}>
									{chips[chip.key]}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="hero__pills">
				<div className="shell hero__pills-track">
					<ul className="hero__pills-list" aria-label={trustPillsAria}>
						{trustPillKeys.map((key) => (
							<li key={key} className="hero__pills-item">
								<span className="hero__pills-dot" aria-hidden="true" />
								{trustPills[key]}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default function HeroApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HeroInner {...props} />
		</I18nProvider>
	);
}
