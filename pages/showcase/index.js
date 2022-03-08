import { Box } from "@chakra-ui/react";
import { getAllItems } from "../../../showcase-data";
import ShowcaseList from "../../components/showcase/showcase-list";

export default function Showcase() {
	const allItems = getAllItems();

	return (
		<Box>
			<ShowcaseList items={allItems} />
		</Box>
	);
}
