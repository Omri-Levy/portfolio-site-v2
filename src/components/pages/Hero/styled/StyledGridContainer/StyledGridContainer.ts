import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';
import isSmDown from '../../../../../utils/isSmDown';

const StyledGridContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);
	const smDown = isSmDown();

	return css`
    display: grid;
    grid-template-columns: 1fr 649px;

    @media only screen and (max-width: 62em) {
      grid-template-columns: 1fr;
    }

    ${mdDown} {
      margin-top: ${theme.spacing(1)}em;
    }

    ${smDown} {
      margin-top: unset;
    }
	`;
});

export default StyledGridContainer;
