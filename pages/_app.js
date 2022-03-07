import {
	ChakraProvider,
	ColorModeProvider,
	theme,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
