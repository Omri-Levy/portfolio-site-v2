import {
	primaryBlueColor,
	primaryColor,
	primaryTextColor,
	secondaryColor,
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
			xl: 1920,
		},
	},
	palette: {
	    type: 'dark',
		background: {
			default: primaryColor,
		},
        text: {
		    main: '#fff',
		    secondary: '#000',
        },
		primary: {
			main: primaryBlueColor,
		},
        secondary: {
            main: primaryBlueColor,
        },
	},
	overrides: {
		MuiFilledInput: {
			root: {
				backgroundColor: secondaryColor,
				'&$focused': {
					backgroundColor: secondaryColor,
				},
			},
			underline: {
				'&:hover': {
					backgroundColor: secondaryColor,
				},
			},
		},
		MuiSwitch: {
			root: {
				marginBottom: 6,
			},
			thumb: {
				color: primaryTextColor,
				marginTop: 3,
				width: 20,
				height: 20,
			},
			track: {
				backgroundColor: primaryBlueColor,
				height: 20,
				width: 40,
				borderRadius: '100vh',
			},
			colorSecondary: {
				'&$checked + $track': {
					backgroundColor: primaryBlueColor,
				},
			},
		},
		MuiButton: {
			containedPrimary: {
				color: primaryTextColor,
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				border: '1px solid #3184E7',
				padding: 5,
				borderRadius: 3,
			},
		},
		MuiSvgIcon: {
			root: {
				color: '#3e96ff',
				width: 24,
				height: 24,
			},
		},
	},
	typography: {
		fontFamily: [
			'Montserrat', 'sans-serif',
		].join(','),
		body1: {
			fontFamily: [
				'Open Sans', 'sans-serif',
			].join(','),
			color: primaryTextColor,
		},
		h1: {
			color: primaryTextColor,
		},
		h2: {
			color: primaryBlueColor,
		},
	},
};

export default darkTheme;
