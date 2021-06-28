import React from 'react';
import PageTitle from './PageTitle';
import { Props } from './types';


const PageContainer: React.FunctionComponent<Props> = (props) => {

	const { Icon, text } = props;


	return (
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
};

export default PageContainer;
