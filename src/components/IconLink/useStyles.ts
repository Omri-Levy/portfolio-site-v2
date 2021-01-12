import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints
	from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	link: {
		display: `flex`,
		alignItems: `flex-end`,
		textDecoration: `none`,
		color: theme.palette.text.primary,
		'&:visited': {
			color: `inherit`,
		},
		'&:hover': {
			backgroundColor: `rgba(255, 255, 255, 0.08)`,
		},
	},
	icon: {
		color: theme.palette.primary.main,
		width: 24,
		height: 24,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: 48,
			height: 48,
		},
	},
}));

export default useStyles;
