import styled, { css } from 'styled-components';

const StyledLabel = styled(`label`)(({ theme }) => {

	return css`
    display: flex;
    align-items: center;
    margin-inline-start: ${theme.spacing(0.05)}em;
	`;
});

export default StyledLabel;
