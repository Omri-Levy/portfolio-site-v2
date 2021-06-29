import {
	InfoOutlined,
	PermContactCalendarOutlined,
	WorkOutline,
} from '@material-ui/icons';
import React from 'react';
import NavLink from './NavLink';
import { StyledNav } from '../styled/StyledNav';
import { StyledList } from '../styled/StyledList';


const Nav: React.FunctionComponent = () => {

	return (
		<StyledNav as={`nav`}>
			<StyledList>
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
			</StyledList>
		</StyledNav>
	);
};

export default Nav;
