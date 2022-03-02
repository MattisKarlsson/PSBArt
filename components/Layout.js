import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import MainHeader from "./header/main-header";

function Layout(props) {
	return (
		<Fragment>
			<Box>
				<MainHeader />
				<main>{props.children}</main>
			</Box>
		</Fragment>
	);
}

export default Layout;
