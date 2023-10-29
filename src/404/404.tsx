import Footer from '@/components/Footer';
import RootLayout from '@/components/Layout';
import Nav from '@/components/Nav';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Code } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<RootLayout noFooter={true}>
		<div className="h-screen flex flex-col justify-stretch items-stretch">
			<Nav />
			<main className="bg-base text-white flex-grow flex flex-col justify-center items-center p-8">
				<motion.h1
					className="text-right font-bold text-4xl p-4"
					initial={{
						transform: 'scaleX(-1)'
					}}
					whileInView={{
						transform: 'scaleX(1)'
					}}
				>
					<Code className="text-4xl font-bold">404</Code>: Page not found
				</motion.h1>
				<p className="p-4 text-xl">
					Hello, Gretel. Or are you Hansel? Looks like you&apos;re lost in the
					digital wilderness. Don&apos;t worry, we always keep some breadcrumbs
					to help <s>foolish meals of tender flesh like you</s>{' '}
					<em>I mean poor lost souls such as you</em> find your way back out.
					Not all witches are bad, you know.
					<br />
					&mdash;The (Not Bad?) Witch
				</p>
				<motion.div
					className="mr-16 p-1 self-end rounded-2xl bg-clip-border bg-none"
					whileHover={{
						scale: 1.125,
						transition: {
							duration: 0.25,
							repeatType: 'reverse'
						},
						// background radial gradient (cyan, lime, magenta), clip to border
						backgroundImage:
							'radial-gradient(circle at 50% 50%, #0ff, #0f0, #f0f)'
					}}
				>
					<Button
						onPress={() => window.location.assign('/')}
						color="secondary"
						variant="shadow"
						radius="lg"
						// @ts-expect-error
						endContent={<FontAwesomeIcon icon={faHome} />}
						className="bg-gradient-to-tr from-secondary to-primary shadow-xl text-2xl py-6"
					>
						Follow the breadcrumbs back home
					</Button>
				</motion.div>
			</main>
			<Footer />
		</div>
	</RootLayout>
);
