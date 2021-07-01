import styled, { css } from 'styled-components';
import { AppBar } from '@material-ui/core';
import isSmDown from '../../../../../utils/isSmDown';

const StyledAppBar = styled(AppBar)(({
																			 theme,
																		 }) => {
	const smDown = isSmDown();

	return css`
    position: sticky;
    bottom: unset;
    background-color: ${theme.palette.background.default};
    box-shadow: none;

    ${smDown} {
      position: fixed;
      bottom: 0;
    }
	`;
});

export default StyledAppBar;
