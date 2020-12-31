import { List, Toolbar } from '@material-ui/core';
import React from 'react';
import { NavLink } from './NavLink';
import useStyles from './useStyles';
import {
	InfoOutlined,
	PermContactCalendarOutlined,
	WorkOutline,
} from '@material-ui/icons';

const Nav: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Toolbar disableGutters={true} component={`nav`} className={classes.nav}>
			<List className={classes.menuList}>
				<NavLink to={`/home#portfolio`} Icon={WorkOutline} text={`Portfolio`} />
				<NavLink to={`/home#about-me`} Icon={InfoOutlined} text={`About Me`} />
				<NavLink
					to={`/home#contact-me`}
					Icon={PermContactCalendarOutlined}
					text={`Contact Me`}
				/>
			</List>
		</Toolbar>
	);
};

export default Nav;
