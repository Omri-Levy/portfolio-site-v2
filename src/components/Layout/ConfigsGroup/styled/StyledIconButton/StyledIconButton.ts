import styled, { css } from 'styled-components';
import { IconButton } from '@material-ui/core';

const StyledIconButton = styled(IconButton)(({ theme }) => {
	const configDimensions = `2.5rem`;

	return css`
    position: relative;
    width: ${configDimensions};
    height: ${configDimensions};
    font-size: ${configDimensions};
    padding: ${theme.spacing(0.2)}rem;
    border: 2px solid ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.background.default};

    transition: transform 240ms;

    &:hover,
    &:focus {
      transform: rotate(360deg);
      background-color: ${theme.palette.primary.dark};
      color: ${theme.palette.primary.light};
      border: 2px solid ${theme.palette.primary.light};
    }
	`;
});

export default StyledIconButton;
