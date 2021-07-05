import styled, { css } from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const StyledAnchorLink = styled(AnchorLink)(({ theme }) => {
	return css`
    text-decoration: none;
    display: grid;
    place-items: center;


    &, &:visited {
      &:not(.active) {
        color: inherit;
      }
    }

    &.active, &.active:visited {
      color: ${theme.palette.primary.main}
    }
	`;
});

export default StyledAnchorLink;
