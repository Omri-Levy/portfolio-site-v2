import React, {createContext} from 'react';
import {primaryColor} from '../../hooks/useMakeTheme/colors';

interface Theme {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    primaryColor: string,
    setPrimaryColor: React.Dispatch<React.SetStateAction<string>>,
    isRTL: boolean,
    setIsRTL: React.Dispatch<React.SetStateAction<boolean>>,
}

const theme: Theme = {
    isDarkMode: true,
    setIsDarkMode: () => true,
    primaryColor: primaryColor,
    setPrimaryColor: () => primaryColor,
    isRTL: false,
    setIsRTL: () => false
};

const ThemeContext = createContext(theme);

export default ThemeContext;
