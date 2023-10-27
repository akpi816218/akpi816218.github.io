import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/navbar';

export default function Nav({ active }: { active?: 'skills' }) {
	return (
		<Navbar className="text-white">
			<NavbarBrand>
				<a href="/" className="m-2">
					akpi
				</a>
			</NavbarBrand>
			<NavbarContent justify="center">
				<NavbarItem isActive={active === 'skills'}>
					<a href="/skills">Skills</a>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<NavbarItem>
					<a href="https://github.com/akpi816218">
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faGithub} size="lg" />
					</a>
				</NavbarItem>
				<NavbarItem>
					<a href="/ext/osf">
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faDiscord} size="lg" />
					</a>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
