import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		height: `100vh`,
		width: `100%`,
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			display: `flex`,
			flexDirection: `column`,
			alignItems: `center`,
		},
	},
}));

export default useStyles;
