import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

export default function MenuToggle({ toggle, isOpen }) {
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? (
				<CloseIcon aria-label="Close Menu" />
			) : (
				<HamburgerIcon aria-label="Hamburger Menu" />
			)}
		</Box>
	);
}
