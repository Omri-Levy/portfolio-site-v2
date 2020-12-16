import {createMuiTheme, darken} from '@material-ui/core';
import {enUS, heIL} from '@material-ui/core/locale';
import {DefaultTheme} from '@material-ui/styles';
import {useContext} from 'src/deps';
import themeFavicon from 'src/utils/themeFavicon';
import {ThemeContext} from '../../context/ThemeContext';
import {
    backgroundColor,
    primaryContrastColor,
    primaryTextColor,
    secondaryContrastColor,
    secondaryTextColor
} from './colors';

const useMakeTheme: () => DefaultTheme = () => {
    const {isDarkMode, primaryColor, isRTL} = useContext(ThemeContext);
    themeFavicon(primaryColor);
    const theme = {
        direction: isRTL ? 'rtl' : 'ltr',
        breakpoints: {
            values: {
                xs: 350,
                sm: 600,
                ms: 800,
                md: 1000,
                lg: 1280,
                mlg: 1830,
                xl: 1920
            }
        },
        palette: {
            background: {
                default: isDarkMode ? backgroundColor
                    : primaryContrastColor
            },
            text: {
                primary: isDarkMode ? primaryTextColor : secondaryTextColor,
                secondary: isDarkMode ? secondaryTextColor
                    : primaryTextColor
            },
            primary: {
                main: primaryColor,
                secondary: isDarkMode ? backgroundColor
                    : primaryContrastColor,
                accent: isDarkMode ? secondaryContrastColor
                    : primaryTextColor
            },
            secondary: {
                main: primaryColor,
                secondary: '#fff'
            },
            contrast: {
                primary: isDarkMode ? primaryContrastColor :
                    secondaryContrastColor
            }
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    body: {
                        overflowX: 'hidden',
                        direction: isRTL ? 'rtl' : 'ltr'
                    }
                }
            },
            MuiFilledInput: {
                root: {
                    backgroundColor: isDarkMode ? secondaryContrastColor :
                        primaryTextColor,
                    '&$focused': {
                        backgroundColor: isDarkMode ? secondaryContrastColor :
                            primaryTextColor
                    }
                },
                underline: {
                    '&:hover': {
                        backgroundColor: isDarkMode ? secondaryContrastColor :
                            primaryTextColor
                    }
                }
            },
            MuiSwitch: {
                root: {
                    marginBottom: 6
                },
                thumb: {
                    color: primaryColor,
                    marginTop: 3,
                    width: 20,
                    height: 20
                },
                track: {
                    backgroundColor: secondaryContrastColor,
                    height: 20,
                    width: 40,
                    borderRadius: '100vh'
                },
                colorSecondary: {
                    '&$checked + $track': {
                        backgroundColor: isDarkMode
                            ? primaryContrastColor : secondaryContrastColor
                    }
                }
            },
            MuiButton: {
                containedPrimary: {
                    color: primaryTextColor,
                    boxShadow: '0px 2px 4px #000',
                    border: `1px solid ${darken(primaryColor,
                        0.25)}`,
                    padding: 4,
                    borderRadius: 3
                }
            },
            MuiSvgIcon: {
                root: {
                    color: primaryColor,
                    width: 24,
                    height: 24
                }
            }
        },
        typography: {
            fontFamily: [
                'Montserrat', 'sans-serif'
            ].join(','),
            body1: {
                fontFamily: [
                    'Open Sans', 'sans-serif'
                ].join(','),
                color: isDarkMode ? primaryTextColor : secondaryTextColor
            },
            h1: {
                color: isDarkMode ? primaryTextColor : secondaryTextColor
            },
            h2: {
                color: primaryColor
            }
        }
    };

    // @ts-ignore
    return createMuiTheme(theme, isRTL ? heIL : enUS);
};

export default useMakeTheme;

