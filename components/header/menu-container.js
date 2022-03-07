import { Flex } from "@chakra-ui/react";

function MenuContainer({ children, ...props }) {
	return (
		<Flex
			wrap="wrap"
			justify="space-between"
			w="100%"
			h="6rem"
			px="10"
			py="1"
			align="center"
			style={{ backdropFilter: `blur(3px)` }}
			bg={["transparent", "transparent"]}
			color={["primary.700", "primary.700"]}
			position="fixed"
			zIndex={9999}
			bgGradient="linear(to-r, red.500, orange.700"
			{...props}
		>
			{children}
		</Flex>
	);
}

export default MenuContainer;

// {/* <Box
// 	display={{
// 		base: isOpen ? "block" : "none",
// 		md: "block",
// 	}}
// 	flexBasis={{ base: "100%", md: "auto" }}
// 	>

// 	</Box> */}

// // {/* <Menu>
// // <MenuButton
// // 	as={IconButton}
// // 	size="lg"
// // 	icon={
// // 		<HamburgerIcon w={10} h={10} color="#1B1B1B" />
// // 	}
// // 	colorScheme="red"
// // 	variant="solid"
// // />
// // <MenuList>
// // 	<NextLink href={"/"} passhref>
// // 		<MenuItem>Home</MenuItem>
// // 	</NextLink>
// // 	<NextLink href={"/showcase"} passhref>
// // 		<MenuItem>Showcase</MenuItem>
// // 	</NextLink>
// // 	<NextLink href={"/contact"} passhref>
// // 		<MenuItem>Contact</MenuItem>
// // 	</NextLink>
// // </MenuList>
// // </Menu> */}
