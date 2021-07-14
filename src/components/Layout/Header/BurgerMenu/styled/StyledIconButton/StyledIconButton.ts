import styled, { css } from 'styled-components';
import { IconButton } from '@material-ui/core';
import useThemeContext
	from '../../../../../../context/ThemeProvider/useThemeContext';

const StyledIconButton = styled(IconButton)(({ theme }) => {
	const burgerDimensions = `2.5rem`;
	const { isRTL } = useThemeContext();

	return css`
    position: fixed;
    width: ${burgerDimensions};
    height: ${burgerDimensions};
    bottom: ${theme.spacing(0.1)}rem;
    left: ${isRTL ? `${theme.spacing(0.2)}rem` : `unset`};
    right: ${isRTL ? `unset` : `${theme.spacing(0.2)}rem`};
    z-index: 1101;
    border: 2px solid ${theme.palette.primary.main};
    font-size: ${burgerDimensions};
    padding: ${theme.spacing(0.2)}rem;
    background-color: ${theme.palette.background.default};

    transition: transform 240ms;

    &:hover,
    &:focus {
      transform: rotate(360deg);
      background-color: ${theme.palette.primary.dark};
      color: ${theme.palette.primary.light};
      border: 2px solid ${theme.palette.primary.light};
    }
  }
	`;
});

export default StyledIconButton;
