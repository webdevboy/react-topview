const Tag = ({ name, color }) => (
	<span
		className="tag"
		style={{ backgroundColor: color }}
	>
		{name}
	</span>
);

export default Tag;