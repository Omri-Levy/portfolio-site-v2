import styled, { css } from 'styled-components';
import { Link } from '@material-ui/core';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';

const StyledIconLink = styled(Link)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    display: flex;
    align-items: center;

    svg {
      margin-right: ${isRTL ? 0 : theme.spacing(0.03)}em;
      margin-left: ${isRTL ? theme.spacing(0.03) : 0}em;
    }
	`;
});

export default StyledIconLink;
