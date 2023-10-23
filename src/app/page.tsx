import Image from 'next/image';
import RootLayout from './layout';
import Link from 'next/link';
import Nav from '@/components/Nav';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faDev,
	faDiscord,
	faGithub,
	faNpm,
	faSpotify,
	faSteam,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { metadata as _metadata } from './layout';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ScriptLoader from '@/components/ScriptLoader';
import Mono from '@/components/Mono';
import Skill from '@/components/Skill';
import Waves from '@/components/Waves';
import Project from '@/components/Project';

export const metadata = _metadata;

export default function MainPage() {
	return (
		<RootLayout>
			<Link id="backtotop" className="flip-v" href="">
				<FontAwesomeIcon
					// @ts-expect-error
					icon={faArrowUp}
					size="2xl"
					className="has-text-white mt-2"
				/>
			</Link>

			<Nav />

			<section className="hero bg-base is-fullheight-with-navbar pt-12">
				<div className="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column vcenter mr-6 mb-6" data-aos="fade-left">
								<h1 className="title has-text-white has-text-weight-bold has-text-centered is-size-1">
									Hey there! I&apos;m <Mono>akpi</Mono>.
								</h1>
							</div>
							<div
								className="column vcenter mb-12 title has-text-weight-light has-text-white"
								data-aos="fade-right"
							>
								<Image
									src="/assets/img/akpi-logo.svg"
									alt="akpi logo"
									width={300}
									height={300}
								/>
							</div>
						</div>
						<div className="has-text-centered is-c2">
							Arrow keys have animated scrolling! Due to my lack of responsive
							design skills, this site is best viewed on a large screen.
						</div>
					</div>
				</div>

				<Waves className="fill-base bg-4" />
			</section>

			<section id="about" className="hero is-fullheight has-text-centered bg-4">
				<div className="hero-body">
					<div className="container">
						<h2 className="title has-text-centered has-text-weight-bold has-text-white mono is-size-3 lined">
							@akpi816218
						</h2>
						<div className="line line-center mb-4" />
						<p className="is-centered has-text-weight-medium is-size-5 mb-4">
							Hi, I&apos;m <Mono>akpi816218</Mono>, a high school developer in
							the United States. I&apos;m currently the sole developer of{' '}
							<Link
								target="_blank"
								className="mono"
								href="https://discog.localplayer.dev"
							>
								DisCog
							</Link>{' '}
							and the maintainer of{' '}
							<Link
								target="_blank"
								href="https://pronouns.js.org"
								className="mono"
							>
								pronouns.js
							</Link>
							. I spend my free time programming in <Mono>TypeScript</Mono> and
							occasionally creating websites like this one with{' '}
							<Mono>React</Mono> and <Mono>Next.js</Mono>.
							<br />
							When I&apos;m not coding, I like to bike, compose music, play the
							oboe and piano, ski, grind Tetris, play water polo, read, eat
							food, and play Horizon Forbidden West. My academic interests
							include mathematics, physics, chemistry, biology, computer
							science, music, and Spanish.
						</p>
						<div className="button-row">
							<Button href="https://github.com/akpi816218" className="is-c2">
								<span className="icon">
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faGithub} />
								</span>
								<span>GitHub</span>
							</Button>
							<Button href="/ext/osf" className="is-c2">
								<span className="icon blurple">
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faDiscord} />
								</span>
								<span>Discord</span>
							</Button>
							<Button
								href="https://www.npmjs.com/~akpi816218"
								className="is-c2"
							>
								<span
									className="icon"
									style={{
										color: 'red'
									}}
								>
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faNpm} />
								</span>
								<span>NPM</span>
							</Button>
							<Button href="https://dev.to/akpi816218" className="is-c2">
								<span className="icon">
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faDev} />
								</span>
								<span>DEV Community</span>
							</Button>
							<Button href="https://ch.tetr.io/u/akpi816218" className="is-c2">
								<span className="icon">
									<Image
										src="/assets/img/tetrio-color.svg"
										alt="TETR.IO"
										width={24}
										height={24}
										className="h1m"
									/>
								</span>
								<span>TETR.IO</span>
							</Button>
							<Button
								href="https://open.spotify.com/user/asobwyv313i67m4mvf2z0lzjm?si=e2b3492ce7e848bb"
								className="is-c2"
							>
								<span
									className="icon"
									style={{
										color: '#1DB954'
									}}
								>
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faSpotify} />
								</span>
								<span>Spotify</span>
							</Button>
							<Button
								href="https://youtube.com/@equus_quagga"
								className="is-c2"
							>
								<span
									className="icon"
									style={{
										color: 'red'
									}}
								>
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faYoutube} />
								</span>
								<span>YouTube</span>
							</Button>
							<Button
								href="https://en.pronouns.page/@equus_quagga"
								className="is-c2"
							>
								<span
									className="icon"
									style={{
										color: '#c71585'
									}}
								>
									<Image
										src="/assets/img/pronouns-page.svg"
										alt="pronouns.page"
										width={24}
										height={24}
										className="h1m"
									/>
								</span>
								<span>pronouns.page</span>
							</Button>
							<Button
								href="https://steamcommunity.com/id/equus-quagga/"
								className="is-c2"
							>
								<span className="icon">
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faSteam} />
								</span>
								<span>Steam</span>
							</Button>
						</div>
					</div>
				</div>
				<Waves className="bg-3 fill-4" />
			</section>

			{/* skills section */}
			<section
				id="skills"
				className="hero is-fullheight has-text-centered bg-3"
			>
				<div className="hero-body">
					<div className="container">
						<h2 className="title has-text-centered has-text-weight-bold has-text-white mono is-size-3 lined">
							Skills
						</h2>
						<div className="line2 line-center mb-6" />
						<div className="has-text-centered columns is-multiline is-size-4 skills">
							<Skill>
								Backend with <Mono>TypeScript</Mono>
							</Skill>
							<Skill>
								Frontend with <Mono>React + Next.js</Mono>
							</Skill>
							<Skill>
								Frontend with <Mono>HTML</Mono>/<Mono>CSS</Mono>/<Mono>JS</Mono>
							</Skill>
							<Skill>
								Web Design with <Mono>HTML</Mono>/<Mono>CSS</Mono>
							</Skill>
							<Skill>
								<span>
									Discord bots using <Mono>TypeScript</Mono> and{' '}
									<Link
										target="_blank"
										href="https://discord.js.org"
										className="mono"
									>
										Discord.js
									</Link>
								</span>
							</Skill>
							<Skill>
								Basic shell scripting with <Mono>Bash</Mono>
							</Skill>
						</div>
					</div>
				</div>
				<Waves className="fill-3 bg-4" />
			</section>

			{/* projects section */}
			<section
				id="projects"
				className="hero is-fullheight has-text-centered bg-4"
			>
				<div className="hero-body">
					<div className="container">
						<h2 className="title has-text-centered has-text-weight-bold has-text-white mono is-size-3 lined">
							Projects
						</h2>
						<div className="line2 line-center mb-6" />
						<div className="has-text-centered columns is-multiline is-centered is-size-4 skills">
							<Project>
								<Link target="_blank" href="https://discog.localplayer.dev">
									DisCog — The optimal Discord bot for your server
								</Link>
							</Project>
							<Project>
								<Link target="_blank" href="https://pronouns.js.org">
									<Mono>pronouns.js</Mono> — A simple, lightweight, typed, and
									easy-to-use pronoun library
								</Link>
							</Project>
							<Project>
								<Link target="_blank" href="https://www.npmjs.com/package/tsfm">
									<Mono>tsfm</Mono> — A lightweight file tree viewer written in{' '}
									<Mono>TypeScript</Mono>
								</Link>
							</Project>
							<Project>
								<Link
									target="_blank"
									href="https://www.npmjs.com/package/feces-cli"
								>
									<Mono>feces-cli</Mono> — A creatively named CLI trash file
									manager written in <Mono>TypeScript</Mono>
								</Link>
							</Project>
						</div>
					</div>
				</div>

				<Waves className="fill-4 bg-base" />
			</section>

			{/* contact section */}
			<section
				id="contact"
				className="hero pt-0 last has-text-centered bg-base"
			>
				<div className="hero-body">
					<div className="container">
						<h2 className="title has-text-centered has-text-weight-bold has-text-white mono is-size-3 lined">
							Contact
						</h2>
						<div className="line2 line-center mb-4" />
						<p className="is-centered is-c2 has-text-weight-medium is-size-5 mb-2">
							Feel free to contact me via email or Discord. I&apos;m always open
							to helping others or answering any questions, comments, or
							concerns you may have about my projects. If you&apos;re interested
							in working with me, please don&apos;t hesitate to reach out! Keep
							in mind that I have a busy schedule with many commitments, so I
							may not be able to respond immediately. I am normally in the{' '}
							<Mono>Pacific Time Zone</Mono> (<Mono>UTC-0800</Mono>, or{' '}
							<Mono>UTC-0700</Mono> during <Mono>Daylight Savings</Mono>). You
							can usually expect a response within 24 hours, but I may take up
							to a few days.
						</p>
						<div className="button-row">
							<Button href="mailto:public@akpi.is-a.dev">
								<span className="icon is-c1">
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faEnvelope} />
								</span>
								<span>Public Email</span>
							</Button>
							<Button href="/ext/osf">
								<span className="icon blurple">
									{/* @ts-expect-error */}
									<FontAwesomeIcon icon={faDiscord} />
								</span>
								<span>Discord</span>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Footer />
			<ScriptLoader />
		</RootLayout>
	);
}
