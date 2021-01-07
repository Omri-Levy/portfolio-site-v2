import { blue } from '@material-ui/core/colors';
import { createContext } from 'react';
import { Theme } from './types';

const theme: Theme = {
	isDarkMode: true,
	setIsDarkMode: () => true,
	primaryColor: blue[200],
	setPrimaryColor: () => blue[200],
	isRTL: false,
	setIsRTL: () => false,
};

const ThemeContext = createContext(theme);

export default ThemeContext;
