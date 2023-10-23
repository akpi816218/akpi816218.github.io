import 'aos/dist/aos.css';
import 'bulma/css/bulma.css';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

const poppins = localFont({
	src: [
		{
			path: '../../public/assets/fonts/Poppins-ExtraLight.ttf',
			style: 'normal',
			weight: '200'
		},
		{
			path: '../../public/assets/fonts/Poppins-ExtraLightItalic.ttf',
			style: 'italic',
			weight: '200'
		},
		{
			path: '../../public/assets/fonts/Poppins-Light.ttf',
			style: 'normal',
			weight: '300'
		},
		{
			path: '../../public/assets/fonts/Poppins-LightItalic.ttf',
			style: 'italic',
			weight: '300'
		},
		{
			path: '../../public/assets/fonts/Poppins-Regular.ttf',
			style: 'normal',
			weight: '400'
		},
		{
			path: '../../public/assets/fonts/Poppins-Italic.ttf',
			style: 'italic',
			weight: '400'
		},
		{
			path: '../../public/assets/fonts/Poppins-Medium.ttf',
			style: 'normal',
			weight: '500'
		},
		{
			path: '../../public/assets/fonts/Poppins-MediumItalic.ttf',
			style: 'italic',
			weight: '500'
		},
		{
			path: '../../public/assets/fonts/Poppins-SemiBold.ttf',
			style: 'normal',
			weight: '600'
		},
		{
			path: '../../public/assets/fonts/Poppins-SemiBoldItalic.ttf',
			style: 'italic',
			weight: '600'
		},
		{
			path: '../../public/assets/fonts/Poppins-Bold.ttf',
			style: 'normal',
			weight: '700'
		},
		{
			path: '../../public/assets/fonts/Poppins-BoldItalic.ttf',
			style: 'italic',
			weight: '700'
		},
		{
			path: '../../public/assets/fonts/Poppins-ExtraBold.ttf',
			style: 'normal',
			weight: '800'
		},
		{
			path: '../../public/assets/fonts/Poppins-ExtraBoldItalic.ttf',
			style: 'italic',
			weight: '800'
		}
	],
	variable: '--font-poppins',
	preload: true
});

export const metadata: Metadata = {
	title: 'akpi',
	authors: { name: 'Akhil Pillai' },
	keywords: [],
	creator: 'Akhil Pillai',
	generator: 'Next.js',
	icons: ['/assets/img/akpi-logo.webp'],
	metadataBase: new URL('/', 'https://akpi.is-a.dev/'),
	description: "akpi's personal portfolio website",
	twitter: {
		card: 'summary_large_image',
		site: '@akpi816218',
		creator: '@akpi816218',
		images: 'https://akpi.is-a.dev/assets/img/akpi-logo.png',
		description: "akpi's personal portfolio website"
	},
	openGraph: {
		title: 'akpi',
		description: "akpi's personal portfolio website",
		url: 'https://akpi.is-a.dev',
		siteName: 'akpi',
		countryName: 'United States',
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: 'https://akpi.is-a.dev/assets/img/akpi-logo.png',
				type: 'image/png'
			}
		]
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en-US">
			<body className={poppins.className}>{children}</body>
			<Script
				defer
				data-domain="akpi.is-a.dev"
				src="https://analytics.is-a.dev/js/script.js"
			/>
		</html>
	);
}
