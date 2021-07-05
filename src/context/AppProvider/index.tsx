import React from 'react';
import { ChildrenProps } from '../../utils/types';
import useLocalStorage from '../../hooks/useLocalStorage';
import AppContext from './AppContext';

const AppProvider: React.FunctionComponent<ChildrenProps> = ({ children },
) => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useLocalStorage(
		`isBurgerMenuOpen`, false);
	const openBurgerMenu = () => setIsBurgerMenuOpen(true);
	const closeBurgerMenu = () => setIsBurgerMenuOpen(false);
	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen((prevState) => !prevState);
	};

	return (
		<AppContext.Provider
			value={{
				isBurgerMenuOpen,
				openBurgerMenu,
				closeBurgerMenu,
				toggleBurgerMenu,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
