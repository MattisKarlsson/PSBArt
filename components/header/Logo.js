import React from "react";
import NextLink from "next/link";
import { Box, Image } from "@chakra-ui/react";

export default function Logo() {
	return (
		<Box>
			<NextLink href={"/"} passHref>
				<Image
					src={`logotype.png`}
					boxSize="58%"
					objectFit="cover"
				/>
			</NextLink>
		</Box>
	);
}
