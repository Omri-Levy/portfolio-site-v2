import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints
	from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	configCog: {
		position: `fixed`,
		width: 34,
		height: 34,
		color: theme.palette.primary.main,
		border: `1px solid ${theme.palette.primary.main}`,
		left: 20,
		bottom: 10,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			bottom: `unset`,
			top: 97,
		},
	},
	configContainer: {
		transform: `scaleX(0)`,
		transformOrigin: `left`,
		border: `1px solid ${theme.palette.primary.main}`,
		display: `flex`,
		alignItems: `center`,
		position: `fixed`,
		left: 64,
		bottom: 10,
		borderRadius: `100vh`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			bottom: `unset`,
			top: 87,
		},
	},
}));

export default useStyles;
