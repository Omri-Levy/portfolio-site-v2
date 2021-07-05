import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledWrapper = styled(motion.div)(() => {

	return css`
    display: inherit;
	`;
});

export default StyledWrapper;
