import {createMuiTheme, CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import {useState} from './src/deps';
import darkTheme from './src/themes/darkTheme';
import lightTheme from './lightTheme';

export default ({element}: { element: any }) => {


    return (
        <ThemeProvider theme={selectedTheme}>
            <CssBaseline>
                {element}
            </CssBaseline>
        </ThemeProvider>
    );
};
