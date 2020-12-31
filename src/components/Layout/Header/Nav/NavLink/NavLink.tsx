import { ListItem } from '@material-ui/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { Props } from './types';
import useStyles from './useStyles';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';

const NavLink: React.FunctionComponent<Props> = (props) => {
	const { to, Icon, text } = props;
	const classes = useStyles();

	return (
		<AnchorLink to={to} className={classes.link}>
			<ListItem className={classes.listItem}>
				{Icon && <Icon className={classes.icon} />}
				<TranslateText text={text} />
			</ListItem>
		</AnchorLink>
	);
};

export default NavLink;
