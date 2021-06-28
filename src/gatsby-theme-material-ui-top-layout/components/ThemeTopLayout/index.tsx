import { CssBaseline } from '@material-ui/core';
import {
	jssPreset,
	StylesProvider,
	ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import extend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import useMakeTheme from '../../../hooks/useMakeTheme';
import { ThemeProvider } from 'styled-components';

const ThemeTopLayout: React.FunctionComponent = ({ children }) => {
	const selectedTheme = useMakeTheme();
	const jss = create({
		plugins: [...jssPreset().plugins, rtl(), extend()],
	});

	return (
		<MuiThemeProvider theme={selectedTheme}>
			<ThemeProvider theme={selectedTheme}>
				<CssBaseline>
					<StylesProvider jss={jss} injectFirst>{children}</StylesProvider>
				</CssBaseline>
			</ThemeProvider>
		</MuiThemeProvider>
	);
};

export default ThemeTopLayout;
