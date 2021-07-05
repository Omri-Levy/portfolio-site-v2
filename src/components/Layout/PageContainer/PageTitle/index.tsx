import React from 'react';
import TranslateText from '../../Locales/TranslateText';
import { Props } from './types';
import { StyledHeader, StyledTypography } from './styled';

const PageTitle: React.FunctionComponent<Props> = ({ Icon, text }) => {


	return (
		<StyledHeader>
			<StyledTypography variant={`h1`}>
				{Icon && <Icon />}
				<TranslateText text={text} />
			</StyledTypography>
		</StyledHeader>
	);
};

export default PageTitle;
