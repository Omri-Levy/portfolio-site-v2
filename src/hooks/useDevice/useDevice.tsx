import { useBreakpoints } from '../../hooks/useBreakpoints';
import { MediaQueries } from './types';
import { useMediaQuery } from '@material-ui/core';

const useDevice: MediaQueries = () => {
	const desktopMedia = useBreakpoints('mlg', 'up');
	const tabletMedia = useBreakpoints('ms', 'up');
	const mobileMedia = useBreakpoints('sm', 'down');
	const XSMedia = useBreakpoints('xs', 'down');

	const isDesktop = useMediaQuery(desktopMedia);
	const isTablet = useMediaQuery(tabletMedia);
	const isMobile = useMediaQuery(mobileMedia);
	const isXS = useMediaQuery(XSMedia);

	const isIpadProWidth = useMediaQuery('(width: 1024px)');
	const isIpadProHeight = useMediaQuery('(height: 1366px)');
	const isIpadPro = isIpadProWidth && isIpadProHeight;

	return {
		isDesktop,
		isTablet,
		isMobile,
		isXS,
		isIpadPro,
	};
};

export default useDevice;
