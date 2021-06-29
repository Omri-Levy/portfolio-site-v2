import React from 'react';
import { ChildrenProps } from '../../utils/types';
import useLocalStorage from '../../hooks/useLocalStorage';
import AppContext from './AppContext';

const AppProvider: React.FunctionComponent<ChildrenProps> = ({ children },
) => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useLocalStorage(
		`isBurgerMenuOpen`, false);

	return (
		<AppContext.Provider
			value={{
				isBurgerMenuOpen,
				setIsBurgerMenuOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
