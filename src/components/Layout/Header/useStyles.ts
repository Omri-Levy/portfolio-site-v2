import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	appBar: {
		alignItems: `center`,
		padding: `8px 20px`,
		top: `unset`,
		bottom: 0,
		transform: `scale(1)`,
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			zIndex: 1104,
			transform: `scale(0)`,
			width: `100vw`,
			height: `100vh`,
			// glass
			backgroundColor: `rgba(255, 255, 255, 0.6)`,
			backdropFilter: `blur(40px)`,
			border: `solid 2px transparent`,
			backgroundClip: `padding-box`,
			boxShadow: `10px 10px 10px rgba(46, 54, 68, 0.03)`,
		},
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			justifyContent: `center`,
		},
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			justifyContent: `space-between`,
			top: 0,
			bottom: `unset`,
			flexDirection: `row`,
		},
	},
}));

export default useStyles;
