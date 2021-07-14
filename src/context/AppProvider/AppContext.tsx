import { createContext } from 'react';
import { AppContextType } from './types';

const AppContext = createContext<AppContextType>({
	isBurgerMenuOpen: true,
	openBurgerMenu: () => null,
	closeBurgerMenu: () => null,
	toggleBurgerMenu: () => null,
});

export default AppContext;
