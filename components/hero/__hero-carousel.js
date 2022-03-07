// import { Box, Image, Button } from "@chakra-ui/react";
// import NextLink from "next/link";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// function HeroCarousel(props) {
// 	const { items } = props;

// 	return (
// 		<Box
// 			h="100vh"
// 			w="100vw"
// 			p={1}
// 			boxSize="cover"
// 			position="relative"
// 			boxSizing={1}
// 		>
// 			<Carousel
// 				infiniteLoop={true}
// 				centerMode={true}
// 				centerSlidePercentage={100}
// 				showThumbs={false}
// 				autoPlay
// 				// emulateTouch
// 				transitionTime={800}
// 				useKeyboardArrows={true}
// 				animationHandler={"fade"}
// 			>
// 				{items.map((item) => {
// 					return (
// 						<Image
// 							src={item.image}
// 							objectFit="cover"
// 							h="98vh"
// 							w="80vw"
// 							maxH="98vh"
// 						/>
// 					);
// 				})}
// 			</Carousel>
// 			<NextLink href={"/showcase"} passhref>
// 				<Button colorScheme="teal" variant="outline">
// 					Showcase
// 				</Button>
// 			</NextLink>
// 		</Box>
// 	);
// }

// export default HeroCarousel;

// import React, { useState } from "react";
// import {
// 	Box,
// 	Button,
// 	Container,
// 	useBreakpointValue,
// 	Heading,
// 	IconButton,
// 	Stack,
// } from "@chakra-ui/react";
// import Slider from "react-slick";
// import NextLink from "next/link";

// const settings = {
// 	dots: true,
// 	arrows: false,
// 	fade: true,
// 	infinite: true,
// 	autoplay: true,
// 	speed: 500,
// 	autoplaySpeed: 5000,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// };

// export default function HeroCarousel(props) {
// 	const { items } = props;
// 	const [slider, setSlider] = React.useState(Slider);

// 	const top = useBreakpointValue({
// 		base: "90%",
// 		md: "50%",
// 	});
// 	const side = useBreakpointValue({
// 		base: "30%",
// 		md: "40px",
// 	});

// 	return (
// 		<Box
// 			position="relative"
// 			h="600px"
// 			w="full"
// 			overflow="hidden"
// 		>
// 			<IconButton
// 				aria-label="left-arrow"
// 				variant="ghost"
// 				position="absolute"
// 				left={side}
// 				top={top}
// 				transform={"translate(0%, -50%)"}
// 				zIndex={2}
// 				onClick={() => slider?.slickPrev()}
// 			>
// 				<BiLeftArrowAlt size="40px" />
// 			</IconButton>
// 			<IconButton
// 				aria-label="right-arrow"
// 				variant="ghost"
// 				position="absolute"
// 				right={side}
// 				top={top}
// 				transform={"translate(0%, -50%)"}
// 				zIndex={2}
// 				onClick={() => slider?.slickNext()}
// 			>
// 				<BiRightArrowAlt size="40px" />
// 			</IconButton>
// 			<Slider
// 				{...settings}
// 				ref={(slider) => setSlider(slider)}
// 			>
// 				{items.map((item, index) => (
// 					<Box
// 						key={index}
// 						height={"6x1"}
// 						position="relative"
// 						backgroundPosition="center"
// 						backgroundRepeat="no-repeat"
// 						backgroundSize="cover"
// 						backgroundImage={"url($(item.image))"}
// 					>
// 						<Container
// 							size="container.lg"
// 							h="600px"
// 							position="relative"
// 						>
// 							<Stack
// 								spacing={6}
// 								w={"full"}
// 								maxW={"lg"}
// 								position="absolute"
// 								top="50%"
// 								transform="translate(0, -50%)"
// 							>
// 								<NextLink href={"/showcase"} passhref>
// 									<Button colorScheme="red" variant="solid">
// 										SHOWCASE
// 									</Button>
// 								</NextLink>
// 								<Heading
// 									fontSize={{
// 										base: "3x1",
// 										md: "4x1",
// 										lg: "5x1",
// 									}}
// 								>
// 									{item.title}
// 								</Heading>
// 							</Stack>
// 						</Container>
// 					</Box>
// 				))}
// 			</Slider>
// 		</Box>
// 	);
// }
