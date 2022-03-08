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
		<Box mt="3rem">
			<Container
				// size="container.lg"
				h="350px"
				boxSize="cover"
				// w="22%"
				display="flex"
				flexDirection="column"
				align="center"
				// position="relative"
				maxW="40rem"
				m="5rem auto"
			>
				<img
					src={"/" + image}
					alt={name}
					w="100%"
					h="95%"
					mb="5px"
					boxSize="cover"
					// position="relative"
				/>
				<Stack
				// maxW="lg"
				// spacing={6}
				// w="full"
				// position="relative"
				// top="65vh"
				// transform="translate(0, -50%)"
				>
					<Flex w="100%" h="5%" justifyContent="space-between" fontSize="18px">
						<Text w="90%" mb="15px">
							{name.toUpperCase()}
						</Text>
						<Text w="10%">{price}</Text>
						{/* <Button colorScheme="teal" variant="outline" as={Link} to="/showcase">
          Showcase
        </Button> */}
					</Flex>
				</Stack>
			</Container>
		</Box>
	);
}

export default ShowcaseItem;
