import { createMuiTheme } from '@material-ui/core';
import { enUS, heIL } from '@material-ui/core/locale';
import { DefaultTheme } from '@material-ui/styles';
import { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import { ThemeContext } from '../../context/ThemeProvider';
import generateThemeFavicon from '../../utils/generateThemeFavicon';
import {
  backgroundColor,
  primaryBorderColor,
  primaryContrastColor,
  primaryTextColor,
  secondaryContrastColor,
  secondaryTextColor,
} from './colors';

const useMakeTheme = (): DefaultTheme => {
	const { isDarkMode, primaryColor, isRTL } = useContext(ThemeContext);
	const { isBurgerMenuOpen } = useContext(AppContext);
	generateThemeFavicon();
	const theme: DefaultTheme = {
		direction: isRTL ? `rtl` : `ltr`,
		breakpoints: {
			values: {
				xs: 350,
				sm: 600,
				ms: 800,
				md: 1000,
				lg: 1280,
				mlg: 1830,
				xl: 1920,
			},
		},
		palette: {
			type: isDarkMode ? `dark` : `light`,
			background: {
				default: isDarkMode ? backgroundColor : primaryContrastColor,
				landingPage: backgroundColor,
			},
			text: {
				primary: isDarkMode ? primaryTextColor : secondaryTextColor,
				secondary: isDarkMode ? secondaryTextColor : primaryTextColor,
			},
			primary: {
				main: primaryColor,
				border: primaryBorderColor(primaryColor),
				secondary: isDarkMode ? backgroundColor : primaryContrastColor,
				dark: secondaryContrastColor,
				light: primaryContrastColor,
				contrastText: isDarkMode
					? primaryContrastColor
					: secondaryContrastColor,
			},
			secondary: {
				main: primaryColor,
				light: primaryTextColor,
				dark: secondaryTextColor,
				contrastText: isDarkMode
					? secondaryContrastColor
					: primaryContrastColor,
			},
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'#gatsby-focus-wrapper': {
						width: `100%`,
						height: `100%`,
					},
					'#___gatsby': {
						width: `100%`,
						height: `100%`,
					},
					body: {
						direction: isRTL ? `rtl` : `ltr`,
						overflow: isBurgerMenuOpen && `hidden`,
					},
					img: {
						width: `100%`,
						display: `block`,
					},
				},
			},
			MuiButton: {
				containedPrimary: {
					color: isDarkMode ? secondaryTextColor : primaryTextColor,
					boxShadow: `0px 2px 4px rgb(0, 0, 0)`,
					border: `1px solid ${primaryBorderColor(primaryColor)}`,
					padding: 4,
					borderRadius: 3,
					'&:hover': {
						color: primaryTextColor,
					},
				},
			},
		},
		typography: {
			fontFamily: [`Montserrat`, `sans-serif`].join(`,`),
			body1: {
				fontFamily: [`Open Sans`, `sans-serif`].join(`,`),
				color: isDarkMode ? primaryTextColor : secondaryTextColor,
			},
			h1: {
				color: isDarkMode ? primaryTextColor : secondaryTextColor,
			},
			h2: {
				color: primaryColor,
			},
		},
	};

	return createMuiTheme(theme, isRTL ? heIL : enUS);
};

export default useMakeTheme;
