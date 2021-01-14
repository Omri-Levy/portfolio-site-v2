import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.background[`landingPage`],
		},
	},
	desktopIllustrationContainer: {
		margin: 0,
		width: `100vw`,
		height: `100vh`,
		display: `flex`,
		flexDirection: `column`,
	},
}));

export default useStyles;
