'use client';

import { useEffect } from 'react';

function ScriptLoader({ redirectURL }: { redirectURL?: string }) {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/assets/js/dist-bundle.min.js';
		script.async = true;
		document.body.appendChild(script);
		let redirect: HTMLScriptElement | null = null;
		if (redirectURL) {
			redirect = document.createElement('script');
			redirect.innerHTML = `window.location.href = '${redirectURL}'`;
			document.body.appendChild(redirect);
		}
		return () => {
			document.body.removeChild(script);
			if (redirectURL && redirect) document.body.removeChild(redirect);
		};
	});

	return null;
}

export default ScriptLoader;
