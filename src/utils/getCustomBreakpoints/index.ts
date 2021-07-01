import { useMediaQuery } from '@material-ui/core';
import { Breakpoint, Direction } from './types';

// used as a workaround to Material-UI's issue with custom breakpoints.
// returns a boolean when no theme is provided and returns a media query
// string when a theme is provided.
const getCustomBreakpoints = (
	breakpoint: Breakpoint,
	direction: Direction,
	returnBoolean?: boolean,
) => {
	// material ui uses pixels for their breakpoints and I use em units.
	const breakpoints = {
		down: {
			sm: `@media only screen and (max-width: 30em)`,
			md: `@media only screen and (max-width: 48em)`,
			lg: `@media only screen and (max-width: 62em)`,
			xl: `@media only screen and (max-width: 80em)`,
		},
		up: {
			xs: `@media only screen and (min-width: 0)`,
			sm: `@media only screen and (min-width: 30em)`,
			md: `@media only screen and (min-width: 48em)`,
			lg: `@media only screen and (min-width: 62em)`,
			xl: `@media only screen and (min-width: 80em)`,
		},
	};

	if (returnBoolean) {
		return useMediaQuery(breakpoints[direction][breakpoint]);
	}

	return breakpoints[direction][breakpoint];
};

export default getCustomBreakpoints;
