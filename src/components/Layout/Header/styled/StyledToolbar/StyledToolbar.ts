import styled, { css } from 'styled-components';
import { Toolbar } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledToolbar = styled(Toolbar)(({ theme }) => {
	const smDown = getCustomBreakpoints(`sm`, `down`) as string;

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
