import React from 'react';
import PageTitle from './PageTitle';
import { Props } from './types';
import { StyledSection } from './styled/StyledSection';
import { Container } from '@material-ui/core';

const PageContainer: React.FunctionComponent<Props> = ({
																												 Icon,
																												 text,
																												 ...props
																											 }) => {

	return (
		<StyledSection {...props}>
			<Container>
				{text && <PageTitle Icon={Icon} text={text} />}
				{props.children}
			</Container>
		</StyledSection>
	);
};

export default PageContainer;
