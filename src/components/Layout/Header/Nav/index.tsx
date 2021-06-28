import { Box, List } from '@material-ui/core';
import {
	InfoOutlined,
	PermContactCalendarOutlined,
	WorkOutline,
} from '@material-ui/icons';
import React from 'react';
import NavLink from './NavLink';


const Nav: React.FunctionComponent = () => {


	return (
		<Box component={`nav`} style={{
			flexGrow: 1,
			display: `flex`,
			justifyContent: `center`,
		}}>
			<List style={{
				display: `flex`,
				marginRight: 95,
				width: `30%`,
			}}>
				<NavLink
					to={`/#portfolio`}
					Icon={WorkOutline}
					text={`Portfolio`}
				/>
				<NavLink
					to={`/#about-me`}
					Icon={InfoOutlined}
					text={`About Me`}
				/>
				<NavLink
					to={`/#contact-me`}
					Icon={PermContactCalendarOutlined}
					text={`Contact Me`}
				/>
			</List>
		</Box>
	);
};

export default Nav;
