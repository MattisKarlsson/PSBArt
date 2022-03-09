import { Box, Flex, Stack } from "@chakra-ui/react";
import {
	tealish,
	backgroundGradient,
	darkerblue,
	darkwine,
} from "./../../theme";
import NLink from "./nextlink";

export default function MenuLinks({ isOpen }) {
	return (
		<Box
			// minH="100vh"
			display={{
				base: isOpen ? "flex" : "none",
				sm: "flex",
			}}
			flexBasis={{ base: "flex", sm: "auto" }}
		>
			<Stack
				textShadow="1.2px 1.2px #974043"
				boxShadow="dark-lg"
				rounded="md"
				color={tealish}
				fontSize="20px"
				alignItems={"center"}
				w="63vw"
				align="center"
				spacing={6}
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[280, 0, 0, 0]}
				px="2rem"
				fontFamily="chivo"
				bgColor="transparent"
				borderRadius="6px"
			>
				<NLink href="/" passHref>
					HOME
				</NLink>
				<NLink href="/showcase" passHref>
					SHOWCASE
				</NLink>
				<NLink href="/contact" passHref>
					CONTACT
				</NLink>
			</Stack>
		</Box>
	);
}
