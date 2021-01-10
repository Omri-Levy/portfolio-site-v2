import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	content: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		width: `100%`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: 1000,
		},
	},
}));

export default useStyles;
