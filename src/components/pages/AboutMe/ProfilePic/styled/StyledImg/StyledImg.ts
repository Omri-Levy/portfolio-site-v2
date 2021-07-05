import styled, { css } from 'styled-components';

const StyledImg = styled(`img`)(({ theme }) => {
	return css`
    border-radius: 100vh;
    width: 15em;
    height: 15em;
    background-color: ${theme.palette.primary.main};
    border: 3px solid ${theme.palette.text.primary};
	`;
});

export default StyledImg;
