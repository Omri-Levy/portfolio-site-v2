import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import React from 'react';
import {LandingPage} from '../components/LandingPage';
import darkTheme from '../themes/darkTheme';

const Index = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline>
            <LandingPage/>
        </CssBaseline>
    </ThemeProvider>
);

export default Index;
