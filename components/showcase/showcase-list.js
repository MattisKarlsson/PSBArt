import { Box, SimpleGrid } from "@chakra-ui/react";
import ShowcaseItem from "./showcase-item";

function ShowcaseList(props) {
	const { items } = props;

	return (
		<Box>
			<SimpleGrid columns={3} minChildWidth="300px">
				{items?.map(item => (
					<ShowcaseItem
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						image={item.image}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
}

export default ShowcaseList;
