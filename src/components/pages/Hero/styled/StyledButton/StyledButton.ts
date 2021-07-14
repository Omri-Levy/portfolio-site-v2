import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)(({ theme }) => {
	return css`
    margin-top: ${theme.spacing(0.3)}em;
	`;
});

export default StyledButton;
