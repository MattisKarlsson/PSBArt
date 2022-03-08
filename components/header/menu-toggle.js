import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { tealish } from "./../../theme";

export default function MenuToggle({ toggle, isOpen }) {
	return (
		<Box display={{ base: "flex", sm: "none" }} onClick={toggle}>
			{isOpen ? (
				<CloseIcon
					// align="right"
					// position="absolute"
					// float="right"
					w="2.5rem"
					h="2.5rem"
					color={tealish}
					aria-label="Close Menu"
				/>
			) : (
				<HamburgerIcon
					w="2.5rem"
					h="2.5rem"
					color={tealish}
					aria-label="Hamburger Menu"
				/>
			)}
		</Box>
	);
}
