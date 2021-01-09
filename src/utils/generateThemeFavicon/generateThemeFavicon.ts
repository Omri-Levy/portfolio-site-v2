import camelcase from 'lodash/camelCase';
import { Icon } from '~/utils/generateThemeFavicon/types';
import useAllFavicons from '../../hooks/useAllFavicons/useAllFavicons';
import { NewFavicon } from './types';

const generateThemeFavicon = (): boolean => {
	const oldFavicon = document.querySelector(`link[rel~='icon']`);
	const appleLinks = document.querySelectorAll(`link[rel~='apple-touch-icon']
		`);
	const { icons } = useAllFavicons();

	if (!icons || !icons.edges) {
		return false;
	}

	const { edges } = icons;
	const isDarkMode =
		JSON.parse(localStorage.getItem(`isDarkMode`) as string) || true;
	const primaryColor = localStorage.getItem(`primaryColor`) || `blue`;
	const mode = isDarkMode ? `dark` : `light`;
	const colorMode = camelcase(`${mode}-${primaryColor}`);

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
