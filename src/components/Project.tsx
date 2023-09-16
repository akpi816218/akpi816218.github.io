export default function Project({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
	return (
		<div className="project" style={style}>
			<div className="project-interior"><span>{children}</span></div>
		</div>
	);
}
