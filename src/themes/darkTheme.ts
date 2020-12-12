import {darken} from '@material-ui/core';
import {
    backgroundColor,
    primaryColor,
    primaryContrastColor,
    primaryTextColor,
    secondaryContrastColor, secondaryTextColor
} from './colors';

const darkTheme = {
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
        type: 'dark',
        background: {
            default: backgroundColor
        },
        text: {
            main: primaryTextColor,
            secondary: secondaryTextColor,
        },
        primary: {
            main: primaryColor,
            secondary: backgroundColor
        },
        secondary: {
            main: primaryColor,
            secondary: '#fff'
        },
        accent: {
            main: secondaryContrastColor
        },
        contrast: {
            main: primaryContrastColor
        }
    },
    overrides: {
        MuiFilledInput: {
            root: {
                backgroundColor: secondaryContrastColor,
                '&$focused': {
                    backgroundColor: secondaryContrastColor
                }
            },
            underline: {
                '&:hover': {
                    backgroundColor: secondaryContrastColor
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
                height: 20,
                width: 40,
                borderRadius: '100vh'
            },
            colorSecondary: {
                '&$checked + $track': {
                    backgroundColor: primaryContrastColor
                }
            }
        },
        MuiButton: {
            containedPrimary: {
                color: primaryTextColor,
                boxShadow: '0px 4px 4px #000',
                border: `1px solid ${darken(primaryColor, 0.25)}`,
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
            color: primaryTextColor
        },
        h1: {
            color: primaryTextColor
        },
        h2: {
            color: primaryColor
        }
    }
};

export default darkTheme;
