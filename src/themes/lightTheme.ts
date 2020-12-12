import {darken} from '@material-ui/core';
import {
    primaryColor,
    primaryTextColor,
    primaryContrastColor,
    secondaryContrastColor,
    secondaryTextColor
} from './colors';

const lightTheme = {
    breakpoints: {
        values: {
            xs: 350,
            sm: 600,
            ms: 800,
            md: 1000,
            lg: 1280,
            mlg: 1750,
            xl: 1920
        }
    },
    palette: {
        type: 'light',
        background: {
            default: primaryContrastColor
        },
        text: {
            main: '#000',
            secondary: '#fff'
        },
        primary: {
            main: primaryColor,
            secondary: primaryContrastColor
        },
        secondary: {
            main: primaryColor,
            secondary: '#fff'
        },
        accent: {
            main: secondaryContrastColor
        },
        contrast: {
            main: secondaryContrastColor
        },
    },
    overrides: {
        MuiFilledInput: {
            root: {
                backgroundColor: primaryTextColor,
                '&$focused': {
                    backgroundColor: primaryTextColor
                }
            },
            underline: {
                '&:hover': {
                    backgroundColor: primaryTextColor
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
                    backgroundColor: secondaryContrastColor
                }
            }
        },
        MuiButton: {
            containedPrimary: {
                color: primaryTextColor,
                boxShadow: '0px 4px 4px #000',
                border: `1px solid ${darken(primaryColor, 0.3)}`,
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
            color: secondaryTextColor
        },
        h1: {
            color: secondaryTextColor
        },
        h2: {
            color: primaryColor
        }
    }
};

export default lightTheme;
