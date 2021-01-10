import React, { useContext } from 'react';
import { ConfigsGroup } from '~/components/Layout/ConfigsGroup';
import useDevice from '~/hooks/useDevice/useDevice';
import { ChildrenProps } from '~/utils/types';
import { ThemeContext } from '~/context/ThemeProvider';
import { Container } from './Container';
import { Content } from './Content';
import { Head } from './Head';
import { Header } from './Header';
import { Locales } from './Locales';
import { TopToolbar } from './TopToolbar';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const { isDesktop, isIpadPro } = useDevice();
	const { isLandingPage } = useContext(ThemeContext);

	return (
		<Locales>
			<Head />
			<Container>
				{!isLandingPage && <Header />}
				{!isLandingPage && (isDesktop || isIpadPro) && <ConfigsGroup />}
				{!isLandingPage && <TopToolbar />}
				<Content>{children}</Content>
				{!isLandingPage && (!isDesktop || !isIpadPro) && <ConfigsGroup />}
			</Container>
		</Locales>
	);
};

export default Layout;
