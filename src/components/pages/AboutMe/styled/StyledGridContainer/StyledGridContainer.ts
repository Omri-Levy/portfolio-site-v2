import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledGridContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    grid-template-columns: auto auto;
    display: grid;

    ${mdDown} {
      grid-template-columns: 1fr;
      text-align: center;
    }
	`;
});

export default StyledGridContainer;
