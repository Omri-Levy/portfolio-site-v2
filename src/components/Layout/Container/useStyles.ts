import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints
	from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		backgroundColor: theme.palette.background.default,
		width: `100%`,
		height: `100%`,
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
