import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	content: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		width: `100%`,
		padding: `0px 10px`,
		[getCustomBreakpoints(`sm`, theme, `up`)]: {
			padding: `0px 20px`,
		},
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: 1000,
			padding: 0,
		},
	},
}));

export default useStyles;
