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
	Image,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Textarea,
	useDisclosure
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import isEmail from 'validator/lib/isEmail';

createRoot(document.getElementById('root')!).render(<MyCard />);

function MyCard() {
	const generated = window.location.search === '?generate=1',
		{ isOpen, onOpen, onOpenChange } = useDisclosure(),
		[nameVal, setNameVal] = useState(''),
		[emailVal, setEmailVal] = useState(''),
		[descVal, setDescVal] = useState(''),
		[longDescVal, setLongDescVal] = useState('');

	const nameIsValid = useMemo(() => nameVal.length > 0, [nameVal]),
		emailIsValid = useMemo(() => isEmail(emailVal), [emailVal]),
		descIsValid = useMemo(() => descVal.length > 0, [descVal]),
		longDescIsValid = useMemo(() => {
			return longDescVal.length >= 500;
		}, [longDescVal]),
		formValid = useMemo(
			() => nameIsValid && emailIsValid && descIsValid && longDescIsValid,
			[nameIsValid, emailIsValid, descIsValid, longDescIsValid]
		);

	return (
		<RootLayout noFooter={true}>
			<main className="flex flex-col justify-center items-center h-screen p-32 text-6xl bg-gradient-to-tl from-pink-500 to-cyan-500">
				<Card
					className="p-8 rounded-3xl"
					isBlurred
					isFooterBlurred
					shadow="lg"
					isHoverable
				>
					<CardHeader className="flex gap-3">
						<Image
							alt="akpi logo"
							height={40}
							radius="sm"
							src="/assets/img/akpi_logo.svg"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-3xl">Akhil Pillai</p>
							<a className="text-small text-slate-300" href="/">
								akpi.is-a.dev
							</a>
						</div>
					</CardHeader>
					<Divider />
					<CardBody className="text-3xl">
						<p>
							Hi, I'm a young developer located in the United States. I have
							experience with TypeScript and JavaScript, especially with
							building web apps like this with React and Vite. I can design and
							build prettified emails with React as well. I can design and build
							customized Discord bots as well.
							<br />
							I'm looking for small freelancing projects, cash or check only for
							now. If you have a job for me, please{' '}
							{generated ? (
								<>
									email me at{' '}
									<Link
										href="mailto:jobs@akpi.is-a.dev"
										className="text-2xl"
										color="success"
										underline="always"
										isExternal
									>
										jobs@akpi.is-a.dev
									</Link>
								</>
							) : (
								'launch the form below'
							)}{' '}
							to let me know.
							{generated || (
								<>
									<br />
									{/* <Button
										className="text-lg mt-4"
										color="warning"
										onPress={onOpen}
									>
										I've got a job for you!
									</Button> */}
									<JobOfferModal className="text-lg mt-4" color="warning" />
								</>
							)}
						</p>
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

				<Modal
					size="5xl"
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					shadow="lg"
					backdrop="blur"
					isDismissable
				>
					<ModalContent>
						{onClose => (
							<>
								<ModalHeader className="flex flex-col gap-1">
									Job Offer
								</ModalHeader>
								<ModalBody>
									<Input
										value={nameVal}
										isInvalid={!nameIsValid}
										errorMessage={nameIsValid || 'Name is required'}
										onValueChange={setNameVal}
										id="i-name"
										placeholder="Full Name"
										className="text-xl"
										variant="underlined"
										isRequired
										autoFocus
									/>
									<Input
										value={emailVal}
										isInvalid={!emailIsValid}
										errorMessage={emailIsValid || 'Email is invalid'}
										onValueChange={setEmailVal}
										id="i-email"
										placeholder="Email"
										className="text-xl"
										variant="underlined"
										isRequired
									/>
									<Input
										value={descVal}
										isInvalid={!descIsValid}
										errorMessage={descIsValid || 'Description is required'}
										onValueChange={setDescVal}
										id="i-desc"
										placeholder="Short description"
										className="text-xl"
										variant="underlined"
										isRequired
									/>
									<Divider />
									<Textarea
										value={longDescVal}
										isInvalid={!longDescIsValid}
										errorMessage={
											longDescIsValid ||
											'Long description must be at least 500 characters'
										}
										onValueChange={setLongDescVal}
										minRows={5}
										id="i-longdesc"
										label="Long description"
										labelPlacement="outside"
										placeholder="Describe your job offer here..."
										className="text-xl"
										variant="bordered"
										isRequired
									/>
								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="light" onPress={onClose}>
										Close
									</Button>
									<Button
										disabled={!formValid}
										color={formValid ? 'primary' : 'warning'}
										onPress={() => {
											if (!formValid) return;
											onClose();
											// open mailto link in new tab, set body and subject
											window.open(
												`mailto:jobs@akpi.is-a.dev?subject=${encodeURIComponent(
													`Job Offer — ${descVal}`
												)}&body=${encodeURIComponent(
													`Job offer from ${nameVal} <${emailVal}>\n\n${longDescVal}`
												)}`
											);
										}}
									>
										Continue
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</main>
		</RootLayout>
	);
}
