import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/fontawesome-free-solid';

export function DownArrowButton() {
	return (
		<div className="has-text-centered block vert-move2 down-button">
			<FontAwesomeIcon
				// @ts-expect-error
				icon={faChevronCircleDown}
				size="2xl"
				className="has-text-white"
			/>
		</div>
	);
}
