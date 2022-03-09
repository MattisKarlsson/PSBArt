import { Box } from "@chakra-ui/react";
import { getFeaturedItems } from "../public/showcase-data";
import HeroCarousel from "../components/hero/hero-carousel";

export default function HomePage() {
	const featuredItems = getFeaturedItems();

	return (
		<Box>
			<HeroCarousel items={featuredItems} />
		</Box>
	);
}
