import React, {createContext} from 'react';

interface Theme {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const theme: Theme = {
    isDarkMode: true,
    setIsDarkMode: () => true
};

const ThemeContext = createContext(theme);

export default ThemeContext;
