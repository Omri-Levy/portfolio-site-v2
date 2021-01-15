import { AppBar, useMediaQuery } from '@material-ui/core';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Nav from './Nav';
import useStyles from './useStyles';

const Header: React.FunctionComponent = () => {
	const { appBar } = useStyles();
	const appBarRef = useRef<HTMLElement | null>(null);
	const tl = gsap.timeline({ paused: true, reversed: true });
	const isTablet = useMediaQuery(`(min-width: 1000px)`);
	const animation = tl
		.to(`body`, {
			overflow: `hidden`,
		})
		.to(appBarRef.current, {
			scale: 1.4,
		})
		.to(appBarRef.current, {
			scale: 1,
		});
	useEffect(() => {
		if (appBarRef.current && isTablet && tl.reversed()) {
			appBarRef.current.style.removeProperty(`transform`);
		}
	}, [isTablet]);

	return (
		<>
			<AppBar
				ref={appBarRef}
				className={appBar}
			>
				<Logo />
				<Nav />
			</AppBar>
			<BurgerMenu animation={animation} />
		</>
	);
};

export default Header;
