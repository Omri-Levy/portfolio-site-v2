import { Fade } from '@material-ui/core';
import React, { useRef } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Nav from './Nav';
import { StyledAppBar } from './styled/StyledAppBar';
import { StyledSpan } from './styled/StyledSpan';
import useAppContext from '../../../context/AppProvider/useAppContext';
import { StyledToolbar } from './styled/StyledToolbar';
import isSmDown from '../../../utils/isSmDown';

const Header: React.FunctionComponent = () => {
	const appBarRef = useRef<HTMLElement | null>(null);
	const { isBurgerMenuOpen } = useAppContext();
	const smDown = isSmDown(true);

	return (
		<>
			<Fade in={(isBurgerMenuOpen && smDown) || !smDown}>
				<StyledAppBar
					ref={appBarRef}
					color={`default`}
				>
					<StyledToolbar>
						<Logo />
						{smDown && <StyledSpan />}
						<Nav />
					</StyledToolbar>
					{!smDown && <StyledSpan />}
				</StyledAppBar>
			</Fade>
			<BurgerMenu />
		</>
	);
};

export default Header;
