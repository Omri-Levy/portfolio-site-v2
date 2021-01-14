import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import useDevice from '../../hooks/useDevice';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Container from './Container';
import Content from './Content';
import Header from './Header';
import TopToolbar from './TopToolbar';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
  const { isDesktop, isIpadPro } = useDevice();
  const { isLandingPage } = useContext(ThemeContext);

  return (
    <Container>
      {!isLandingPage && <Header />}
      {!isLandingPage && (isDesktop || isIpadPro) && <ConfigsGroup />}
      {!isLandingPage && <TopToolbar />}
			<Content>{children}</Content>
			{!isLandingPage && (!isDesktop || !isIpadPro) && <ConfigsGroup />}
		</Container>
	);
};

export default Layout;
