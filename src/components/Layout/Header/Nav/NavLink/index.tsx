import { ListItem } from '@material-ui/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React, { useContext } from 'react';
import { AppContext } from '../../../../../context/AppProvider';
import TranslateText from '../../../Locales/TranslateText';
import { Props } from './types';
import useStyles from './useStyles';

const NavLink: React.FunctionComponent<Props> = (props) => {
  const { setIsBurgerMenuOpen } = useContext(AppContext);
  const { to, Icon, text } = props;
  const { listItem, link, icon } = useStyles();
  const handleClick = () => {
    setIsBurgerMenuOpen(false);
  };

	return (
		<ListItem className={listItem} disableGutters={true}>
			<AnchorLink
				to={to}
				onAnchorLinkClick={handleClick}
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
