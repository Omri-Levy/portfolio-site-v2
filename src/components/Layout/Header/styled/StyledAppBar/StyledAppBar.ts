import styled, { css } from 'styled-components';
import { AppBar } from '@material-ui/core';
import isSmDown from '../../../../../utils/isSmDown';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledAppBar = styled(AppBar)(({
																			 theme,
																		 }) => {
	const smDown = isSmDown();
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    position: sticky;
    bottom: unset;
    background-color: ${theme.palette.background.default};
    box-shadow: none;

    ${mdDown} {
      position: fixed;
    }

    ${smDown} {
      bottom: 0;
    }
	`;
});

export default StyledAppBar;
