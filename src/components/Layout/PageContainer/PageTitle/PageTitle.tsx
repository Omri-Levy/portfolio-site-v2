import { Typography } from '@material-ui/core';
import React from 'react';
import { TranslateText } from '../../Locales/TranslateText';
import { Props } from './types';
import useStyles from './useStyles';

const PageTitle: React.FunctionComponent<Props> = ({ Icon, text }) => {
	const { pageTitleContainer, icon, typography } = useStyles();

	return (
		<header className={pageTitleContainer}>
			<Icon className={icon} />
			<Typography className={typography} variant={`h1`}>
				<TranslateText text={text} />
			</Typography>
		</header>
	);
};

export default PageTitle;
