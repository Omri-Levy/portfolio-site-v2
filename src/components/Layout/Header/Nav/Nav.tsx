import { List, Toolbar } from '@material-ui/core';
import {
	InfoOutlined,
	PermContactCalendarOutlined,
	WorkOutline,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink } from './NavLink';
import useStyles from './useStyles';

const Nav: React.FunctionComponent = () => {
	const classes = useStyles();
	const [isActiveLink, setIsActiveLink] = useState(`Portfolio`);

	return (
		<Toolbar disableGutters={true} component={`nav`} className={classes.nav}>
			<List className={classes.menuList}>
				<NavLink
					to={`/home#portfolio`}
					Icon={WorkOutline}
					text={`Portfolio`}
					isActiveLink={isActiveLink}
					setIsActiveLink={setIsActiveLink}
				/>
				<NavLink
					to={`/home#about-me`}
					Icon={InfoOutlined}
					text={`About Me`}
					isActiveLink={isActiveLink}
					setIsActiveLink={setIsActiveLink}
				/>
				<NavLink
					to={`/home#contact-me`}
					Icon={PermContactCalendarOutlined}
					text={`Contact Me`}
					isActiveLink={isActiveLink}
					setIsActiveLink={setIsActiveLink}
				/>
			</List>
		</Toolbar>
	);
};

export default Nav;
