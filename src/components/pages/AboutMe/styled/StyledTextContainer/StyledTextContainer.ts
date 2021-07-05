import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledTextContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    order: 1;
    max-width: 60ch;

    ${mdDown} {
      order: initial;
      justify-self: center;
    }

    h1 {
      margin-bottom: ${theme.spacing(0.03)}em;
    }
	`;
});

export default StyledTextContainer;
