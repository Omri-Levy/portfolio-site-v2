import React from 'react';
import { Props } from './types';
import useStyles from './useStyles';

const IconLink: React.FunctionComponent<Props> = ({ Icon, to, alt }) => {
	const classes = useStyles();

	return (
		<a href={to} target={`_blank`} aria-label={alt} className={classes.link}>
			<Icon className={classes.icon} />
		</a>
	);
};

export default IconLink;
