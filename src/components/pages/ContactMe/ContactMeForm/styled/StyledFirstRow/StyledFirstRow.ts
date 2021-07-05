import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../../utils/getCustomBreakpoints';

const StyledFirstRow = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(0.1)}em;

    ${mdDown} {
      grid-template-columns: 1fr;
    }
	`;
});

export default StyledFirstRow;
