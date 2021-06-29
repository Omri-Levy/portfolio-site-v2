import { createContext } from 'react';
import { ThemeColors, ThemeContextType } from './types';

const ThemeContext = createContext<ThemeContextType>({
	isDarkMode: true,
	setIsDarkMode: () => true,
	primaryColor: {
		colorWithShade: `rgb(144, 202, 249)`,
		color: `blue` as ThemeColors,
	},
	setPrimaryColor: () => ({
		colorWithShade: `rgb(144, 202, 249)`,
		color: `blue` as ThemeColors,
	}),
	isRTL: false,
	setIsRTL: () => false,
});

export default ThemeContext;
