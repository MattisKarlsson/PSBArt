import { Box, UnorderedList } from "@chakra-ui/react";
import ShowcaseItem from "./showcase-item";

function ShowcaseList(props) {
	const { items } = props;

	return (
		<Box>
			<UnorderedList w="90%" maxW="40rem" m="5rem auto">
				{items?.map((item) => (
					<ShowcaseItem
						key={item.id}
						id={item.id}
						name={item.name}
						image={item.image}
					/>
				))}
			</UnorderedList>
		</Box>
	);
}

export default ShowcaseList;
