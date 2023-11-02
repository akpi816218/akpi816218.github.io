import JobOfferModal from '@/components/JobOfferModal';
import RootLayout from '@/components/Layout';
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Code,
	Divider,
	Link,
	User
} from '@nextui-org/react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';

createRoot(document.getElementById('root')!).render(<MyCard />);

function MyCard() {
	const generated = window.location.search === '?generate=1';

	return (
		<RootLayout noFooter={true}>
			<main className="flex flex-col justify-center items-center h-screen p-32 text-6xl bg-gradient-to-tl from-pink-600 to-cyan-600">
				<Card
					className={'p-8 rounded-3xl' + (generated ? ' bg-content2' : '')}
					isBlurred={!generated}
					isFooterBlurred={!generated}
					shadow="lg"
					isHoverable
				>
					<CardHeader className="flex gap-3">
						<User
							name="Akhil Pillai"
							description={
								<Link href="/" color="foreground" underline="hover" size="sm">
									akpi.is-a.dev
								</Link>
							}
							avatarProps={{
								src: '/assets/img/akpi_logo.svg',
								alt: 'akpi logo',
								radius: 'lg',
								size: 'lg'
							}}
							classNames={{
								name: 'text-3xl',
								description: 'text-small text-slate-300'
							}}
						/>
					</CardHeader>
					<Divider />
					<CardBody className="text-3xl text-center">
						<div>
							Web developer and designer
							<br />
							Discord bot developer
							<br />
							{generated ? (
								<>
									Email:{' '}
									<Link
										href="mailto:jobs@akpi.is-a.dev"
										className="text-2xl"
										color="warning"
										underline="always"
										isExternal
									>
										jobs@akpi.is-a.dev
									</Link>
								</>
							) : (
								<JobOfferModal
									className="text-lg mt-4"
									color="warning"
									content="Contact"
									variant="shadow"
								/>
							)}
						</div>
					</CardBody>
					{generated ? (
						<>
							<Divider />
							<CardFooter className="text-xl">
								Last generated at{' '}
								{<Code className="ml-2">{new Date().toLocaleString()}</Code>}
							</CardFooter>
						</>
					) : (
						<>
							<Divider />
							<ButtonGroup className="mt-6">
								<Button>
									<Link
										isExternal
										showAnchorIcon
										className="text-xl text-cyan-400"
										href="https://dev.to/akpi816218"
									>
										DEV Community
									</Link>
								</Button>
								<Button>
									<Link
										isExternal
										showAnchorIcon
										className="text-xl text-cyan-400"
										href="https://github.com/akpi816218"
									>
										GitHub
									</Link>
								</Button>
								<Button>
									<Link
										isExternal
										showAnchorIcon
										className="text-xl text-cyan-400"
										href="https://www.npmjs.com/~akpi816218"
									>
										NPM
									</Link>
								</Button>
							</ButtonGroup>
						</>
					)}
				</Card>
			</main>
		</RootLayout>
	);
}
