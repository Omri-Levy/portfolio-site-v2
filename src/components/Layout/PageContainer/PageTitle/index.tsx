import { Typography } from '@material-ui/core';
import React from 'react';
import TranslateText from '../../Locales/TranslateText';
import { Props } from './types';
import styled, { css } from 'styled-components';

const StyledHeader = styled(`header`)(({ theme }) => {
	return css`
    display: flex;
    justify-content: center;
	`;
});
const StyledTypography = styled(Typography)(({ theme }) => {
	return css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing(0.1)}em;

    svg {
      font-size: inherit;
      margin-right: ${theme.spacing(0.03)}em;
    }
	`;
});

const PageTitle: React.FunctionComponent<Props> = ({ Icon, text }) => {


	return (
		<StyledHeader>
			<StyledTypography variant={`h1`}>
				{Icon && <Icon />}
				<TranslateText text={text} />
			</StyledTypography>
		</StyledHeader>
	);
};

export default PageTitle;
