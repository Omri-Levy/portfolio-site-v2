import React from 'react';
import TranslateText from '../../Locales/TranslateText';
import { StyledAnchorLink, StyledTypography } from './styled';

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
