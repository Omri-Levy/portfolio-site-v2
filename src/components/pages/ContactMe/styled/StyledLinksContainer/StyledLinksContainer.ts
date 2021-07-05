import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const StyledLinksContainer = styled(Box)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(0.1)}em;
    margin-bottom: ${theme.spacing(0.1)}em;

    a {
      text-decoration: none;
      margin-right: ${isRTL ? `unset` : `${theme.spacing(0.1)}em`};
      margin-left: ${isRTL ? `${theme.spacing(0.1)}em` : `unset`};

      &, &:visited {
        color: inherit;
      }
    }

    @media only screen and (max-width: 28em) {
      grid-template-columns: 1fr;
    }
	`;
});

export default StyledLinksContainer;
