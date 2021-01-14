import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	darkModeToggleContainer: {
		display: `flex`,
		alignItems: `center`,
	},
	label: {
		display: `flex`,
		alignItems: `center`,
	},
	icon: {
		color: theme.palette.primary.main,
		cursor: `pointer`,
	},
	MuiSwitch: {
		root: {
			marginBottom: 6,
		},
		thumb: {
			color: theme.palette.primary.main,
			marginTop: 3,
			width: 20,
			height: 20,
		},
		track: {
			backgroundColor: theme.palette.primary.dark,
			height: 20,
			width: 40,
			borderRadius: `100vh`,
		},
		colorSecondary: {
			'&$checked + $track': {
				backgroundColor: theme.palette.type === `dark`
					? theme.palette.primary.dark
					: theme.palette.primary.light,
			},
		},
	},
}));

export default useStyles;
