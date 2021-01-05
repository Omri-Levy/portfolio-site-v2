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
	},
}));

export default useStyles;
