import { darken } from '@material-ui/core';

const backgroundColor = `#222831`;
const primaryColor = `#3e96ff`;
const primaryBorderColor = (primaryColor: string): string => {
	return darken(primaryColor, 0.25);
};
const primaryTextColor = `#fff`;
const secondaryTextColor = `#000`;
const primaryContrastColor = `#eee`;
const secondaryContrastColor = `#393e46`;

export {
	backgroundColor,
	primaryColor,
	primaryBorderColor,
	primaryTextColor,
	secondaryTextColor,
	primaryContrastColor,
	secondaryContrastColor,
};
