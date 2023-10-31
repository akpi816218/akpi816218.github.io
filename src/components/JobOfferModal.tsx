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
import { useMemo, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

export default function JobOfferModal({
	className = '',
	color,
	content = 'Open job offer form',
	variant
}: {
	className?: string;
	color: ButtonProps['color'];
	content?: string;
	variant?: ButtonProps['variant'];
}) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure(),
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
		<>
			<Button
				className={className}
				color={color}
				onPress={onOpen}
				variant={variant}
			>
				{content}
			</Button>
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
