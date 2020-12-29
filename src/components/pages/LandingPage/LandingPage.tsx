import React from 'react';
import useDevice from '~/hooks/useDevice/useDevice';
import { Container } from '~/components/Layout/Container';
import { DesktopIllustration } from './DesktopIllustration';
import { MobileIllustration } from './MobileIllustration';
import { TabletIllustration } from './TabletIllustration';

const LandingPage: React.FunctionComponent = () => {
	const { isMobile, isDesktop, isTabletUp, isIpadPro } = useDevice();

	let content;

	if (isMobile || isIpadPro) {
		content = <MobileIllustration />;
	} else if (isDesktop) {
		content = <DesktopIllustration />;
	} else if (isTabletUp) {
		content = <TabletIllustration />;
	} else {
		content = <TabletIllustration />;
	}

	return <Container>{content}</Container>;
};

export default LandingPage;
