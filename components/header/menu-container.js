import { Flex } from "@chakra-ui/react";
import {
	backgroundGradient,
	darkerblue,
	darkwine,
} from "./../../theme";

function MenuContainer({ children, ...props }) {
	return (
		<Flex
			justify="space-between"
			w="100%"
			h="5rem"
			px="8"
			py="6"
			align="center"
			style={{ backdropFilter: `blur(1.5px)` }}
			position="fixed"
			zIndex={9999}
			bgColor="transparent"
			bgGradient={
				(backgroundGradient = `linear-gradient(225deg, ${darkwine} 20%, transparent, ${darkerblue} 80%)`)
			}
			boxShadow="dark-lg"
			{...props}
		>
			{children}
		</Flex>
	);
}

export default MenuContainer;
