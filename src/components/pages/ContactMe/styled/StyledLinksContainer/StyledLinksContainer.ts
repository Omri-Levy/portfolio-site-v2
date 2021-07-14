import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';

const StyledLinksContainer = styled(Box)(({ theme }) => {

	return css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(0.1)}em;
    margin-bottom: ${theme.spacing(0.1)}em;

    a {
      text-decoration: none;
      margin-inline-end: ${theme.spacing(0.1)}em;

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
