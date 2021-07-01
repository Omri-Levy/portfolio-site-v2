import React from 'react';
import { Props } from './types';
import { Close, Menu } from '@material-ui/icons';
import useAppContext from '../../../../context/AppProvider/useAppContext';
import { StyledIconButton } from './styled/StyledIconButton';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const BurgerMenu: React.FunctionComponent<Props> = () => {
	const { setIsBurgerMenuOpen, isBurgerMenuOpen } = useAppContext();
	const toggleIsBurgerMenuOpen = () => {
		setIsBurgerMenuOpen((prevState) => !prevState);
	};
	const smDown = getCustomBreakpoints(`sm`, `down`, true);

	return (
		<>
			{smDown && (
				<StyledIconButton
					color={`primary`}
					onClick={toggleIsBurgerMenuOpen}
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
