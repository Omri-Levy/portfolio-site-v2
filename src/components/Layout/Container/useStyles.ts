import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		height: `100%`,
		width: `100%`,
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		textAlign: `center`,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			textAlign: `left`,
		},
		padding: 0,
		margin: 0,
	},
}));

export default useStyles;
