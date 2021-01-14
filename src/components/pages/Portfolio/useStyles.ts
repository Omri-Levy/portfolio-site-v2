import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	portfolioContainer: {
		'& .MuiListItemIcon-root': {
			color: theme.palette.primary.main,
		},
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			display: `block`,
			flexDirection: `unset`,
			alignItems: `unset`,
		},
	},
}));

export default useStyles;
