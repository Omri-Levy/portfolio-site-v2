import React, {createContext} from 'react';

interface Theme {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const theme: Theme = {
    isDarkMode: false,
    setIsDarkMode: () => false
};

const ThemeContext = createContext(theme);

export default ThemeContext;
