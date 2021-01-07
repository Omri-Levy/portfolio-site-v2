import { darken } from '@material-ui/core';
import { blue, green, purple, red } from '@material-ui/core/colors';
import { Key } from '~/utils/types';

const backgroundColor = `#1F1B24`;
const primaryBorderColor = (primaryColor: string): string =>
	darken(primaryColor, 0.25);
const primaryColor = blue[200];
const primaryTextColor = `#fff`;
const secondaryTextColor = `#000`;
const primaryContrastColor = `#eee`;
const secondaryContrastColor = `#393e46`;
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
