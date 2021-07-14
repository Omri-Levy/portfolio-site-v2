import styled, { css } from 'styled-components';
import { Popover } from '@material-ui/core';

const StyledPopover = styled(Popover)(({ theme }) => {

	return css`
    .MuiPaper-rounded {
      border-radius: 100vh;
    }
	`;
});

export default StyledPopover;
