import styled, { css } from 'styled-components';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const StyledLabel = styled(`label`)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    display: flex;
    align-items: center;
    margin-left: ${isRTL ? `unset` : `${theme.spacing(0.05)}`};
    margin-right: ${isRTL ? `${theme.spacing(0.05)}em` : `unset`};
	`;
});

export default StyledLabel;
