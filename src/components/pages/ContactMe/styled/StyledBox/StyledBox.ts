import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';

const StyledBox = styled(Box)(() => {
	return css`
    display: grid;
    justify-content: center;
	`;
});

export default StyledBox;
