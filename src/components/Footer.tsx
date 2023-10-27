import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
	return (
		<footer className="bg-base text-center text-white px-4 py-8">
			<div className="mb-2">
				<a href="/ext/osf" className="mx-2 is-blurple" target="_blank">
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faDiscord} size="xl" />
				</a>
				<a
					href="https://github.com/akpi816218"
					className="text-white mx-2"
					target="_blank"
				>
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faGithub} size="xl" />
				</a>
			</div>

			<p>
				<span className="font-bold">akpi816218</span>
				<br />
				&copy; {new Date().getFullYear()} Copyright{' '}
				<a
					href="https://akpi.is-a.dev"
					className="underline underline-offset-2"
				>
					Akhil Pillai
				</a>
				. All Rights Reserved.
			</p>
		</footer>
	);
}
