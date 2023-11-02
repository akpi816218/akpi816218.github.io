import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Input,
	Divider,
	Textarea,
	ModalFooter,
	Button,
	useDisclosure,
	ButtonProps
} from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

export default function JobOfferModal({
	className = '',
	color,
	containerStyle = '',
	content = 'Open job offer form',
	variant
}: {
	className?: string;
	color: ButtonProps['color'];
	containerStyle?: string;
	content?: string;
	variant?: ButtonProps['variant'];
}) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure(),
		[nameVal, setNameVal] = useState(localStorage.getItem('name') || ''),
		[emailVal, setEmailVal] = useState(localStorage.getItem('email') || ''),
		[descVal, setDescVal] = useState(localStorage.getItem('desc') || ''),
		[longDescVal, setLongDescVal] = useState(
			localStorage.getItem('longDesc') || ''
		);

	const nameIsValid = useMemo(() => nameVal.length > 0, [nameVal]),
		emailIsValid = useMemo(() => isEmail(emailVal), [emailVal]),
		descIsValid = useMemo(() => descVal.length > 0, [descVal]),
		longDescIsValid = useMemo(() => longDescVal.length > 0, [longDescVal]),
		formValid = useMemo(
			() => nameIsValid && emailIsValid && descIsValid && longDescIsValid,
			[nameIsValid, emailIsValid, descIsValid, longDescIsValid]
		);

	useEffect(() => {
		window.localStorage.setItem('name', nameVal);
		window.localStorage.setItem('email', emailVal);
		window.localStorage.setItem('desc', descVal);
		window.localStorage.setItem('longDesc', longDescVal);
	}, [nameVal, emailVal, descVal, longDescVal]);

	return (
		<>
			<Button
				radius="lg"
				className={className}
				color={color}
				onPress={onOpen}
				variant={variant}
			>
				{content}
			</Button>
			<Modal
				size="5xl"
				motionProps={{
					variants: {
						enter: {
							opacity: 1,
							y: 0,
							transition: {
								duration: 1,
								ease: 'anticipate'
							}
						},
						exit: {
							opacity: 0,
							y: 100,
							transition: {
								duration: 1,
								ease: 'anticipate'
							}
						}
					}
				}}
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
										longDescIsValid || 'Please complete this field to continue'
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
									{formValid ? 'Continue' : 'Please complete the form'}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
