import { ListItem } from '@material-ui/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import TranslateText from '../../../Locales/TranslateText';
import { Props } from './types';
import useStyles from './useStyles';

const NavLink: React.FunctionComponent<Props> = (props) => {
	const { to, Icon, text } = props;
	const { listItem, link, icon } = useStyles();

	return (
		<ListItem className={listItem} disableGutters={true}>
			<AnchorLink
				to={to}
				className={link}
			>
				{Icon && <Icon className={icon} />}
				<TranslateText text={text} />
				<span />
			</AnchorLink>
		</ListItem>
	);
};

export default NavLink;
