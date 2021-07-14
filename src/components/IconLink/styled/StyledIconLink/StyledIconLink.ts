import styled, { css } from 'styled-components';
import { Link } from '@material-ui/core';

const StyledIconLink = styled(Link)(({ theme }) => {

	return css`
    display: flex;
    align-items: center;

    svg {
      margin-inline-end: ${theme.spacing(0.03)}em;
    }
	`;
});

export default StyledIconLink;
