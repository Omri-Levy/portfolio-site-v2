import {darken} from '@material-ui/core';
import {
    backgroundColor,
    primaryContrastColor,
    primaryTextColor,
    secondaryContrastColor,
    secondaryTextColor
} from './colors';

const theme = (isDarkMode: boolean, primaryColor: string) => ({
        breakpoints: {
            values: {
                xs: 350,
                sm: 600,
                md: 1000,
                lg: 1280,
                xl: 1920
            }
        },
        palette: {
            background: {
                default: isDarkMode ? backgroundColor : primaryContrastColor
            },
            text: {
                main: isDarkMode ? primaryTextColor : secondaryTextColor,
                secondary: isDarkMode ? secondaryTextColor : primaryTextColor
            },
            primary: {
                main: primaryColor,
                secondary: isDarkMode ? backgroundColor : primaryContrastColor
            },
            secondary: {
                main: primaryColor,
                secondary: '#fff'
            },
            accent: {
                main: secondaryContrastColor
            },
            contrast: {
                main: isDarkMode ? primaryContrastColor :
                    secondaryContrastColor
            }
        },
        overrides: {
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
                        backgroundColor: isDarkMode ? primaryContrastColor :
                            secondaryContrastColor
                    }
                }
            },
            MuiButton: {
                containedPrimary: {
                    color: primaryTextColor,
                    boxShadow: '0px 4px 4px #000',
                    border: `1px solid ${darken(primaryColor, 
                        0.25)}`,
                    padding: 5,
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
                color: primaryColor,
            }
        }
    }
);

export default theme;
