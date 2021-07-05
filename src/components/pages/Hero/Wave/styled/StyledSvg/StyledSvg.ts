import styled, { css } from 'styled-components';

const StyledSvg = styled(`svg`)(() => {
	return css`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
	`;
});

export default StyledSvg;
