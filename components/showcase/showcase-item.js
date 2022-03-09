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
	Image,
} from "@chakra-ui/react";

function ShowcaseItem({ id, name, image, price } = props) {
	return (
		<Box mt="3rem" d="inline-block">
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
				m="4rem auto"
			>
				<Image
					src={"/" + image}
					alt={name}
					w="100%"
					borderRadius="xl"
					mb={3}
					boxShadow="dark-lg"
					// h="95%"
					// boxSize="cover"
					// position="relative"
				/>
				<Stack
				// transform="translate(0, -50%)"
				>
					<Flex
						w="100%"
						h="5%"
						justifyContent="space-between"
						fontSize="20px"
						flexDirection="column"
					>
						<Text
							fontSize="22px"
							fontFamily="cursive"
							w="90%"
							mb="5px"
							boxShadow="lg"
							borderRadius="10px"
						>
							{name.toUpperCase()}
						</Text>
						<Text as="span" w="3rem" mb="25px">
							{price}€
						</Text>
						<Text w="100%">
							Phasellus congue, massa eu sodales scelerisque, tortor
							risus finibus risus.{" "}
						</Text>
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
