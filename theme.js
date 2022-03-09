import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

export const breakpoints = createBreakpoints({
	sm: "(min-width: 470px)",
	md: "(min-width: 515px)",
	lg: "(min-width: 680px)",
	xl: "(min-width: 900px)",
});

export const black = "#201E1D";
export const darkred = "#1c0f13";
export const purplish = "#2D132C";
export const horizonpurple = "#311D3F";
export const darkblue = "#172025";

export const purply = "#2F1B41";
export const darkgray = "#47454e";
export const maroon = "#630000";
export const rend = "#703B3B";
export const redpur = "#623448";
export const horizonpurpish = "#522546";
export const wine = "#430D27";
export const horizonpinkL = "#88304E";
export const electricpunk = "#7c1b3c";
export const horizonpinkd = "#681630";
export const darkishred = "#801336";
export const repink = "#973961";
export const warmred = "#C72C41";
export const horizonred = "#974043";
export const horizon = "#E23E57";
export const redish = "#e45559";
export const redn = "#C14545";
export const orangy = "#F05941";
export const orangish = "#fd8419";
export const gyellow = "#e0923f";
export const lightyellow = "#ffbc11";
// export const gyellow = "#f3a64a";
// export const gyellow = "#c7a25d";
// export const yellown = "#e6884a";
export const yellown = "#F7C873";
export const babypink = "#D62B70";
export const rose = "#ff9292";
export const whiteblue = "#eef8ff";
export const darkerblue = "#003c3c";
// export const darkerblue = "#00093c";
export const darkwine = "#2d0b00";

export const lightblue = "#5D6D7E";
export const tealish = "#6eede4";
// export const tealish = "#00faee";
export const greenish = "#2BC586";
export const seriespaper = "#DBDAD3";
export const paper = "#FAF4D0";
export const dirtclean = "#F8F8F8";
export const white = "#f6f2f1";

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
