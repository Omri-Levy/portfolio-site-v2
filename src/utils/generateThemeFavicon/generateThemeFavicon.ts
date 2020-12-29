import useAllFavicons from '../../hooks/useAllFavicons/useAllFavicons';
import { Icon } from './types';
import { PrimaryColor } from '~/context/ThemeContext/types';

const generateThemeFavicon = (primaryColor: PrimaryColor): void => {
	const oldFavicon = document.querySelector(`link[rel~='icon']`);
	const appleLinks = document.querySelectorAll(`link[rel~='apple-touch-icon']`);
	const { icons } = useAllFavicons();

	if (!icons) {
		return;
	}

	// get the last characters of the primary color hex due to the cached
	// file name.
	const slicedHex = primaryColor.slice(primaryColor.length - 4, -1);

	// return the favicon with the latest picked theme color
	const newFavicon = icons.edges.filter((icon: Icon) =>
		icon.node.fluid.src.includes(slicedHex),
	)[0].node.fluid.src;

	if (oldFavicon) {
		oldFavicon[`href`] = newFavicon;
	}

	appleLinks.forEach((appLink) => (appLink[`href`] = newFavicon));
};

export default generateThemeFavicon;
