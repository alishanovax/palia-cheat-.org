import { useEffect, useState } from 'react';

type Props = {
	cheatsHref: string;
};

type Comment = {
	user: string;
	text: string;
	rating: 'positive' | 'negative' | 'neutral';
	date: string;
};

const SAMPLE_COMMENTS: Comment[] = [
	{
		user: 'mike_p',
		text: 'Does anyone know which filter hides bug icons? Esp is great near ponds, just gets a little busy.',
		rating: 'positive',
		date: '2026-09-02',
	},
	{
		user: 'jess.k',
		text: 'Loader was down briefly after Wednesday\'s patch. Back online now with no issues since.',
		rating: 'neutral',
		date: '2026-08-30',
	},
	{
		user: 'defenderDan',
		text: 'Defender flagged the zip once — support sent a quick note on whitelisting. All good after that.',
		rating: 'neutral',
		date: '2026-08-22',
	},
	{
		user: 'palia_grind',
		text: 'Teleport bookmark at Bahari cliffs works really well for clay runs. Saves a lot of time.',
		rating: 'positive',
		date: '2026-09-06',
	},
	{
		user: 'luna_fish',
		text: 'Gillyfin esp plus bite alert means less staring at the float. Pretty happy with it so far.',
		rating: 'positive',
		date: '2026-09-08',
	},
	{
		user: 'tom_r',
		text: 'Menu hotkey overlapped Discord push-to-talk at first. Remap is in settings if anyone needs it.',
		rating: 'neutral',
		date: '2026-08-18',
	},
	{
		user: 'nightOwl42',
		text: 'Hunting aim felt a bit snappy on default. Lowered smoothing and it feels natural now.',
		rating: 'positive',
		date: '2026-09-01',
	},
	{
		user: 'karen_w',
		text: 'Install took one extra step on Win11. Support was helpful and got me running the same day.',
		rating: 'positive',
		date: '2026-09-10',
	},
];

export default function ForumAuth({ cheatsHref }: Props) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [displayName, setDisplayName] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [mode, setMode] = useState<'login' | 'signup'>('login');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const stored = localStorage.getItem('palia-forum-user');
		if (stored) {
			setDisplayName(stored);
			setLoggedIn(true);
		}
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!username.trim() || !password.trim()) return;
		const name = username.trim();
		localStorage.setItem('palia-forum-user', name);
		setDisplayName(name);
		setLoggedIn(true);
		setShowModal(false);
	};

	const handleLogout = () => {
		localStorage.removeItem('palia-forum-user');
		setDisplayName('');
		setLoggedIn(false);
	};

	return (
		<div className="forum-auth">
			<div className="forum-auth__bar">
				<div className="forum-auth__actions">
					{loggedIn ? (
						<>
							<span className="forum-auth__welcome">
								Welcome, <strong>{displayName}</strong>
							</span>
							<button type="button" className="forum-auth__btn forum-auth__btn--ghost" onClick={handleLogout}>
								Log Out
							</button>
						</>
					) : (
						<>
							<button
								type="button"
								className="forum-auth__btn"
								onClick={() => {
									setMode('login');
									setShowModal(true);
								}}
							>
								Log In
							</button>
							<button
								type="button"
								className="forum-auth__btn forum-auth__btn--primary"
								onClick={() => {
									setMode('signup');
									setShowModal(true);
								}}
							>
								Sign Up
							</button>
						</>
					)}
				</div>
				<a href={cheatsHref} className="forum-auth__buy">
					View Cheats
				</a>
			</div>

			<section className="forum-auth__comments" aria-label="Community discussions">
				<h2>Recent Discussions</h2>
				{loggedIn ? (
					<ul className="forum-auth__list">
						{SAMPLE_COMMENTS.map((c) => (
							<li key={c.user + c.date} className={`forum-auth__comment forum-auth__comment--${c.rating}`}>
								<div className="forum-auth__comment-head">
									<strong>@{c.user}</strong>
									<span>{c.date}</span>
								</div>
								<p>{c.text}</p>
							</li>
						))}
					</ul>
				) : (
					<p className="forum-auth__gate">
						Sign up or log in to read and post in community discussions about Palia cheats setup, aimbot
						settings, and fishing ESP tips.
					</p>
				)}
			</section>

			{showModal ? (
				<div
					className="forum-auth__overlay"
					role="dialog"
					aria-modal="true"
					aria-label={mode === 'login' ? 'Log in' : 'Sign up'}
				>
					<div className="forum-auth__modal">
						<button
							type="button"
							className="forum-auth__close"
							onClick={() => setShowModal(false)}
							aria-label="Close"
						>
							×
						</button>
						<h3>{mode === 'login' ? 'Log In to Forum' : 'Create Forum Account'}</h3>
						<p>Access setup guides, aimbot discussions, and buyer threads.</p>
						<form onSubmit={handleSubmit}>
							<label>
								Username
								<input
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
									autoComplete="username"
								/>
							</label>
							{mode === 'signup' ? (
								<label>
									Email
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										autoComplete="email"
									/>
								</label>
							) : null}
							<label>
								Password
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
								/>
							</label>
							<button type="submit" className="forum-auth__btn forum-auth__btn--primary forum-auth__btn--full">
								{mode === 'login' ? 'Log In' : 'Sign Up'}
							</button>
						</form>
						<p className="forum-auth__switch">
							{mode === 'login' ? (
								<>
									No account?{' '}
									<button type="button" onClick={() => setMode('signup')}>Sign up free</button>
								</>
							) : (
								<>
									Already registered? <button type="button" onClick={() => setMode('login')}>Log in</button>
								</>
							)}
						</p>
					</div>
				</div>
			) : null}
		</div>
	);
}
