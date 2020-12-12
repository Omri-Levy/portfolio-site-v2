import {createMuiTheme, CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import React, {useContext} from 'react';
import lightTheme from '../../../lightTheme';
import ThemeContext from '../../context/ThemeContext/ThemeContext';
import darkTheme from '../../themes/darkTheme';

const ThemeTopLayout: React.FC = ({children}) => {
    //@ts-ignore
    const {isDarkMode} = useContext(ThemeContext);
    const theme: any = isDarkMode ? darkTheme : lightTheme;
    const selectedTheme = createMuiTheme(theme);

    return (
        <ThemeProvider theme={selectedTheme}>
            <CssBaseline>
                {children}
            </CssBaseline>
        </ThemeProvider>
    );
};

export default ThemeTopLayout;

