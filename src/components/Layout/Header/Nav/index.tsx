import {
	InfoOutlined,
	PermContactCalendarOutlined,
	WorkOutline,
} from '@material-ui/icons';
import React, { useEffect } from 'react';
import NavLink from './NavLink';
import { StyledNav } from '../styled/StyledNav';
import { StyledList } from '../styled/StyledList';
import setActiveNavLink from '../../../../utils/setActiveNavLink';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';


const Nav: React.FunctionComponent = () => {
	const { isDarkMode, primaryColor } = useThemeContext();

	useEffect(() => {
		setActiveNavLink();
	}, [isDarkMode, primaryColor]);

	useEffect(() => {
		document.addEventListener(`scroll`, setActiveNavLink);

		return () => {
			document.removeEventListener(`scroll`, setActiveNavLink);
		};
	}, []);


	return (
		<StyledNav as={`nav`}>
			<StyledList>
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
				<NavLink
					to={`/#portfolio`}
					Icon={WorkOutline}
					text={`Portfolio`}
				/>
			</StyledList>
		</StyledNav>
	);
};

export default Nav;
