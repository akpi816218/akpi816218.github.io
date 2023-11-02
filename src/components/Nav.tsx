import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/navbar';

export default function Nav({ active }: { active?: 'card' }) {
	return (
		<Navbar className="text-white bg-cyan-800">
			<NavbarBrand className="text-white font-black text-xl">
				<a href="/" className="flex flex-row items-center py-4">
					<img
						src="/assets/img/akpi_logo.svg"
						className="h-max aspect-square rounded-xl mr-4"
					/>
					akpi
				</a>
			</NavbarBrand>
			<NavbarContent justify="center">
				<NavbarItem isActive={active === 'card'}>
					<a href="/card/">Card</a>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<a href="https://github.com/akpi816218">
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faGithub} size="lg" />
					</a>
				</NavbarItem>
				<NavbarItem>
					<a href="/ext/osf/">
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faDiscord} size="lg" />
					</a>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
