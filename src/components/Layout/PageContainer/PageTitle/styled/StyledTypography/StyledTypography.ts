import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledTypography = styled(Typography)(({ theme }) => {


	return css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing(0.1)}em;

    svg {
      font-size: inherit;
      margin-inline-end: ${theme.spacing(0.03)}em;
    }

    @media only screen and (max-width: 28em) {
      font-size: 3em;
    }
	`;
});

export default StyledTypography;
