import { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

export const config: Config = {
	content: [
		'src/**/*.tsx',
		'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	plugins: [nextui()]
};

export default config;
