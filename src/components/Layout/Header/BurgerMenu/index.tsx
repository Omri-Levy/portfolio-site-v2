import React from 'react';
import { Props } from './types';
import { Close, Menu } from '@material-ui/icons';
import useAppContext from '../../../../context/AppProvider/useAppContext';
import { StyledIconButton } from './styled/StyledIconButton';
import isSmDown from '../../../../utils/isSmDown';

const BurgerMenu: React.FunctionComponent<Props> = () => {
	const { toggleBurgerMenu, isBurgerMenuOpen } = useAppContext();
	const smDown = isSmDown(true);

	return (
		<>
			{smDown && (
				<StyledIconButton
					color={`primary`}
					onClick={toggleBurgerMenu}
				>
					{isBurgerMenuOpen
						? <Close fontSize={`inherit`} />
						: <Menu fontSize={`inherit`} />
					}
				</StyledIconButton>
			)}
		</>
	);
};

export default BurgerMenu;
