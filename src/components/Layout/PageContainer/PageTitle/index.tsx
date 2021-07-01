import { Typography } from '@material-ui/core';
import React from 'react';
import TranslateText from '../../Locales/TranslateText';
import { Props } from './types';


const PageTitle: React.FunctionComponent<Props> = ({ Icon, text }) => {


	return (
		<header>
			{Icon && <Icon />}
			<Typography variant={`h1`}>
				<TranslateText text={text} />
			</Typography>
		</header>
	);
};

export default PageTitle;
