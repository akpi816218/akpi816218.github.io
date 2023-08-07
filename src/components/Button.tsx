import Link from 'next/link';

export default function Button({
	href,
	children,
	className = ''
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<Link
			href={href}
			className={`button is-rounded is-medium m-1${
				className ? ' ' + className : ''
			}`}
			target="_blank"
		>
			{children}
		</Link>
	);
}