import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface StyledSectionProps {
	$disableAnimation?: boolean;
}

const StyledSection = styled(motion.section)<StyledSectionProps>((
	{
		theme,
		$disableAnimation,
	},
) => {
	const animation = () => !$disableAnimation && css`
    &:not(#hero) {
      position: relative;
      left: -100vw;
      transition: left 0.4s;
    }

    &.active-section:not(#hero) {
      left: 0;
    }
	`;

	return css`
    margin-top: ${theme.spacing(0.2)}em;
    height: 100vh;

    ${animation}
	`;
});

export default StyledSection;
