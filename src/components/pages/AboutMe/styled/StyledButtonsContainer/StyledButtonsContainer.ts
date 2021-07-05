import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';
import isSmDown from '../../../../../utils/isSmDown';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const StyledButtonsContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);
	const smDown = isSmDown();
	const { isRTL } = useThemeContext();

	return css`
    order: 2;
    margin-top: ${theme.spacing(0.2)}em;
    display: flex;

    button:first-child {
      margin-right: ${isRTL ? `unset` : `${theme.spacing(0.5)}em`};
      margin-left: ${isRTL ? `${theme.spacing(0.5)}em` : `unset`};
    }

    ${mdDown} {
      button:first-child {
        margin-right: 0;
        margin-left: 0;
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
