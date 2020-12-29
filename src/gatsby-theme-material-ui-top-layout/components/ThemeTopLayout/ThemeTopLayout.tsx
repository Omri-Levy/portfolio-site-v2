import { CssBaseline } from '@material-ui/core';
import {
	jssPreset,
	StylesProvider,
	ThemeProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import extend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import useMakeTheme from '~/hooks/useMakeTheme/useMakeTheme';
import { Locales } from '~/components/Layout/Locales';

//eslint-disable-next-line
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

const ThemeTopLayout: React.FunctionComponent = ({ children }) => {
	const selectedTheme = useMakeTheme();
	const jss = create({
		plugins: [...jssPreset().plugins, rtl(), extend()],
	});

	return (
		<ThemeProvider theme={selectedTheme}>
			<CssBaseline>
				<StylesProvider jss={jss}>
					<Locales>{children}</Locales>
				</StylesProvider>
			</CssBaseline>
		</ThemeProvider>
	);
};

export default ThemeTopLayout;
