import {CssBaseline} from '@material-ui/core';
import {
    jssPreset,
    StylesProvider,
    ThemeProvider,
} from '@material-ui/core/styles';
import {create} from 'jss';
import extend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import useMakeTheme from '../../hooks/useMakeTheme/useMakeTheme';

declare module '@material-ui/core/styles/createBreakpoints' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        ms: true;
        md: true;
        lg: true;
        mlg: true;
        xl: true;
    }
}

const ThemeTopLayout: React.FunctionComponent = ({children}) => {

    const selectedTheme = useMakeTheme();
    const jss = create({
        plugins: [...jssPreset().plugins, rtl(), extend()]
    });

    return (
        <ThemeProvider theme={selectedTheme}>
            <CssBaseline>
                <StylesProvider jss={jss}>
                    {children}
                </StylesProvider>
            </CssBaseline>
        </ThemeProvider>
    );
};

export default ThemeTopLayout;
