import Footer from '@/components/Footer';
import '@/app/out.css';
import { Providers } from '@/components/Providers';
import { ReactNode, StrictMode } from 'react';

export default function RootLayout({
	children,
	noFooter = false
}: {
	children: ReactNode;
	noFooter?: boolean;
}) {
	return (
		<StrictMode>
			<Providers>
				{children}
				{noFooter || <Footer />}
				<script
					defer
					data-domain="akpi.is-a.dev"
					src="https://analytics.is-a.dev/js/script.js"
				/>
			</Providers>
		</StrictMode>
	);
}
