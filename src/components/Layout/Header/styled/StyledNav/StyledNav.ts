import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import isSmDown from '../../../../../utils/isSmDown';

const StyledNav = styled(Box)(({ theme }) => {
	const smDown = isSmDown();

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
