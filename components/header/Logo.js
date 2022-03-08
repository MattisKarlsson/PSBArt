import React from "react";
import NLink from "./nextlink";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
	return (
		<Box {...[props]}>
			<NLink href={"/"} passhref w="75px">
				<Image
					bg="gray.200"
					borderRadius={6}
					src={`logotype.png`}
					boxSize="75px"
					objectFit="cover"
					position="static"
				/>
			</NLink>
		</Box>
	);
}
