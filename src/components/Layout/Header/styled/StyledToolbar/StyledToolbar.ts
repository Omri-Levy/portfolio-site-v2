import styled, { css } from 'styled-components';
import { Toolbar } from '@material-ui/core';
import isSmDown from '../../../../../utils/isSmDown';

const StyledToolbar = styled(Toolbar)(({ theme }) => {
	const smDown = isSmDown();

	return css`
    display: flex;
    grid-template-rows: unset;

    ${smDown} {
      display: grid;
      flex-grow: 1;
      grid-template-rows: auto auto 1fr;
    }
	`;
});

export default StyledToolbar;
