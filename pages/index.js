import { Box } from "@chakra-ui/react";
import { getFeaturedItems } from "../../showcase-data";
import HeroCarousel from "../components/hero/hero-carousel";

export default function HomePage() {
	const featuredItems = getFeaturedItems();

	return (
		<Box>
			<HeroCarousel items={featuredItems} />

			{/* <ArtList items={allItems} /> */}
		</Box>
	);
}
