import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	configContainer: {
		display: `flex`,
		alignItems: `center`,
		height: 59,
		padding: `0 20px`,
		position: `fixed`,
		left: 0,
		bottom: 79,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			top: 79,
		},
		[`@media (max-width: 280px)`]: {
			padding: `0 10px`,
		},
	},
}));

export default useStyles;
