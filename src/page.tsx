import RootLayout from '@/components/Layout';
import Nav from '@/components/Nav';
import { createRoot } from 'react-dom/client';
import Waves from '@/components/Waves';
import { Link } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import JobOfferModal from './components/JobOfferModal';
import { motion } from 'framer-motion';

if (!window.location.pathname.endsWith('/')) window.location.pathname += '/';
createRoot(document.getElementById('root')!).render(
	<RootLayout>
		<Nav />
		<main className="p-8 bg-base h-[75vh] text-center text-white flex flex-col justify-center items-center">
			<h1 className="font-black text-4xl">Akhil Pillai</h1>
			<p className="text-xl p-8">
				Experience with web design and development, with a focus on static
				sites.
				<br />
				<br />
				Custom Discord bots and personal websites designed to customer
				specification.
				<br />
				<br />
				All for modest prices.
			</p>
		</main>
		<Waves className="fill-base bg-4" />
		<section className="p-8 bg-4 h-[75svh] text-center text-white flex flex-col justify-center items-center">
			<h2 className="font-extrabold text-3xl">Static Websites</h2>
			<p className="text-lg p-8">
				Custom single or multi-page websites like this one, built to order.
				<br />
				<br />
				Choose a template from an existing site, or commission a new design.
			</p>
		</section>
		<Waves className="fill-4 bg-3" />
		<section className="p-8 bg-3 h-[75vh] text-center text-white flex flex-col justify-center items-center">
			<h2 className="font-extrabold text-3xl">Discord Bots</h2>
			<p className="text-lg p-8">
				Custom bots for your Discord server, made according to consumer
				specification.
				<br />
				<br />
				Enjoy quick builds with prebuilt commands and features, or request
				entirely new features.
			</p>
		</section>
		<Waves className="fill-3 bg-base" />
		<section className="p-8 bg-base h-[75vh] text-center text-white flex flex-col justify-center items-center">
			<h2 className="font-extrabold text-3xl">Music</h2>
			<p className="text-lg p-8">
				Original background music and soundtracks, made to order.
				<br />
				<br />
				Perfect for games, videos, and more.
			</p>
		</section>
		<Waves className="fill-base bg-4" />
		<section className="p-8 bg-4 h-[75vh] text-center text-white flex flex-col justify-center items-center">
			<h2 className="font-extrabold text-3xl">Contact</h2>
			<p className="text-lg p-8">
				Email:{' '}
				<Link
					href="mailto:jobs@akpi.is-a.dev"
					className="text-lg"
					isExternal
					showAnchorIcon
					// @ts-expect-error
					anchorIcon={<FontAwesomeIcon icon={faEnvelope} className="mx-1" />}
					color="success"
					underline="always"
				>
					jobs@akpi.is-a.dev
				</Link>
				<br />
				<br />
				<motion.span
					className="flex mx-auto justify-center items-center p-[.125rem] mt-4 h-min w-min rounded-2xl bg-clip-border"
					whileHover={{
						scale: 1.125,
						transition: {
							duration: 0.25,
							repeatType: 'reverse'
						},
						backgroundImage:
							'radial-gradient(circle at 50% 50%, #0f0, #f0f, #0ff)'
					}}
					initial={{
						backgroundImage:
							'radial-gradient(circle at 50% 50%, #0ff, #0f0, #f0f)'
					}}
				>
					<JobOfferModal color="primary" variant="shadow" />
				</motion.span>
			</p>
		</section>
		<Waves className="fill-4 bg-base" />
	</RootLayout>
);
