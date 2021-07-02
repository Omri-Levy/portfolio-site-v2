import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledSection = styled(motion.section)(({ theme }) => {

	return css`
    margin-top: ${theme.spacing(0.2)}em;
    height: 100vh;

    &:not(#hero) {
      position: relative;
      left: -100vw;
      transition: left 0.4s;
    }

    &.active-section:not(#hero) {
      left: 0;
    }
	`;
});

export default StyledSection;
