import { Box, Image, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroCarousel(props) {
	const { items } = props;

	return (
		<Box
			h="100vh"
			w="100vw"
			p={1}
			boxSize="cover"
			position="relative"
			boxSizing={1}
		>
			<Carousel
				infiniteLoop={true}
				centerMode={true}
				centerSlidePercentage={100}
				showThumbs={false}
				autoPlay
				// emulateTouch
				transitionTime={800}
				useKeyboardArrows={true}
				animationHandler={"fade"}
			>
				{items.map((item) => {
					return (
						<Image
							src={item.image}
							objectFit="cover"
							h="98vh"
							w="80vw"
							maxH="98vh"
						/>
					);
				})}
			</Carousel>
			<NextLink href={"/showcase"} passHref>
				<Button colorScheme="teal" variant="outline">
					Showcase
				</Button>
			</NextLink>
		</Box>
	);
}

export default HeroCarousel;
