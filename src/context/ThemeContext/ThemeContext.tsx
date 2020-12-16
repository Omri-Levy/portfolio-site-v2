import React, {createContext} from 'react';
import {primaryColor} from 'src/hooks/useMakeTheme/colors';

type PrimaryColor = '#fb3eff' | '#3e96ff' | '#ff3e3e' | '#41ff3e';

interface Theme {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    primaryColor: PrimaryColor,
    setPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>,
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
