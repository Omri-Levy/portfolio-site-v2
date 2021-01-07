import { ListItem } from '@material-ui/core';
import clsx from 'clsx';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';
import { Props } from './types';
import useStyles from './useStyles';

const NavLink: React.FunctionComponent<Props> = (props) => {
	const { to, Icon, text } = props;
	const { listItem, activeLink, link, icon } = useStyles();
	const handleClick = () => props.setIsActiveLink(text);
	const anchorClass = clsx({
		[link]: props.isActiveLink !== text,
		[`${link} ${activeLink}`]: props.isActiveLink === text,
	});

	return (
		<ListItem className={listItem} disableGutters={true}>
			<AnchorLink
				to={to}
				onAnchorLinkClick={handleClick}
				className={anchorClass}
			>
				{Icon && <Icon className={icon} />}
				<TranslateText text={text} />
			</AnchorLink>
		</ListItem>
	);
};

export default NavLink;
