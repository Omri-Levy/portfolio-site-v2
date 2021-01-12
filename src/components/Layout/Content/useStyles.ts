import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints
	from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	content: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		width: `100%`,
		padding: 20,
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			padding: 0,
		},
		[`@media (max-width: 520px)`]: {
			padding: 15,
		},
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: 1000,
			padding: 0,
		},
	},
}));

export default useStyles;
