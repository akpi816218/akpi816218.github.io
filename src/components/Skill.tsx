export default function Skill({
	children,
	style
}: {
	children: React.ReactNode;
	style?: React.CSSProperties;
}) {
	return (
		<div className="skill" style={style}>
			<span>{children}</span>
		</div>
	);
}
