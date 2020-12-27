import { MenuList, Toolbar } from "@material-ui/core";
import React from "react";
import { CustomNavLink } from "../CustomNavLink";
import useStyles from "./useStyles";

const Nav: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Toolbar disableGutters={true}>
			<MenuList className={classes.menuList}>
				<CustomNavLink to={`/home#portfolio`} text={`Portfolio`} />
				<CustomNavLink to={`/home#about-me`} text={`About Me`} />
				<CustomNavLink to={`/home#contact-me`} text={`Contact Me`} />
			</MenuList>
		</Toolbar>
	);
};

export default Nav;
