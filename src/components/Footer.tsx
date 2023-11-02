export default function Footer({ className = '' }) {
	return (
		<footer
			className={
				'bg-base text-center text-lg text-white px-4 pt-16 pb-12 border-t-small border-c2 ' +
				className
			}
		>
			{/* <div className="mb-2">
				<Link
					href="https://github.com/akpi816218"
					className="text-white mx-2"
					target="_blank"
				>
					<FontAwesomeIcon icon={faGithub} size="xl" />
				</Link>
			</div> */}

			<p>
				Website designed and built entirely by Akhil Pillai.
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
