import { Typography } from '@material-ui/core';
import React from 'react';
import { TranslateText } from '../../Locales/TranslateText';
import { Props } from './types';
import useStyles from './useStyles';

const PageTitle: React.FunctionComponent<Props> = ({ Icon, text }) => {
	const classes = useStyles();

	return (
		<header className={classes.pageTitleContainer}>
			<Icon className={classes.icon} />
			<Typography className={classes.typography} variant={`h2`}>
				<TranslateText text={text} />
			</Typography>
		</header>
	);
};

export default PageTitle;
