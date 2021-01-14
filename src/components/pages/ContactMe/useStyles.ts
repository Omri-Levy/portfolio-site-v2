import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	contactLinksContainer: {
		display: `flex`,
		flexDirection: `column`,
		justifyContent: `flex-start`,
		alignItems: `center`,
		marginBottom: 20,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			alignItems: `flex-start`,
			flexDirection: `row`,
		},
	},
	links: {
		borderRadius: 5,
	},
}));

export default useStyles;
