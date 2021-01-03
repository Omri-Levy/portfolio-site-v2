import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	topToolbarContainer: {
		display: `flex`,
		justifyContent: `space-between`,
		alignItems: `center`,
		width: `100%`,
		top: 0,
		left: 0,
		right: 0,
		position: `fixed`,
		padding: `0 20px`,
		height: 59,
		zIndex: 2,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			top: 138,
		},
	},
}));

export default useStyles;
