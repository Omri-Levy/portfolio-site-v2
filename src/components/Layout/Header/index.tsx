import { Fade, Theme, useMediaQuery } from '@material-ui/core';
import React, { useRef } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Nav from './Nav';
import { StyledAppBar } from './styled/StyledAppBar';
import { StyledSpan } from './styled/StyledSpan';
import useAppContext from '../../../context/AppProvider/useAppContext';
import { StyledToolbar } from './styled/StyledToolbar';

const Header: React.FunctionComponent = () => {
	const appBarRef = useRef<HTMLElement | null>(null);
	const { isBurgerMenuOpen } = useAppContext();
	const notMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up(`sm`));

	return (
		<>
			<Fade in={(isBurgerMenuOpen && !notMobile) || notMobile}>
				<StyledAppBar
					ref={appBarRef}
					color={`default`}
				>
					<StyledToolbar>
						<Logo />
						{!notMobile && <StyledSpan />}
						<Nav />
					</StyledToolbar>
					{notMobile && <StyledSpan />}
				</StyledAppBar>
			</Fade>
			<BurgerMenu />
		</>
	);
};

export default Header;
