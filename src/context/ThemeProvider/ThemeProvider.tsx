import React, {useState} from 'react';
import {ChildrenProps} from 'src/utils/types';
import {ThemeContext} from '../ThemeContext';

const ThemeProvider: React.FunctionComponent<ChildrenProps> = ({
                                                                   children
                                                               }) => {
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
