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
import Link from "../header/link";

export default function HeroCarousel(props) {
	const { items } = props;

	return (
		<Flex
			w="100vw"
			// mb="8"
			justifyContent="center"
			alignItems="center"
		>
			<Link href={"/showcase"} passhref>
				<Button
					colorScheme="red"
					variant="solid"
					position="absolute"
					overflow="hidden"
					zIndex={9999}
					mt="75vh"
					mb="25vh"
				>
					SHOWCASE
				</Button>
			</Link>
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
							overflow={"hidden"}
							backgroundPosition="center"
							backgroundRepeat="no-repeat"
							backgroundSize="cover"
							backgroundImage={`url(${item.image})`}
						>
							{/* <Image
								src={item.image}
								backgroundPosition="center"
								backgroundRepeat="no-repeat"
								backgroundSize="cover"
								zIndex="0"
							/> */}
							<Container size="container.lg" h="600px" position="relative">
								<Stack
									spacing={6}
									w="full"
									maxW="lg"
									position="relative"
									top="65vh"
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
											backdropFilter: `blur(200px)`,
										}}
										color="orange"
									>
										{item.name}
									</Heading>
								</Stack>
							</Container>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
}
