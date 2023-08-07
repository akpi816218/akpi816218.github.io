/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	distDir: 'out',
	images: { unoptimized: true },
	trailingSlash: true,
	basePath: '/me'
};

export default nextConfig;
