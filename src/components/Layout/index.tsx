import React from 'react';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import './cursor.css';
import styled, { css } from 'styled-components';

const StyledWrapper = styled(`div`)(({ theme }) => {
	return css`
    direction: ${theme.direction};
	`;
});
const StyledContainer = styled(`main`)(({ theme }) => {
	return css`

	`;
});

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {

	return (
		<StyledWrapper>
			<Header />
			<StyledContainer>
				<ConfigsGroup />
				{children}
			</StyledContainer>
		</StyledWrapper>
	);
};

export default Layout;
