import React from 'react';
import useDevice from '../../hooks/useDevice';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import { Container } from '@material-ui/core';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const { isDesktop, isIpadPro } = useDevice();

	return (
		<>
			<Header />
			<Container component={`main`}>
				{(isDesktop || isIpadPro) && <ConfigsGroup />}
				{children}
			</Container>
			{(!isDesktop || !isIpadPro) && <ConfigsGroup />}
		</>
	);
};

export default Layout;
