import useAllFavicons from '../../hooks/useAllFavicons/useAllFavicons';
import { PrimaryColor } from '~/context/ThemeContext/types';
import { Icon } from '~/utils/generateThemeFavicon/types';
import { NewFavicon } from './types';

const generateThemeFavicon = (primaryColor: PrimaryColor): void => {
	const oldFavicon = document.querySelector(`link[rel~='icon']`);
	const appleLinks = document.querySelectorAll(`link[rel~='apple-touch-icon']`);
	const { icons } = useAllFavicons();

	if (!icons) {
		return;
	}

	const { edges } = icons;

	// get the last characters of the primary color hex due to the cached
	// file name
	const slicedHex = primaryColor.slice(primaryColor.length - 4, -1);

	// filter the array of favicons and leave in only the favicon with the file
	// name matching the passed in primary color hex code
	const faviconFilter = (icon: Icon) => icon.node.fluid.src.includes(slicedHex);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const filteredFavicon = edges.filter((icon: Icon) => faviconFilter(icon));

	// set the new favicon
	let newFavicon: NewFavicon;

	if (filteredFavicon[0]) {
		newFavicon = filteredFavicon[0].node.fluid.src;
	}

	if (oldFavicon && newFavicon && appleLinks) {
		oldFavicon[`href`] = newFavicon;
		appleLinks.forEach((appLink) => (appLink[`href`] = newFavicon));
	}
};

export default generateThemeFavicon;
