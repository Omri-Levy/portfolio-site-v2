import React from 'react';
import PageTitle from './PageTitle';
import { Props } from './types';
import { StyledSection } from './styled/StyledSection';

const PageContainer: React.FunctionComponent<Props> = ({
																												 Icon,
																												 text,
																												 ...props
																											 }) => {

	return (
		<StyledSection {...props}>
			{text && <PageTitle Icon={Icon} text={text} />}
			{props.children}
		</StyledSection>
	);
};

export default PageContainer;
