import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	listItem: {
		marginRight: 23,
		display: `flex`,
		flexDirection: `column`,
		'&:last-child': {
			marginRight: 0,
		},
	},
	icon: {
		color: theme.palette.secondary.light,
	},
	link: {
		fontSize: 13,
		fontWeight: 400,
		color: theme.palette.secondary.light,
		textDecoration: `none`,
		'&:hover': {
			textDecoration: `none`,
		},
	},
}));

export default useStyles;
