import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		display: `flex`,
		placeContent: `center`,
		textTransform: `capitalize`,
		textAlign: `center`,
	},
	link: {
		textDecoration: `none`,
		color: `inherit`,
		'&:visited': {
			color: `inherit`,
		},
	},
	spinner: {},
}));

export default useStyles;
