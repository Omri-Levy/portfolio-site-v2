import React, { createContext, useState } from 'react';
import { ChildrenProps } from '~/utils/types';
import { Values } from './types';

const values: Values = {
	isBurgerMenuOpen: false,
	setIsBurgerMenuOpen: () => false,
};

const AppContext = createContext(values);

const AppProvider: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

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
