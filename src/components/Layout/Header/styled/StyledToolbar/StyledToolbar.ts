import styled, { css } from 'styled-components';
import { Toolbar } from '@material-ui/core';

const StyledToolbar = styled(Toolbar)(({ theme }) => {
	const notMobile = theme.breakpoints.up(`sm`);

	return css`
    display: grid;
    flex-grow: 1;
    grid-template-rows: auto auto 1fr;

    ${notMobile} {
      display: flex;
      grid-template-rows: unset;
    }
	`;
});

export default StyledToolbar;
