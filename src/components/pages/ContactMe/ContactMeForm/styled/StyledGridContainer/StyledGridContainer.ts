import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../../utils/getCustomBreakpoints';

const StyledGridContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    grid-template-columns: minmax(53%, 500px);
    justify-content: center;
    display: grid;
    gap: ${theme.spacing(0.1)}em;

    ${mdDown} {
      grid-template-columns: 1fr;
    }
	`;
});

export default StyledGridContainer;
