import styled, { css } from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import isSmDown from '../../../../../../utils/isSmDown';
import getCustomBreakpoints from '../../../../../../utils/getCustomBreakpoints';

const StyledAnchorLink = styled(AnchorLink)(({ theme }) => {
	const smDown = isSmDown();
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    display: grid;
    place-content: center;
    text-decoration: none;

    &, &:visited {
      color: inherit;
    }

    ${mdDown} {
      display: none;
    }

    ${smDown} {
      margin-top: ${theme.spacing(0.15)}em;
      display: grid;
    }
	`;
});

export default StyledAnchorLink;
