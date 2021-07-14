import React from 'react';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import './cursor.css';
import { Container } from '@material-ui/core';
import { StyledWrapper } from './styled/StyledWrapper';

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {

	return (
		<StyledWrapper>
			<Header />
			<Container
				// @ts-ignore
				component={`main`}
			>
				<ConfigsGroup />
				{children}
			</Container>
		</StyledWrapper>
	);
};

export default Layout;
