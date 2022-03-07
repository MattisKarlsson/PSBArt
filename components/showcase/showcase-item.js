import {
	Button,
	Link,
	Flex,
	Box,
	Grid,
	Text,
	SimpleGrid,
	Container,
	Stack,
} from "@chakra-ui/react";

function ShowcaseItem(props) {
	const { id, name, image, price } = props;
	return (
		<Box>
			<Container
				// size="container.lg"
				h="200px"
				boxSize="cover"
				w="200px"
				align="center"
				// position="relative"
				// maxW="40rem"
				m="5rem auto"
			>
				<img src={"/" + image} alt={name} w="100vw" position="relative" />
				<Stack
				// maxW="lg"
				// spacing={6}
				// w="full"
				// position="relative"
				// top="65vh"
				// transform="translate(0, -50%)"
				>
					<Box position="relative">
						<Text>{name.toUpperCase()}</Text>
						<Text>{price}</Text>
						{/* <Button colorScheme="teal" variant="outline" as={Link} to="/showcase">
          Showcase
        </Button> */}
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}

export default ShowcaseItem;
