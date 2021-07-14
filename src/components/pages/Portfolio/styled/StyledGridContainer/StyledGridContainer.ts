import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Box } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledGridContainer = styled(motion(Box))(({ theme }) => {
	const lgDown = getCustomBreakpoints(`lg`, `down`);
	const xlDown = getCustomBreakpoints(`xl`, `down`);

	return css`
    grid-template-columns: auto auto auto;
    display: grid;
    gap: ${theme.spacing(0.5)}em;
    padding-bottom: ${theme.spacing(1)}em;

    ${xlDown} {
      justify-content: center;
      grid-template-columns: auto auto;
    }

    ${lgDown} {
      grid-template-columns: auto;
    }
	`;
});

export default StyledGridContainer;
