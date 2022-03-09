import { Box, Button, Stack } from "@chakra-ui/react";
import NLink from "./nextlink";
import { tealish } from "./../../theme";

export default function MenuLinks({ isOpen }) {
	return (
		<Box
			display={{
				base: isOpen ? "flex" : "none",
				sm: "flex",
			}}
			flexBasis={{ base: "flex", sm: "auto" }}
		>
			<Stack
				color={tealish}
				fontSize="18px"
				align="center"
				spacing={6}
				justify={["center", "flex-end", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[220, 0, 0, 0]}
				px="2rem"
				fontFamily="chivo"
			>
				<NLink href="/" passHref>
					Home
				</NLink>
				<NLink href="/showcase" passHref>
					Showcase
				</NLink>
				<NLink href="/contact" passHref>
					Contact
				</NLink>
			</Stack>
		</Box>
	);
}
