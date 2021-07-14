import styled, { css } from 'styled-components';
import { Card } from '@material-ui/core';
import { motion } from 'framer-motion';

const StyledCard = styled(motion(Card))(() => {

	return css`
    max-width: 400px;
	`;
});

export default StyledCard;
