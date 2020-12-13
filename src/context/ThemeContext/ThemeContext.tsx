import React, {createContext} from 'react';
import {primaryColor} from '../../gatsby-theme-material-ui-top-layout/colors';

interface Theme {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    primaryColor: string,
    setPrimaryColor: React.Dispatch<React.SetStateAction<string>>,
}

const theme: Theme = {
    isDarkMode: true,
    setIsDarkMode: () => true,
    primaryColor: primaryColor,
    setPrimaryColor: () => primaryColor
};

const ThemeContext = createContext(theme);

export default ThemeContext;
