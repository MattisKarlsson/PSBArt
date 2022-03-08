import { Box, Container, IconButton, Stack, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import {
	backgroundGradient,
	electricpunk,
	gyellow,
	tealish,
	horizonpurple,
} from "./../theme";
import NLink from "./header/nextlink";

export default function Footer(props) {
	return (
		<Box as="footer" {...props}>
			<Container
				// position="fixed"
				// zIndex={9999}
				as={Stack}
				maxW={"100vw"}
				py={3}
				direction={{ base: "row" }}
				spacing={16}
				justify={{ base: "center", sm: "space-between" }}
				align={{ base: "center" }}
				bgColor={horizonpurple}
				bgGradient={
					(backgroundGradient = `linear-gradient(225deg, ${gyellow} 10%, transparent, ${electricpunk} 100%)`)
				}
			>
				<Text color={tealish} fontSize="sm">
					© 2022 Mattis Karlsson{" "}
				</Text>
				<Stack direction={"row"} spacing={6}>
					<NLink href={`https://github.com/MattisKarlsson`} isExternal>
						<IconButton
							aria-label="Github"
							color={tealish}
							size="lg"
							variant="ghost"
							fontSize="5xl"
							icon={<BsGithub />}
							isRound
						/>{" "}
					</NLink>
					<NLink href={`https://www.instagram.com/psb.rhz/`} isExternal>
						<IconButton
							aria-label="Instagram"
							color={tealish}
							size="lg"
							variant="ghost"
							fontSize="5xl"
							icon={<FaInstagram />}
							isRound
						/>
					</NLink>
				</Stack>
			</Container>
		</Box>
	);
}
