import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';
import isSmDown from '../../../../../utils/isSmDown';

const StyledButtonsContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);
	const smDown = isSmDown();

	return css`
    order: 2;
    margin-top: ${theme.spacing(0.2)}em;
    display: flex;

    button:first-child {
      margin-inline-end: ${theme.spacing(0.5)}em;
    }

    ${mdDown} {
      button:first-child {
        margin-inline: 0;
      }

      order: initial;
      justify-content: space-evenly;
    }

    ${smDown} {
      justify-content: space-between;
    }
	`;
});

export default StyledButtonsContainer;
