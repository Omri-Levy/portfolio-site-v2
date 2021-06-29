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
		insertionPoint: `mui-inject-first`,
	});

	return (
		<StylesProvider jss={jss}>
			<MuiThemeProvider theme={selectedTheme}>
				<ThemeProvider theme={selectedTheme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</MuiThemeProvider>
		</StylesProvider>
	);
};

export default ThemeTopLayout;
