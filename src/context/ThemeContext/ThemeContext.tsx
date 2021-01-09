import { createContext } from 'react';
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

export default ThemeContext;
