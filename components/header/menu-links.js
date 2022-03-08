import { Box, Button, Stack } from "@chakra-ui/react";
import NLink from "./nextlink";

export default function MenuLinks({ isOpen }) {
	return (
		<Box
			display={{
				base: isOpen ? "flex" : "none",
				sm: "flex",
			}}
			flexBasis={{ base: "flex", md: "auto" }}
		>
			<Stack
				color="cyan.200"
				fontSize="18px"
				align="center"
				spacing={6}
				justify={["center", "flex-end", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[220, 0, 0, 0]}
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
