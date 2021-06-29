import React from 'react';
import PageTitle from './PageTitle';
import { Props } from './types';


const PageContainer: React.FunctionComponent<Props> = ({
																												 Icon,
																												 text,
																												 ...props
																											 }) => (
	<section
		style={{
			height: `100vh`,
			marginTop: 140,
		}}
		{...props}
	>
		{text && <PageTitle Icon={Icon} text={text} />}
		{props.children}
	</section>
);

export default PageContainer;
