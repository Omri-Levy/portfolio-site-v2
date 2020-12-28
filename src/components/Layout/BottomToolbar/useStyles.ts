import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	bottomToolbarContainer: {
		width: `100%`,
		display: `flex`,
		justifyContent: `flex-start`,
		alignItems: `center`,
		position: `fixed`,
		height: 59,
		bottom: 59,
		left: 0,
		right: 0,
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			justifyContent: `center`,
		},
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			bottom: 0,
		},
	},
}));

export default useStyles;
