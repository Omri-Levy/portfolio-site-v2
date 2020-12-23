import { IconButton } from '@material-ui/core';
import React from 'react';
import { Props } from './types';
import useStyles from './useStyles';
import { Link } from 'gatsby';

const ContactLink: React.FunctionComponent<Props> = ({ Icon, to }) => {
	const classes = useStyles();

	return (
		<IconButton
			className={classes.button}
			style={{ backgroundColor: 'transparent' }}
			disableFocusRipple
		>
			<Link to={to} target={'_blank'}>
				<Icon className={classes.icon} />
			</Link>
		</IconButton>
	);
};

export default ContactLink;
