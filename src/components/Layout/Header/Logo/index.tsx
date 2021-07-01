import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import TranslateText from '../../Locales/TranslateText';
import { StyledTypography } from './styled/StyledTypography';
import styled, { css } from 'styled-components';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';


const StyledAnchorLink = styled(AnchorLink)(({ theme }) => {
	const smDown = getCustomBreakpoints(`sm`, `down`) as string;
	const mdDown = getCustomBreakpoints(`md`, `down`) as string;

	return css`
    display: grid;
    place-content: center;
    color: inherit;
    text-decoration: none;

    &:visited {
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

const Logo: React.FunctionComponent = () => {


	return (
		<StyledAnchorLink to={`/#hero`}>
			<StyledTypography variant={`h2`} $fontSize={`subtitle1`}>
				<TranslateText text={`Omri Levy`} />
			</StyledTypography>
			<StyledTypography variant={`h1`} $fontSize={`subtitle2`}>
				<TranslateText text={`Portfolio Site`} />
			</StyledTypography>
		</StyledAnchorLink>
	);
};

export default Logo;
