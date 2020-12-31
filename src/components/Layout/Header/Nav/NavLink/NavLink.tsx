import { ListItem } from '@material-ui/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { Props } from './types';
import useStyles from './useStyles';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';

const NavLink: React.FunctionComponent<Props> = (props) => {
	const { to, Icon, text } = props;
	const classes = useStyles();
	const handleClick = () => props.setIsActiveLink(text);

	return (
		<AnchorLink
			to={to}
			onAnchorLinkClick={handleClick}
			className={
				props.isActiveLink === text ? classes.activeLink : classes.link
			}
		>
			<ListItem className={classes.listItem} disableGutters={true}>
				{Icon && (
					<Icon
						className={
							props.isActiveLink === text ? classes.activeIcon : classes.icon
						}
					/>
				)}
				<TranslateText text={text} />
			</ListItem>
		</AnchorLink>
	);
};

export default NavLink;
