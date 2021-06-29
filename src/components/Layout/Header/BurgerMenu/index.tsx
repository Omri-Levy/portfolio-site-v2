import React from 'react';
import { Props } from './types';
import { Menu } from '@material-ui/icons';
import useAppContext from '../../../../context/AppProvider/useAppContext';
import { StyledIconButton } from './styled/StyledIconButton';
import { Theme, useMediaQuery } from '@material-ui/core';

const BurgerMenu: React.FunctionComponent<Props> = () => {
	const { setIsBurgerMenuOpen } = useAppContext();
	const toggleIsBurgerMenuOpen = () => {
		setIsBurgerMenuOpen((prevState) => !prevState);
	};
	const notMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up(`sm`));

	return (
		<>
			{!notMobile && (
				<StyledIconButton
					color={`primary`}
					onClick={toggleIsBurgerMenuOpen}
				>
					<Menu fontSize={`inherit`} />
				</StyledIconButton>
			)}
		</>
	);
};

export default BurgerMenu;
