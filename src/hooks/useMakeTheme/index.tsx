import {
	createMuiTheme,
	responsiveFontSizes,
	useMediaQuery,
} from '@material-ui/core';
import { enUS, heIL } from '@material-ui/core/locale';
import { DefaultTheme } from '@material-ui/styles';
import generateThemeFavicon from '../../utils/generateThemeFavicon';
import { grey } from '@material-ui/core/colors';
import useThemeContext from '../../context/ThemeProvider/useThemeContext';
import useAppContext from '../../context/AppProvider/useAppContext';

const useMakeTheme = (): DefaultTheme => {
	const { isDarkMode, primaryColor, isRTL } = useThemeContext();
	const { isBurgerMenuOpen } = useAppContext();
	const smDown = useMediaQuery(`(max-width: 60em)`);
	generateThemeFavicon();
	const theme: DefaultTheme = {
		direction: isRTL ? `rtl` : `ltr`,
		palette: {
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
					body: {
						direction: isRTL ? `rtl` : `ltr`,
						overflow: smDown && isBurgerMenuOpen ? `hidden` : `visible`,
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
			MuiIconButton: {
				colorPrimary: {
					'&:hover': {
						backgroundColor: `unset`,
					},
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
