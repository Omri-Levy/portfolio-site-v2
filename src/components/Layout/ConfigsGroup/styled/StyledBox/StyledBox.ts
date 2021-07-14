import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const StyledBox = styled(Box)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    z-index: 6;
    position: fixed;
    left: ${isRTL ? `unset` : `${theme.spacing(0.2)}rem`};
    right: ${isRTL ? `${theme.spacing(0.2)}rem` : `unset`};
    bottom: ${theme.spacing(0.1)}rem;
	`;
});

export default StyledBox;
