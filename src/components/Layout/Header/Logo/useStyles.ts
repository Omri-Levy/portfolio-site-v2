import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	title: {
		textAlign: `center`,
		textDecoration: `none`,
		'&:hover': {
			textDecoration: `none`,
		},
		color: theme.palette.secondary.dark,
		fontSize: 16,
		fontWeight: 700,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			textAlign: `initial`,
			color: theme.palette.text.secondary,
		},
	},
	subtitle: {
		display: `block`,
		fontSize: 14,
		fontWeight: 500,
		color: theme.palette.primary.dark,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			color: theme.palette.text.secondary,
		},
	},
}));

export default useStyles;
