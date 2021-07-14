import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledProfilePicContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    order: 2;
    margin-top: ${theme.spacing(0.2)}em;
    margin-inline-end: ${theme.spacing(1)}em;

    ${mdDown} {
      justify-self: center;
      order: initial;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
    }
	`;
});


export default StyledProfilePicContainer;
