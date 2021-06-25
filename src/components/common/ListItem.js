import Tag from "./Tag";
import cx from 'classnames';

const getIcon = (type) => {
	const path = '/icons';
	switch (type) {
		case 'BUS_STOP':
			return `${path}/bus.svg`;
		case 'ATTRACTION':
			return `${path}/attraction.svg`;
		case 'PARK':
			return `${path}/park.svg`;
		case 'MUSEUM':
			return `${path}/park.svg`;
		default:
			return `${path}/bus.svg`;
	}
}

const ListItem = ({ type, name, description, number, tags }) => (
	<div className={cx('list-item', {'align-center': type !== 'BUS_STOP'})}>
		<img className="place-icon" src={getIcon(type)} alt={name} />
		<div className="flex main-content">
			{number && (
				<img
					className="number-icon"
					src={`/icons/${number}.svg`}
					alt={`BUS_STOP_${number}`}
				/>
			)}
			<div className="content">
				<h4 className="name">{name}</h4>
				<p className="description">{description}</p>
				{tags && (
					<div className="tags">
						{tags.map(tag => (
							<Tag name={tag.name} color={tag.color} key={tag.name} />
						))}
					</div>
				)}
			</div>
		</div>
	</div>
);

export default ListItem;