import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { enUS, heIL } from '@material-ui/core/locale';
import { DefaultTheme } from '@material-ui/styles';
import generateThemeFavicon from '../../utils/generateThemeFavicon';
import { grey } from '@material-ui/core/colors';
import useThemeContext from '../../context/ThemeProvider/useThemeContext';
import useAppContext from '../../context/AppProvider/useAppContext';
import isSmDown from '../../utils/isSmDown';

const useMakeTheme = (): DefaultTheme => {
	const { isDarkMode, primaryColor, isRTL } = useThemeContext();
	const { isBurgerMenuOpen } = useAppContext();
	const smDown = isSmDown();
	generateThemeFavicon();
	const background = isDarkMode ? {
		background: {
			default: grey[900],
		},
	} : {};
	const theme: DefaultTheme = {
		direction: isRTL ? `rtl` : `ltr`,
		palette: {
			...background,
			type: isDarkMode ? `dark` : `light`,
			primary: {
				main: primaryColor.colorWithShade,
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
					html: {
						scrollSnapType: `y mandatory`,
						scrollSnapPointsY: `repeat(100vh)`,
						overflowY: `scroll`,
						height: `100vh`,
					},
					body: {
						overflow: smDown && isBurgerMenuOpen ? `hidden` : `visible`,
					},
					'*::-webkit-scrollbar': {
						width: 10,
					},

					'*::-webkit-scrollbar-track': {
						background: grey[isDarkMode ? 800 : 300],
					},

					'*::-webkit-scrollbar-thumb': {
						background: primaryColor.colorWithShade,
						borderRadius: 10,
					},

					'*::-webkit-scrollbar-thumb:hover': {
						background: '#555',
					},
				},
			},
			MuiOutlinedInput: {
				input: {
					backgroundColor: grey[isDarkMode ? 800 : 100],
				},
				multiline: {
					backgroundColor: grey[isDarkMode ? 800 : 100],
				},
			},
		},
		typography: {
			fontFamily: [`Montserrat`, `sans-serif`].join(`,`),
			body1: {
				fontFamily: [`Open Sans`, `sans-serif`].join(`,`),
			},
		},
	};

	return responsiveFontSizes(createMuiTheme(theme, isRTL ? heIL : enUS));
};

export default useMakeTheme;
