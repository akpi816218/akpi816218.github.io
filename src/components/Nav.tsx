import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Nav() {
	return (
		<nav
			className="navbar is-fixed-top pl-2 pr-3"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand mt-2 mb-2">
				<Link className="navbar-item ml-3 has-text-weight-bold" href="/#">
					akpi
				</Link>

				<Link
					href=""
					role="button"
					className="navbar-burger has-text-white"
					data-target="navMenu"
					aria-label="menu"
					aria-expanded="false"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</Link>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<Link href="/#about" className="navbar-item is-tab">
						About
					</Link>
					<Link href="/#skills" className="navbar-item is-tab">
						Skills
					</Link>
					<Link href="/#contact" className="navbar-item is-tab">
						Contact
					</Link>
				</div>

				<div className="navbar-end">
					<Link
						href="/ext/osf"
						className="navbar-item is-tab"
						target="_blank"
						prefetch={true}
					>
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faDiscord} size="xl" />
					</Link>

					<Link
						href="https://github.com/akpi816218"
						className="navbar-item is-tab"
						target="_blank"
						prefetch={true}
					>
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faGithub} size="xl" />
					</Link>
				</div>
			</div>
		</nav>
	);
}
