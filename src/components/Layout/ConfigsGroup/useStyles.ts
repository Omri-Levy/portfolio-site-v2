import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	configCog: {
		transform: `scale(1)`,
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
	closedConfigContainer: {
		transform: `scale(0)`,
	},
}));

export default useStyles;
