import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	link: {
		display: `flex`,
		alignItems: `flex-end`,
		textDecoration: `none`,
		color: theme.palette.text.primary,
		'&:visited': {
			color: `inherit`,
		},
	},
	icon: {
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: 48,
			height: 48,
		},
	},
}));

export default useStyles;
