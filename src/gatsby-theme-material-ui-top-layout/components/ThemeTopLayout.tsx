import {createMuiTheme, CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext/ThemeContext';
import theme from '../theme';

const ThemeTopLayout: React.FC = ({children}) => {
    const {isDarkMode, primaryColor} = useContext(ThemeContext);
    const selectedTheme = createMuiTheme(theme(isDarkMode, primaryColor) as
        any);

    return (
        <ThemeProvider theme={selectedTheme}>
            <CssBaseline>
                {children}
            </CssBaseline>
        </ThemeProvider>
    );
};

export default ThemeTopLayout;
