import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.background[`landingPage`],
		},
	},
	mobileIllustrationContainer: {
		width: `100%`,
		height: `100%`,
		display: `flex`,
		flexDirection: `column`,
	},
}));

export default useStyles;
