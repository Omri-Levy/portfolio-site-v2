import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import useThemeContext
	from '../../../../../../context/ThemeProvider/useThemeContext';

const StyledTypography = styled(Typography)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing(0.1)}em;

    svg {
      font-size: inherit;
      margin-right: ${isRTL ? `unset` : `${theme.spacing(0.03)}em`};
      margin-left: ${isRTL ? `${theme.spacing(0.03)}em` : `unset`};
    }

    @media only screen and (max-width: 28em) {
      font-size: 3em;
    }
	`;
});

export default StyledTypography;
