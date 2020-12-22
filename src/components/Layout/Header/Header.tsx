import { AppBar, Box } from '@material-ui/core';
import React from 'react';
import { Logo } from './Logo';
import { Nav } from './Nav';
import useStyles from './useStyles';

const Header: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.appBar}>
			<Box className={classes.innerBox}>
				<Logo />
				<Nav />
			</Box>
		</AppBar>
	);
};

export default Header;
