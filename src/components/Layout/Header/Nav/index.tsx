import {
	InfoOutlined,
	PermContactCalendarOutlined,
	WorkOutline,
} from '@material-ui/icons';
import React, { useEffect } from 'react';
import NavLink from './NavLink';
import { StyledNav } from '../styled/StyledNav';
import { StyledList } from '../styled/StyledList';


const Nav: React.FunctionComponent = () => {

	useEffect(() => {
		const sections = document.querySelectorAll(`section`);

		const listener = () => {
			let scrollY = window.pageYOffset;

			sections.forEach((section) => {
				const sectionHeight = section.offsetHeight;
				const sectionTop = section.offsetTop - 200;
				const sectionId = section.getAttribute(`id`);
				const navLink = document.querySelector(
					`nav li a[href*=${sectionId}]`,
				);

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					navLink?.classList.add(`active`);
				} else {
					navLink?.classList.remove(`active`);
				}
			});
		};

		document.addEventListener(`scroll`, listener);

		return () => {
			document.removeEventListener(`scroll`, listener);
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
