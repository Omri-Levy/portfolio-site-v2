import { useBreakpoints } from "~/hooks/useBreakpoints";
import { MediaQueries } from "./types";
import { useMediaQuery } from "@material-ui/core";

const useDevice: MediaQueries = () => {
	const desktopMedia = useBreakpoints(`mlg`, `up`);
	const tabletUpMedia = useBreakpoints(`ms`, `up`);
	const tabletDownMedia = useBreakpoints(`md`, `down`);
	const mobileMedia = useBreakpoints(`sm`, `down`);
	const XSMedia = useBreakpoints(`xs`, `down`);

	const isDesktop = useMediaQuery(desktopMedia);
	const isTabletUp = useMediaQuery(tabletUpMedia);
	const isTabletDown = useMediaQuery(tabletDownMedia);
	const isMobile = useMediaQuery(mobileMedia);
	const isXS = useMediaQuery(XSMedia);

	const isIpadProWidth = useMediaQuery(`(width: 1024px)`);
	const isIpadProHeight = useMediaQuery(`(height: 1366px)`);
	const isIpadPro = isIpadProWidth && isIpadProHeight;

	return {
		isDesktop,
		isTabletUp,
		isTabletDown,
		isMobile,
		isXS,
		isIpadPro,
	};
};

export default useDevice;
