import { Box } from "@chakra-ui/react";
import ShowcaseItem from "./showcase-item";
import { darkblue } from "./../../theme";

function ShowcaseList({ items } = props) {
	return (
		<Box>
			<Box
				mt="80px"
				padding={4}
				w="100%"
				mx="auto"
				bg={darkblue}
				sx={{ columnCount: [1, 2, 3], columnGap: "6" }}
			>
				{items?.map(item => (
					<ShowcaseItem
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						image={item.image}
					/>
				))}
			</Box>
		</Box>
	);
}

export default ShowcaseList;
