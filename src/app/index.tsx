import RootLayout from '@/components/Layout';
import Nav from '@/components/Nav';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<RootLayout>
		<Nav />
		<main className="p-8 bg-base h-screen text-center text-white">
			<h1 className="font-black mt-[20vw] text-3xl">Hi, I'm akpi.</h1>
			<p className="mt-4 text-xl">
				I'm a {new Date().getFullYear() - new Date(1205222400000).getFullYear()}
				-year-old developer in the United States.
			</p>
		</main>
		<section className="p-8 bg-base h-screen text-center text-white"></section>
	</RootLayout>
);
