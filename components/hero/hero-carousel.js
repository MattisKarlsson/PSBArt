import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Stack,
} from "@chakra-ui/react";

import { Autoplay, Pagination, Navigation } from "swiper";
import NLink from "../header/nextlink";

export default function HeroCarousel(props) {
	const { items } = props;

	return (
		<Flex
			w="100vw"
			// mb="8"
			justifyContent="center"
			alignItems="center"
		>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				navigation
				pagination={{
					clickable: true,
				}}
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={swiper => console.log(swiper)}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{items.map(item => (
					<SwiperSlide>
						<Box
							key={item.id}
							position="relative"
							height="100vh"
							width={"100vw"}
							p="auto"
							m="auto"
							overflow={"hidden"}
							backgroundPosition="center"
							backgroundRepeat="no-repeat"
							backgroundSize="cover"
							backgroundImage={`url(${item.image})`}
						>
							<Container
								size="container.lg"
								h="600px"
								position="relative"
								p="auto"
								m="auto"
							>
								<Stack
									spacing={6}
									w="full"
									maxW="lg"
									position="relative"
									top="86vh"
									transform="translate(0, -50%)"
								>
									<Heading
										base="3x1"
										md="4x1"
										w="fit-content"
										alignSelf="center"
										lg="5x1"
										textAlign="center"
										style={{
											backdropFilter: `blur(2px)`,
										}}
										color="pink.500"
									>
										{item.name}
									</Heading>
									<NLink
										// position="relative"
										align="center"
										color="cyan.200"
										alignSelf="center"
										href={"/showcase"}
										w="120px"
										passhref
									>
										SHOWCASE
										{/* <Button
											color="red.100"
											// variant="ghost"
											// overflow="hidden"
											zIndex={9999}
											// mt="75vh"
											// mb="25vh"
										> */}
										{/* SHOWCASE */}
										{/* </Button> */}
									</NLink>
								</Stack>
							</Container>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
}
