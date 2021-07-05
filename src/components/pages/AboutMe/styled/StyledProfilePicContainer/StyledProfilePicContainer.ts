import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const StyledProfilePicContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);
	const { isRTL } = useThemeContext();

	return css`
    order: 2;
    margin-top: ${theme.spacing(0.2)}em;
    margin-left: ${isRTL ? `unset` : `${theme.spacing(1)}em`};
    margin-right: ${isRTL ? `${theme.spacing(1)}em` : `unset`};

    ${mdDown} {
      justify-self: center;
      order: initial;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
    }
	`;
});


export default StyledProfilePicContainer;
