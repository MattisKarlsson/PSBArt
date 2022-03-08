import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { horizonpinkL } from "./../../theme";

export default function NLink({ href, children, ...props }) {
	return (
		<NextLink href={href} passhref="true">
			<Link
				as={"a"}
				borderRadius="6px"
				_hover={{
					bg: "yellow.400",
					color: horizonpinkL,
					borderRadius: "8px",
				}}
				display="block"
				{...props}
			>
				<a {...props}>{children}</a>
			</Link>
		</NextLink>
	);
}
