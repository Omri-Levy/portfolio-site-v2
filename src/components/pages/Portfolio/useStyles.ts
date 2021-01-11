import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	portfolioContainer: {
		'& .MuiListItemIcon-root': {
			color: theme.palette.primary.main,
		},
		height: `unset`,
		[`@media (max-width: 1280px) and (min-width: 1000px)`]: {
			marginTop: 59,
		},
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			display: `block`,
			flexDirection: `unset`,
			alignItems: `unset`,
		},
	},
}));

export default useStyles;
