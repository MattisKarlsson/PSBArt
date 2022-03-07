import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em",
});

const theme = extendTheme({
	colors: {
		black: "#201E1D",
		purplish: "#2D132C",
		purply: "#2F1B41",
		maroon: "#630000",
		rend: "#703B3B",
		redpur: "#623448",
		horizonpurple: "#311D3F",
		horizonpurpish: "#522546",
		wine: "#430D27",
		horizonpinkL: "#88304E",
		darkred: "#801336",
		repink: "#973961",
		warmred: "#C72C41",
		horizon: "#E23E57",
		redish: "#EE4540",
		redn: "#C14545",
		orangy: "#F05941",
		yellown: "#F7C873",
		babypink: "#D62B70",
		seriespaper: "#DBDAD3",
		paper: "#FAF4D0",
		dirtclean: "#F8F8F8",
	},
	styles: {
		global: {
			body: {
			//   bgGradient: 'linear(to-r, red.500, orange.700)',
				bg: 'yellow.800',
				color: 'yellow',
			},
		},
		a: {
			color: 'teal.500',
			_hover: {
			textDecoration: 'underline',
			},
		},
	
},)

export default theme;
