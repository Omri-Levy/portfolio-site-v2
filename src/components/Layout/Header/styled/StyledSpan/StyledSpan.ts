import styled, { css } from 'styled-components';

const StyledSpan = styled(`span`)(({ theme }) => {
	return css`
    background-color: ${theme.palette.text.primary};
    opacity: 0.1;
    width: 35%;
    margin-top: ${theme.spacing(0.15)}em;
    height: 0.05em;
    border-radius: 100vh;
    margin-inline: auto;
	`;
});

export default StyledSpan;
