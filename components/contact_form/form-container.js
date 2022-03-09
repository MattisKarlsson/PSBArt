import { useForm } from "react-hook-form";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Textarea,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
	babypink,
	darkblue,
	horizonpinkL,
	tealish,
	yellown,
} from "../../theme";
import NLink from "./../header/nextlink";

export default function FormContainer() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	function onSubmit(values) {
		return new Promise(resolve => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 600);
		});
	}

	return (
		<Flex
			minH="calc(100vh - 72px)"
			bg={darkblue}
			align="center"
			justify="center"
			id="contact"
		>
			<Box
				borderRadius="lg"
				mt={"7rem"}
				mb={"7rem"}
				// m={{ base: 14, sm: 5, md: 2, lg: 12 }}
				p={{ base: 4 }}
			>
				<Box>
					<VStack spacing={{ base: 4, md: 8, lg: 10 }}>
						<Heading
							color={yellown}
							n
							fontSize={{
								base: "5xl",
								md: "5xl",
							}}
							boxShadow="lg"
						>
							Contact
						</Heading>
						<Stack
							spacing={{ base: 4, md: 12, lg: 20 }}
							direction={{ base: "column", md: "row" }}
						>
							<Stack
								align="center"
								justify="space-around"
								direction={{ base: "row", md: "column" }}
							>
								<NLink
									href={`https://github.com/MattisKarlsson`}
									isexternal
								>
									<IconButton
										color={tealish}
										aria-label="Github"
										size="lg"
										variant="ghost"
										fontSize="5xl"
										icon={<BsGithub />}
										isRound
									/>
								</NLink>
								<NLink
									href={`https://www.instagram.com/psb.rhz/`}
									isexternal
								>
									<IconButton
										color={tealish}
										aria-label="Instagram"
										size="lg"
										variant="ghost"
										fontSize="5xl"
										icon={<FaInstagram />}
										isRound
									/>
								</NLink>
							</Stack>

							<Box
								bg={useColorModeValue("white", "gray.700")}
								borderRadius="lg"
								p={8}
								color={useColorModeValue(
									"gray.700",
									"whiteAlpha.900",
								)}
								shadow="base"
							>
								<form onSubmit={handleSubmit(onSubmit)}>
									<VStack spacing={5}>
										<FormControl isInvalid={errors.name} isRequired>
											<FormLabel htmlFor="name">Name</FormLabel>
											<InputGroup>
												<InputLeftElement children={<BsPerson />} />
												<Input
													type="text"
													name="name"
													placeholder="Your Name"
													{...register("name", {
														required: "This is required",
														minLength: {
															value: 2,
															message: "Not valid name",
														},
													})}
												/>
												<FormErrorMessage>
													{errors.name && errors.name.message}
												</FormErrorMessage>
											</InputGroup>
										</FormControl>

										<FormControl isInvalid={errors.email} isRequired>
											<FormLabel htmlFor="email">Email</FormLabel>

											<InputGroup>
												<InputLeftElement
													children={<MdOutlineEmail />}
												/>
												<Input
													type="email"
													name="email"
													placeholder="Your Email"
													{...register("email", {
														required: "This is required",
														minLength: {
															value: 6,
															message: "Not valid Email",
														},
													})}
												/>
												<FormErrorMessage>
													{errors.email && errors.email.message}
												</FormErrorMessage>
											</InputGroup>
										</FormControl>

										<FormControl
											isInvalid={errors.message}
											isRequired
										>
											<FormLabel htmlFor="message">Message</FormLabel>

											<Textarea
												name="message"
												placeholder="Your Message"
												{...register("message", {
													required: "This is required",
													minLength: {
														value: 0,
														message: "Forget to include message ?",
													},
												})}
												rows={9}
												resize="none"
											/>
											<FormErrorMessage>
												{errors.message && errors.message.message}
											</FormErrorMessage>
										</FormControl>

										<Button
											colorScheme={horizonpinkL}
											bg={horizonpinkL}
											isLoading={isSubmitting}
											color={yellown}
											_hover={{
												bg: babypink,
												color: yellown,
											}}
											isFullWidth
											type={"submit"}
											boxShadow="dark-lg"
										>
											Send Message
										</Button>
									</VStack>
								</form>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
