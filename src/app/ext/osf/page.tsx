import RootLayout from '@/app/layout';
import Nav from '@/components/Nav';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<RootLayout>
		<Nav />
		<h1>hi mom</h1>
	</RootLayout>
);
