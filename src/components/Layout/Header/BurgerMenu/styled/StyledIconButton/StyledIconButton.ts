import styled, { css } from 'styled-components';
import { IconButton } from '@material-ui/core';

const StyledIconButton = styled(IconButton)(({ theme }) => {
	const burgerDimensions = `3rem`;

	return css`
    position: fixed;
    width: ${burgerDimensions};
    height: ${burgerDimensions};
    bottom: ${burgerDimensions};
    right: ${burgerDimensions};
    z-index: 1101;
    border: 2px solid ${theme.palette.primary.main};
    font-size: ${burgerDimensions};
    padding: ${theme.spacing(0.25)}rem;
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
