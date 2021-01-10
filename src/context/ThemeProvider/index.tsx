import React, { createContext, useEffect, useState } from 'react';
import { ChildrenProps } from '~/utils/types';
import { colorsObj } from '~/hooks/useMakeTheme/colors';
import { Theme } from './types';

const theme: Theme = {
	isDarkMode: true,
	setIsDarkMode: () => true,
	primaryColor: `rgb(144, 202, 249)`,
	setPrimaryColor: () => `rgb(144, 202, 249)`,
	isRTL: false,
	setIsRTL: () => false,
	isLandingPage: false,
	setIsLandingPage: () => false,
};

const ThemeContext = createContext(theme);

const ThemeProvider: React.FunctionComponent<ChildrenProps> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [primaryColor, setPrimaryColor] = useState(`rgb(144, 202, 249)`);
	const [isRTL, setIsRTL] = useState(false);
	const [isLandingPage, setIsLandingPage] = useState(true);
	const [windowLoaded, setWindowLoaded] = useState(false);

	useEffect(() => {
		if (!windowLoaded && typeof window !== `undefined`) {
			setWindowLoaded(true);
		}

		if (windowLoaded) {
			setIsDarkMode(
				() => JSON.parse(localStorage.getItem(`isDarkMode`) as string) || false,
			);
			setPrimaryColor(() => {
				const mode =
					JSON.parse(localStorage.getItem(`isDarkMode`) as string) || false;
				const colors = colorsObj(mode);
				const color = localStorage.getItem(`primaryColor`);

				if (!color) {
					localStorage.setItem(`primaryColor`, `blue`);

					return colors[`blue`];
				}

				return colors[color];
			});
			setIsRTL(
				() => JSON.parse(localStorage.getItem(`isRTL`) as string) || false,
			);
		}
	}, [windowLoaded]);

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode,
				setIsDarkMode,
				primaryColor,
				setPrimaryColor,
				isRTL,
				setIsRTL,
				isLandingPage,
				setIsLandingPage,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
