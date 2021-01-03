import { makeStyles } from '@material-ui/core/styles';
import { getCustomBreakpoints } from '~/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	appBar: {
		flexDirection: `row`,
		justifyContent: `space-between`,
		alignItems: `center`,
		padding: `0 20px`,
		top: `unset`,
		bottom: 0,
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			justifyContent: `center`,
		},
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			top: 0,
			bottom: `unset`,
		},
		// glass
		// backgroundColor: `rgba(255, 255, 255, 0.2)`,
		// backdropFilter: `blur(40px)`,
		// border: `solid 2px transparent`,
		// backgroundClip: `padding-box`,
		// boxShadow: `10px 10px 10px rgba(46, 54, 68, 0.03)`,
	},
}));

export default useStyles;
