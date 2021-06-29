import React, { useEffect, useState } from 'react';
import { shadedPrimaryColor } from '../../hooks/useMakeTheme/colors';
import { ChildrenProps } from '../../utils/types';
import ThemeContext from './ThemeContext';
import { ThemeColors } from './types';

const ThemeProvider: React.FunctionComponent<ChildrenProps> = ({ children },
) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [primaryColor, setPrimaryColor] = useState({
		colorWithShade: `rgb(144, 202, 249)`,
		color: `blue` as ThemeColors,
	});
	const [isRTL, setIsRTL] = useState(false);
	const [windowLoaded, setWindowLoaded] = useState(false);

	useEffect(() => {
		if (!windowLoaded && typeof window !== `undefined`) {
			setWindowLoaded(true);
		}

		if (windowLoaded) {
			const mode = JSON.parse(localStorage.getItem(`isDarkMode`) || ``);
			const colors = shadedPrimaryColor(mode);
			const color = localStorage.getItem(`primaryColor`) as ThemeColors;

			setIsDarkMode(mode || isDarkMode);
			setPrimaryColor(() => {
				if (!color) {
					localStorage.setItem(`primaryColor`, `blue`);

					return {
						colorWithShade: colors[`blue`],
						color: `blue` as ThemeColors,
					};
				}

				return {
					colorWithShade: colors[color],
					color,
				};
			});
			setIsRTL(
				() => {
					const rtl = JSON.parse(localStorage.getItem(`isRTL`) as string);

					if (!rtl) {
						localStorage.setItem(`isRTL`, JSON.stringify(false));

						return false;
					}

					return rtl;
				},
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
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
