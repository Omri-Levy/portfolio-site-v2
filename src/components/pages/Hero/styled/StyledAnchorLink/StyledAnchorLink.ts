import styled, { css } from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const StyledAnchorLink = styled(AnchorLink)(() => {
	return css`
    text-decoration: none;

    &, &:visited {
      color: inherit;
    }
	`;
});

export default StyledAnchorLink;
