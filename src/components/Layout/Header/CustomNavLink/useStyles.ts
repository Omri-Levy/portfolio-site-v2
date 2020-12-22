import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	menuItem: {
		margin: 0,
		marginRight: 23,
		padding: 0,
		'&:nth-child(3)': {
			marginRight: 0,
		},
	},
	link: {
		fontSize: 13,
		fontWeight: 400,
		color: '#fff',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
		},
	},
}));

export default useStyles;
