import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	configContainer: {
		display: `flex`,
		alignItems: `center`,
		height: 59,
		padding: `0 20px`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			position: `fixed`,
			top: 59,
			left: 0,
		},
		[`@media (max-width: 280px)`]: {
			padding: `0 10px`,
		},
	},
}));

export default useStyles;
