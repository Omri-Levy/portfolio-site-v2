import React, {useState} from 'react';
import {ThemeContext} from '../ThemeContext';
import {Props} from './types';

const ThemeProvider: React.FC<Props> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [primaryColor, setPrimaryColor] = useState('#3e96ff');
    const [isRTL, setIsRTL] = useState(false);

    return (
        <ThemeContext.Provider value={
            {
                isDarkMode, setIsDarkMode, primaryColor, setPrimaryColor,
                isRTL, setIsRTL
            }
        }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
