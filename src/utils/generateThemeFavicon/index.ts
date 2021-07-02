import { camelCase } from 'lodash';
import useAllFavicons from '../../hooks/useAllFavicons';
import { Icon, NewFavicon } from './types';

const generateThemeFavicon = (): boolean => {
	if (typeof window === `undefined` || typeof document === `undefined`) {
		return false;
	}

	const oldFavicon = document.querySelector(`link[rel~='icon']`);
	const appleLinks = document.querySelectorAll(`link[rel~='apple-touch-icon']
	`);
	const { icons } = useAllFavicons();

	if (!icons || !icons.edges) {
		return false;
	}

	const { edges } = icons;
	let isDarkMode = localStorage.getItem(`isDarkMode`) || false;

	if (typeof isDarkMode === `string`) {
		isDarkMode = JSON.parse(isDarkMode);
	}

	const primaryColor = localStorage.getItem(`primaryColor`) || `blue`;
	const mode = isDarkMode ? `dark` : `light`;
	const colorMode = camelCase(`${mode}-${primaryColor}`);

	// filter the array of favicons and leave in only the favicon with the file
	// name matching the passed in primary color hex code
	const faviconFilter = (icon: Icon) => {
		return icon.node.fluid?.src.includes(colorMode);
	};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const filteredFavicon = edges?.filter((icon: Icon) => faviconFilter(icon));

	// set the new favicon
	let newFavicon: NewFavicon;

	if (filteredFavicon[0]) {
		newFavicon = filteredFavicon[0].node.fluid.src;
	}

	if (oldFavicon && newFavicon && appleLinks) {
		oldFavicon[`href`] = newFavicon;
		appleLinks.forEach((appLink) => (appLink[`href`] = newFavicon));

		return true;
	}

	return false;
};
export default generateThemeFavicon;
