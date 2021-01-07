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
const colorsObj = (isDarkMode: boolean): Record<Key, string> => ({
	blue: isDarkMode ? blue[200] : blue[500],
	green: isDarkMode ? green[200] : green[500],
	purple: isDarkMode ? purple[200] : purple[500],
	red: isDarkMode ? red[200] : red[500],
});

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
