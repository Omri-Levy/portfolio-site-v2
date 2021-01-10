import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	title: {
		textAlign: `left`,
		textDecoration: `none`,
		'&:hover': {
			textDecoration: `none`,
		},
		color: theme.palette.secondary.dark,
		fontSize: 13,
		fontWeight: 700,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			color: theme.palette.text.secondary,
			fontSize: 16,
		},
	},
	subtitle: {
		display: `block`,
		fontSize: 11,
		fontWeight: 500,
		color: theme.palette.primary.dark,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			color: theme.palette.text.secondary,
			fontSize: 14,
		},
	},
}));

export default useStyles;
