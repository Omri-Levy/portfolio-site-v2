import React from 'react';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import { Container } from '@material-ui/core';
import './cursor.css';
import styled, { css } from 'styled-components';

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
