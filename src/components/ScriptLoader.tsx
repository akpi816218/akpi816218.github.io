'use client';

import Script from 'next/script';

export default function ScriptLoader({
	redirectURL
}: {
	redirectURL?: string;
}) {
	if (!!redirectURL)
		return (
			<Script id="redirect">{`window.location.assign('${redirectURL}')`}</Script>
		);
	else
		return (
			<>
				<Script src="/assets/js/jquery-3.6.0.min.js" />
				<Script
					src="/assets/js/aos@2.3.1.min.js"
					strategy="afterInteractive"
					onReady={() => {
						try {
							// Init aos.js
							// @ts-expect-error
							AOS.init({
								duration: 700,
								once: true
							});
							console.log('AOS initialized');
						} catch { }
					}}
				/>
				<Script src="/assets/js/script.js" strategy="afterInteractive" />
			</>
		);
}
