import { Spacer, Box, Flex } from "@chakra-ui/react";
import Logo from "./logo";
import MenuComponent from "./menu-component";

function MainHeader() {
	return (
		<Flex
			justify="space-between"
			w="100%"
			h="6rem"
			px="10"
			py="1"
			align="center"
			style={{ backdropFilter: `blur(2px)` }}
			bg="#1A1A1A2A"
			position="fixed"
			zIndex={1}
		>
			<Box p="2">
				<Logo />
			</Box>
			<Spacer />
			<Box>
				<MenuComponent />
			</Box>
		</Flex>
	);
}

// {/* <header>
//   <nav>
//     <ul>
//       <li>
//       <NextLink href={"/showcase"} passHref>Art Showcase</NextLink>
//         <Link href="/showcase"></Link>
//       </li>
//     </ul>
//   </nav>
// </header> */}
export default MainHeader;
