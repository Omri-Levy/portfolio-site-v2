import { AppBar } from '@material-ui/core';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { AppContext } from '~/context/AppProvider';
import { useDevice } from '~/hooks/useDevice';
import { BurgerMenu } from './BurgerMenu';
import { Logo } from './Logo';
import { Nav } from './Nav';
import useStyles from './useStyles';

const Header: React.FunctionComponent = () => {
	const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useContext(AppContext);
	const { closedAppbar, appbar } = useStyles();
	const handleClick = () => setIsBurgerMenuOpen((prevState) => !prevState);
	const { isTabletUp, isTabletDown } = useDevice();
	const className = clsx({
		[appbar]: isBurgerMenuOpen || isTabletUp,
		[closedAppbar]: !isBurgerMenuOpen && isTabletDown,
	});

	return (
		<>
			<BurgerMenu onClick={handleClick} />
			<AppBar className={className}>
				<Logo />
				<Nav />
			</AppBar>
		</>
	);
};

export default Header;
