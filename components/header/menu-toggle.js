import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import {
	tealish,
	backgroundGradient,
	darkerblue,
	darkwine,
} from "./../../theme";

export default function MenuToggle({ toggle, isOpen, onClose }) {
	return (
		<Box display={{ base: "flex", sm: "none" }} onClick={toggle}>
			{isOpen ? (
				<CloseIcon
					w="2.5rem"
					h="2.5rem"
					mr={7}
					color={tealish}
					aria-label="Close Menu"
					position="absolute"
					right="2"
					top="6"
					bgGradient={
						(backgroundGradient = `linear-gradient(225deg, ${darkwine} 20%, transparent, ${darkerblue} 80%)`)
					}
					// style={{
					// 	transform: "translateX(65%)",
					// }}
				/>
			) : (
				<HamburgerIcon
					w="2.9rem"
					h="2.9rem"
					boxShadow="dark-lg"
					color={tealish}
					aria-label="Hamburger Menu"
				/>
			)}
		</Box>
	);
}
