import { createContext } from 'react';
import { AppContextType } from './types';

const AppContext = createContext<AppContextType>({
	isBurgerMenuOpen: true,
	setIsBurgerMenuOpen: () => true,
});

export default AppContext;
