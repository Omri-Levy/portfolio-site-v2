import React from 'react';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import { Container, Theme, useMediaQuery } from '@material-ui/core';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up(`sm`));

	return (
		<>
			<Header />
			<Container component={`main`}>
				{smUp && <ConfigsGroup />}
				{children}
			</Container>
			{!smUp && <ConfigsGroup />}
		</>
	);
};

export default Layout;
