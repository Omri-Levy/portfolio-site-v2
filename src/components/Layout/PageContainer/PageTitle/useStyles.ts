import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	typography: {
		color: theme.palette.text.primary,
		fontSize: 24,
		fontWeight: 700,
		marginLeft: 8,
		marginBottom: 32,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			fontSize: 56,
		},
	},
	pageTitleContainer: {
		display: `inline-flex`,
		marginLeft: -5,
		marginTop: 91,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			marginTop: 220,
		},
		[`@media (max-width: 1280px) and (min-width: 1000px)`]: {
			marginTop: `calc(59px * 3 + 20px)`,
		},
		[getCustomBreakpoints(`sm`, theme, `down`)]: {
			marginTop: 61,
		},
	},
	icon: {
		color: theme.palette.primary.main,
		width: 24,
		height: 24,
		marginTop: 2,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			marginTop: -6,
			width: 72,
			height: 72,
		},
	},
}));

export default useStyles;
