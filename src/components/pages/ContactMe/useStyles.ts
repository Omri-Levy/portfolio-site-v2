import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

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
}));

export default useStyles;
