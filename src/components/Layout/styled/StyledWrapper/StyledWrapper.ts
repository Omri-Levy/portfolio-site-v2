import styled, { css } from 'styled-components';

const StyledWrapper = styled(`div`)(({ theme }) => {
	return css`
    direction: ${theme.direction};
	`;
});

export default StyledWrapper;
