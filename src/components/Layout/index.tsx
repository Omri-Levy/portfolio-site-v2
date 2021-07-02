import React from 'react';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import './cursor.css';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

const StyledWrapper = styled(`div`)(({ theme }) => {
	return css`
    direction: ${theme.direction};
	`;
});

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {

	return (
		<StyledWrapper>
			<Header />
			<Container component={`main`}>
				<ConfigsGroup />
				{children}
			</Container>
		</StyledWrapper>
	);
};

export default Layout;
