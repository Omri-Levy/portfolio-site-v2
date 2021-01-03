import React from 'react';
import { ChildrenProps } from '~/utils/types';
import { Container } from './Container';
import { Content } from './Content';
import { Head } from './Head';
import { Header } from './Header';
import { TopToolbar } from './TopToolbar';
import { ConfigsGroup } from '~/components/Layout/ConfigsGroup';
import useDevice from '~/hooks/useDevice/useDevice';
import { Locales } from '~/components/Layout/Locales';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const { isDesktop, isIpadPro } = useDevice();

	return (
		<Locales>
			<Head />
			<Container>
				<Header />
				{(isDesktop || isIpadPro) && <ConfigsGroup />}
				<TopToolbar />
				<Content>{children}</Content>
				{isDesktop || isIpadPro || <ConfigsGroup />}
			</Container>
		</Locales>
	);
};

export default Layout;
