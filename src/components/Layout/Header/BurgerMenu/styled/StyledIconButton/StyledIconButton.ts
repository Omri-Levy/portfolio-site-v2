import styled, { css } from 'styled-components';
import { IconButton } from '@material-ui/core';

const StyledIconButton = styled(IconButton)(({ theme }) => {
	const burgerDimensions = `48px`;

	return css`
    position: fixed;
    width: ${burgerDimensions};
    height: ${burgerDimensions};
    bottom: ${burgerDimensions};
    right: ${burgerDimensions};
    z-index: 1101;
    border: 2px solid ${theme.palette.primary.main};
    font-size: ${burgerDimensions};
    padding: ${theme.spacing(4)}px;
    background-color: ${theme.palette.background.default};
	`;
});

export default StyledIconButton;
