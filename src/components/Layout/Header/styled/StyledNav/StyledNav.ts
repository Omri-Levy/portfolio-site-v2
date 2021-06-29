import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';

const StyledNav = styled(Box)(({ theme }) => {
	const notMobile = theme.breakpoints.up(`sm`);

	return css`
    display: grid;
    height: 100%;

    ${notMobile} {
      display: flex;
      height: unset;
      flex-grow: 1;
      justify-content: center;
    }
	`;
});

export default StyledNav;
