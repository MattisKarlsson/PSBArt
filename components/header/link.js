import { Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Link({ href, children, ...props }) {
	return (
		<NextLink href={href}>
			<Text display="block" {...props}>
				<a {...props}>{children}</a>
			</Text>
		</NextLink>
	);
}
