import React, {useState} from 'react';
import {ThemeContext} from '../ThemeContext';
import {Props} from './types';

const ThemeProvider: React.FC<Props> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [primaryColor, setPrimaryColor] = useState('#3e96ff');

    return (
        <ThemeContext.Provider value={
            {isDarkMode, setIsDarkMode, primaryColor, setPrimaryColor}
        }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
