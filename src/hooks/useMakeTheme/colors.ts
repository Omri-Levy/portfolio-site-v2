import { darken } from '@material-ui/core';
import { blue, green, purple, red } from '@material-ui/core/colors';
import { Key } from '~/utils/types';

const backgroundColor = `rgb(31, 27, 36)`;
const primaryBorderColor = (primaryColor: string): string =>
	darken(primaryColor, 0.25);
const primaryColor = `rgb(144, 202, 249)`;
const primaryTextColor = `rgb(255, 255, 255)`;
const secondaryTextColor = `rgb(0, 0, 0)`;
const primaryContrastColor = `rgb(238, 238, 238)`;
const secondaryContrastColor = `rgb(57, 62, 70)`;
const colorsObj = (isDarkMode: boolean): Record<Key, string> => {
	const shade = isDarkMode ? 200 : 900;

	return {
		blue: blue[shade],
		green: green[shade],
		purple: purple[shade],
		red: red[shade],
	};
};

export {
	backgroundColor,
	primaryColor,
	primaryBorderColor,
	primaryTextColor,
	secondaryTextColor,
	primaryContrastColor,
	secondaryContrastColor,
	colorsObj,
};
