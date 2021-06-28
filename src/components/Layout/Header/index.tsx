import { AppBar, Toolbar } from '@material-ui/core';
import React, { useRef } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Nav from './Nav';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  box-shadow: none !important;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
const StyledSpan = styled(`span`)`
  background-color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.1;
  width: 35%;
  margin-top: 10px;
  height: 0.5px;
  border-radius: 100vh;
  margin-inline: auto;
`;
const Header: React.FunctionComponent = () => {
	const appBarRef = useRef<HTMLElement | null>(null);

	return (
		<>
			<StyledAppBar
				className={`test`}
				ref={appBarRef}
				color={`default`}
			>
				<Toolbar>
					<Logo />
					<Nav />
				</Toolbar>
				<StyledSpan />
			</StyledAppBar>
			<BurgerMenu />
		</>
	);
};

export default Header;
