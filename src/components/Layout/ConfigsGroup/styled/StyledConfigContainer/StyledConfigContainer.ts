import styled, { css } from 'styled-components';
import { Card } from '@material-ui/core';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const StyledConfigContainer = styled(Card)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    padding: ${theme.spacing(0.03)}em;
    border-radius: 100vh;
    position: absolute;
    bottom: ${theme.spacing(0.5)}em;
    left: ${isRTL ? `unset` : `${theme.spacing(0.2)}rem`};
    right: ${isRTL ? `${theme.spacing(0.2)}rem` : `unset`};
    display: flex;
	`;
});

export default StyledConfigContainer;
