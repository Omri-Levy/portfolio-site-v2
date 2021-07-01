import React from 'react';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import { Container } from '@material-ui/core';
import getCustomBreakpoints from '../../utils/getCustomBreakpoints';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const smDown = getCustomBreakpoints(`sm`, `down`);

	return (
		<>
			<Header />
			<Container component={`main`}>
				{!smDown && <ConfigsGroup />}
				{children}
			</Container>
			{smDown && <ConfigsGroup />}
		</>
	);
};

export default Layout;
