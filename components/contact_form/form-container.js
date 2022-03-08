import {
	Box,
	Button,
	Flex,
	FormControl,
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
import React from "react";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
	babypink,
	dirtclean,
	gyellow,
	horizon,
	horizonpinkL,
	tealish,
	wine,
	yellown,
} from "../../theme";
import NLink from "./../header/nextlink";
import { paper } from "./../../theme";

export default function FormContainer() {
	return (
		<Flex
			bg={useColorModeValue("gray.100", "gray.900")}
			align="center"
			justify="center"
			id="contact"
		>
			<Box
				borderRadius="lg"
				mt={"8rem"}
				mb={"8rem"}
				// m={{ base: 14, sm: 5, md: 2, lg: 12 }}
				p={{ base: 4 }}
			>
				<Box>
					<VStack spacing={{ base: 4, md: 8, lg: 10 }}>
						<Heading
							color={yellown}
							fontSize={{
								base: "5xl",
								md: "5xl",
							}}
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
								<NLink href={`https://github.com/MattisKarlsson`} isExternal>
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
								<NLink href={`https://www.instagram.com/psb.rhz/`} isExternal>
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
								color={useColorModeValue("gray.700", "whiteAlpha.900")}
								shadow="base"
							>
								<VStack spacing={5}>
									<FormControl isRequired>
										<FormLabel>Name</FormLabel>
										<InputGroup>
											<InputLeftElement children={<BsPerson />} />
											<Input type="text" name="name" placeholder="Your Name" />
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Email</FormLabel>

										<InputGroup>
											<InputLeftElement children={<MdOutlineEmail />} />
											<Input
												type="email"
												name="email"
												placeholder="Your Email"
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Message</FormLabel>

										<Textarea
											name="message"
											placeholder="Your Message"
											rows={6}
											resize="none"
										/>
									</FormControl>

									<Button
										colorScheme={horizonpinkL}
										bg={horizonpinkL}
										color={yellown}
										_hover={{
											bg: babypink,
											color: yellown,
										}}
										isFullWidth
									>
										Send Message
									</Button>
								</VStack>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
