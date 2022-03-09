import {
	Box,
	Container,
	Flex,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import NLink from "../header/nextlink";
import {
	darkwine,
	dirtclean,
	paper,
	tealish,
	white,
	whiteblue,
} from "./../../theme";

export default function HeroCarousel(props) {
	const { items } = props;

	return (
		<Flex
			minH="100vh"
			// w="100vw"
			justifyContent="center"
			alignItems="center"
		>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				autoplay={{
					delay: 4000,
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
							minH="100vh"
							width={"100vw"}
							p="auto"
							m="auto"
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
									top="75vh"
									transform="translate(0, -50%)"
									style={{
										backdropFilter: `blur(3px)`,
									}}
								>
									<Heading
										base="3x1"
										md="4x1"
										w="fit-content"
										alignSelf="center"
										lg="5x1"
										textAlign="center"
										textShadow="1px 1px #974043"
										color={tealish}
										boxShadow="dark-lg"
										borderRadius="10px"
									>
										{item.name}
									</Heading>
									<Text
										textColor={dirtclean}
										textShadow="1px 1px #974043"
										m="6"
										boxShadow="md"
										p="6"
										rounded="md"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing
										elit. Morbi vel odio fringilla.
									</Text>
									<NLink
										boxShadow="dark-lg"
										backgroundColor={tealish}
										align="center"
										color={darkwine}
										alignSelf="center"
										href={"/showcase"}
										w="120px"
										passhref
									>
										SHOWCASE
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
