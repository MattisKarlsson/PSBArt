import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

export const breakpoints = createBreakpoints({
	sm: "(min-width: 450px)",
	md: "(min-width: 495px)",
	lg: "(min-width: 680px)",
	xl: "(min-width: 900px)",
});

export const black = "#201E1D";
export const purplish = "#2D132C";
export const purply = "#2F1B41";
export const maroon = "#630000";
export const rend = "#703B3B";
export const redpur = "#623448";
export const horizonpurple = "#311D3F";
export const horizonpurpish = "#522546";
export const wine = "#430D27";
export const horizonpinkL = "#88304E";
export const electricpunk = "#7c1b3c";
export const horizonpinkd = "#681630";
export const darkred = "#801336";
export const repink = "#973961";
export const warmred = "#C72C41";
export const horizon = "#E23E57";
export const redish = "#EE4540";
export const redn = "#C14545";
export const orangy = "#F05941";
export const gyellow = "#c7a25d";
export const yellown = "#F7C873";
export const babypink = "#D62B70";
export const tealish = "#00faee";
export const greenish = "#2BC586";
export const seriespaper = "#DBDAD3";
export const paper = "#FAF4D0";
export const dirtclean = "#F8F8F8";

const theme = extendTheme({
	black,
	purplish,
	purply,
	maroon,
	rend,
	redpur,
	horizonpurple,
	horizonpurpish,
	wine,
	horizonpinkL,
	darkred,
	repink,
	warmred,
	horizon,
	redish,
	redn,
	orangy,
	yellown,
	babypink,
	seriespaper,
	paper,
	dirtclean,

	accent: tealish,
	primary: paper,
	secondary: yellown,
	error: redn,
	nprogress: `linear-gradient(90deg, ${babypink} 0%, ${greenish} 100%)`,
	backgroundGradient: `linear-gradient(225deg, ${warmred} 0%, ${horizonpurpish} 100%)`,

	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
	},

	IconButton: {
		color: tealish,
	},

	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
});

export default theme;
