import { AppBar } from '@material-ui/core';
import React from 'react';
import { Logo } from './Logo';
import { Nav } from './Nav';
import useStyles from './useStyles';

const Header: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.appBar}>
			<Logo />
			<Nav />
		</AppBar>
	);
};

export default Header;
