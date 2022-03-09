import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import MainHeader from "./header/main-header";
import { seriespaper, babypink } from "./../theme";
import Footer from "./footer";

function Layout(props) {
	return (
		<Fragment>
			<Box
				backgroundColor={seriespaper}
				color={babypink}
				minHeight={"100vh"}
				display="flex"
				flexDirection="column"
			>
				<MainHeader />
				<main flexGrow="1">{props.children}</main>
				<Footer />
			</Box>
		</Fragment>
	);
}

export default Layout;
