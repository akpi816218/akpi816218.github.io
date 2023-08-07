import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/fontawesome-free-solid';

export default function UpArrowButton() {
	return (
		<div className="has-text-centered block vert-move2 up-button mt-16">
			<FontAwesomeIcon
				// @ts-expect-error
				icon={faChevronCircleUp}
				size="2xl"
				className="has-text-white"
			/>
		</div>
	);
}
