import React, { useState } from 'react';
import { ChildrenProps } from '~/utils/types';
import { colorsObj } from '../../hooks/useMakeTheme/colors';
import { ThemeContext } from '../ThemeContext';

const ThemeProvider: React.FunctionComponent<ChildrenProps> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(
		() => JSON.parse(localStorage.getItem(`isDarkMode`) as string) || false,
	);
	const [primaryColor, setPrimaryColor] = useState(() => {
		const colors = colorsObj(isDarkMode);
		const color = localStorage.getItem(`primaryColor`);

		if (!color) {
			localStorage.setItem(`primaryColor`, `blue`);

			return colors[`blue`];
		}

		return colors[color];
	});
	const [isRTL, setIsRTL] = useState(
		() => JSON.parse(localStorage.getItem(`isRTL`) as string) || false,
	);

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode,
				setIsDarkMode,
				primaryColor,
				setPrimaryColor,
				isRTL,
				setIsRTL,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
