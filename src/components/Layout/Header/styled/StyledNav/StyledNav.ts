import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledNav = styled(Box)(({ theme }) => {
	const smDown = getCustomBreakpoints(`sm`, `down`) as string;

	return css`
    display: flex;
    height: unset;
    flex-grow: 1;
    justify-content: center;

    ${smDown} {
      display: grid;
      height: 100%;
    }
	`;
});

export default StyledNav;
