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
}));

export default useStyles;
