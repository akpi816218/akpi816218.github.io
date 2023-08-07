import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-base content has-text-centered has-text-white pb-6 pt-6 mb-0">
			<div className="mb-2">
				<Link href="/ext/osf" className="has-text-white mr-2" target="_blank">
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faDiscord} size="xl" />
				</Link>
				<Link
					href="https://github.com/akpi816218/discog"
					className="has-text-white ml-2"
					target="_blank"
				>
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faGithub} size="xl" />
				</Link>
			</div>

			<p>
				<span className="has-text-weight-bold">akpi816218</span>
				<br />
				&copy; <span id="cp-year">2023</span> Copyright{' '}
				<Link href="https://github.com/akpi816218">akpi816218</Link>. All Rights
				Reserved.
			</p>
			<Link
				href="https://bulma.io"
				className="has-text-centered has-image-centered no-flip"
			>
				<Image
					src="/assets/img/made-with-bulma--dark.png"
					// className="h2m"
					alt="Made with Bulma"
					className="is-inline"
					width={256}
					height={48}
				/>
			</Link>
		</footer>
	);
}
