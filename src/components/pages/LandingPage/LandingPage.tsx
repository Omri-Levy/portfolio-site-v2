import React, { useContext, useEffect } from 'react';
import useDevice from '~/hooks/useDevice/useDevice';
import { ThemeContext } from '../../../context/ThemeContext';
import { DesktopIllustration } from './DesktopIllustration';
import { MobileIllustration } from './MobileIllustration';
import { TabletIllustration } from './TabletIllustration';

const LandingPage: React.FunctionComponent = () => {
	const { isTabletUp, isTabletDown, isDesktop, isIpadPro } = useDevice();
	const { setIsLandingPage } = useContext(ThemeContext);

	useEffect(() => {
		setIsLandingPage(true);
	}, []);

	let content;

	if (isTabletDown || isIpadPro) {
		content = <MobileIllustration />;
	} else if (isDesktop) {
		content = <DesktopIllustration />;
	} else if (isTabletUp) {
		content = <TabletIllustration />;
	} else {
		content = <TabletIllustration />;
	}

	return content;
};

export default LandingPage;
