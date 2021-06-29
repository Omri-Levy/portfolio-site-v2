import styled, { css } from 'styled-components';
import { AppBar } from '@material-ui/core';

const StyledAppBar = styled(AppBar)(({
																			 theme,
																		 }) => {
	const notMobile = theme.breakpoints.up(`sm`);

	return css`
    box-shadow: none;
    background-color: ${theme.palette.background.default};
    position: fixed;
    bottom: 0;

    ${notMobile} {
      position: sticky;
      bottom: unset;
    }
	`;
});

export default StyledAppBar;
