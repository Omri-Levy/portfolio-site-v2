import React from 'react';
import { ChildrenProps } from '~/utils/types';
import { Container } from './Container';
import { Content } from './Content';
import { Head } from '../../gatsby-theme-material-ui-top-layout/components/Head';
import { Header } from './Header';
import { TopToolbar } from './TopToolbar';
import { ConfigsGroup } from '~/components/Layout/ConfigsGroup';
import useDevice from '~/hooks/useDevice/useDevice';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const { isDesktop, isIpadPro } = useDevice();

	return (
		<Container>
			<Head />
			<Header />
			{(isDesktop || isIpadPro) && <ConfigsGroup />}
			<TopToolbar />
			<Content>{children}</Content>
			{isDesktop || isIpadPro || <ConfigsGroup />}
		</Container>
	);
};

export default Layout;
