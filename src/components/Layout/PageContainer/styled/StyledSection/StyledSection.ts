import styled, { css } from 'styled-components';

const StyledSection = styled(`section`)(({ theme }) => {

	return css`
    margin-top: ${theme.spacing(0.2)}em;
    height: 100vh;
    scroll-margin-top: ${theme.spacing(1)}em;
	`;
});

export default StyledSection;
