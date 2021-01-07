import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	title: {
		textDecoration: `none`,
		'&:hover': {
			textDecoration: `none`,
		},
		[`@media (max-width: 360px)`]: {
			display: `none`,
		},
		color: theme.palette.text.secondary,
		fontSize: 13,
		fontWeight: 700,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			fontSize: 16,
		},
	},
	subtitle: {
		display: `block`,
		fontSize: 11,
		fontWeight: 500,
		color: theme.palette.text.secondary,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			fontSize: 14,
		},
	},
}));

export default useStyles;
