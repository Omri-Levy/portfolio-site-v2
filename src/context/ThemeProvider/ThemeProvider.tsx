import React, {useState} from 'react';
import {ThemeContext} from '../ThemeContext';
import {Props} from './types';

const ThemeProvider: React.FC<Props> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
