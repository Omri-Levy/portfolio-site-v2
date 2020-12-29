import React from 'react';
import { ChildrenProps } from '~/utils/types';
import { BottomToolbar } from './ConfigToolbar';
import { Container } from './Container';
import { Content } from './Content';
import { Head } from './Head';
import { Header } from './Header';
import { TopToolbar } from './TopToolbar';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return (
		<Container>
			<Head />
			<Header />
			<TopToolbar />
			<Content>{children}</Content>
			<BottomToolbar />
		</Container>
	);
};

export default Layout;
