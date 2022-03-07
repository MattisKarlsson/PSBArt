import React from "react";
import Link from "./link";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
	return (
		<Box {...[props]}>
			<Link href={"/"} passhref>
				<Image src={`logotype.png`} boxSize="52%" objectFit="cover" />
			</Link>
		</Box>
	);
}
