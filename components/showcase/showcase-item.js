import { Button, Link, Flex, Box } from "@chakra-ui/react";

function ShowcaseItem(props) {
	const { id, name, image, price } = props;
	return (
		<Flex flexDir="column">
			<li>
				<img src={"/" + image} alt={name} h="10rem" />
				<div>
					<h2>{name.toUpperCase()}</h2>
					<div>{price}</div>
					{/* <Button colorScheme="teal" variant="outline" as={Link} to="/showcase">
          Showcase
        </Button> */}
				</div>
			</li>
		</Flex>
	);
}

export default ShowcaseItem;
