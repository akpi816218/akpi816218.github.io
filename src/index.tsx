import RootLayout from '@/components/Layout';
import Nav from '@/components/Nav';
import { createRoot } from 'react-dom/client';
import Waves from '@/components/Waves';
import { Link } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import JobOfferModal from './components/JobOfferModal';

if (!window.location.pathname.endsWith('/')) window.location.pathname += '/';
createRoot(document.getElementById('root')!).render(
	<RootLayout noFooter={true}>
		<Nav />
		<main className="p-8 bg-base h-[75vh] text-center text-white flex flex-col justify-center items-center">
			<h1 className="font-black text-4xl">Akhil Pillai</h1>
			<p className="text-xl p-8">
				Experience with web design and development, with a focus on static
				sites.
				<br />
				Custom Discord bots and personal websites for modest prices.
			</p>
		</main>
		<Waves className="fill-base bg-4" />
		<section className="p-8 bg-4 h-[75svh] text-center text-white flex flex-col justify-center items-center">
			<h2 className="font-extrabold text-3xl">Static Websites</h2>
			<p className="text-lg p-8">
				Custom single or multi-page websites like this one, built to order.
				<br />
				Choose a template from one of the many already built sites, or
				commission a new design.
			</p>
		</section>
		<Waves className="fill-4 bg-3" />
		<section className="p-8 bg-3 h-[75vh] text-center text-white flex flex-col justify-center items-center">
			<h2 className="font-extrabold text-3xl">Discord Bots</h2>
			<p className="text-lg p-8">
				Custom bots for your Discord server, made according to consumer
				specification.
				<br />
				Enjoy quick builds with prebuilt commands and features, or request
				entirely new features.
			</p>
		</section>
		<Waves className="fill-3 bg-4" />
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
				<JobOfferModal color="primary" variant="shadow" />
			</p>
		</section>
		<Waves className="fill-4 bg-base" />
	</RootLayout>
);
