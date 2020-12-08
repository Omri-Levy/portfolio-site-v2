import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme(
	{
		palette: {
			background: {
				default: '#222831',
			},
			primary: {
				main: '#3e96ff',
			},
		},
		overrides: {
			MuiFilledInput: {
				root: {
					backgroundColor: '#393E46',
					'&$focused': {
						backgroundColor: '#393E46',
					}
				},
				underline: {
					'&:hover': {
						backgroundColor: '#393E46',
					},
				},
			},
			MuiSwitch: {
				root: {
					marginBottom: 6,
				},
				thumb: {
					color: '#222831',
					marginTop: 3,
					width: 20,
					height: 20,
				},
				track: {
					backgroundColor: '#3e96ff',
					height: 20,
					width: 40,
					borderRadius: '100vh',
				},
				colorSecondary: {
					'&$checked + $track': {
						backgroundColor: '#3e96ff',
					},
				},
			},
			MuiButton: {
				containedPrimary: {
					color: '#fff',
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
				'Montserrat',
				'sans-serif',
			].join(','),
			body1: {
				fontFamily: [
					'Open Sans',
					'sans-serif',
				].join(','),
				color: '#fff',
			},
			h1: {
				color: '#fff',
			},
			h2: {
				color: '#3e96ff',
			},
		},
	},
);

export default theme;
