import React from 'react';
import { ChildrenProps } from '../../utils/types';
import ConfigsGroup from './ConfigsGroup';
import Header from './Header';
import './cursor.css';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';
import { motion } from 'framer-motion';

const StyledWrapper = styled(motion.div)(({ theme }) => {
	return css`
    direction: ${theme.direction};
	`;
});
const StyledContainer = styled(Container)(({ theme }) => {
	return css`
    height: 100%;
	`;
});

const Layout: React.FunctionComponent<ChildrenProps> = ({ children }) => {

	return (
		<StyledWrapper>
			<Header />
			<StyledContainer
				// @ts-ignore
				component={`main`}
			>
				<ConfigsGroup />
				{children}
			</StyledContainer>
		</StyledWrapper>
	);
};

export default Layout;
