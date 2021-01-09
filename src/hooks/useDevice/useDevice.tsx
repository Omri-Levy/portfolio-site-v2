import { useBreakpoints } from '~/hooks/useBreakpoints';
import { MediaQueries } from './types';
import { useMediaQuery } from '@material-ui/core';

const useDevice: MediaQueries = () => {
	const desktopMedia = useBreakpoints(`mlg`, `up`);
	const tabletUpMedia = useBreakpoints(`ms`, `up`);
	const tabletDownMedia = useBreakpoints(`md`, `down`);
	const mobileDownMedia = useBreakpoints(`sm`, `down`);
	const mobileUpMedia = useBreakpoints(`sm`, `up`);
	const XSMedia = useBreakpoints(`xs`, `down`);

	const isDesktop = useMediaQuery(desktopMedia);
	const isTabletUp = useMediaQuery(tabletUpMedia);
	const isTabletDown = useMediaQuery(tabletDownMedia);
	const isMobileUp = useMediaQuery(mobileUpMedia);
	const isMobileDown = useMediaQuery(mobileDownMedia);
	const isXS = useMediaQuery(XSMedia);

	const isIpadProWidth = useMediaQuery(`(width: 1024px)`);
	const isIpadProHeight = useMediaQuery(`(height: 1366px)`);
	const isIpadPro = isIpadProWidth && isIpadProHeight;

	return {
		isDesktop,
		isTabletUp,
		isTabletDown,
		isMobileUp,
		isMobileDown,
		isXS,
		isIpadPro,
	};
};

export default useDevice;
