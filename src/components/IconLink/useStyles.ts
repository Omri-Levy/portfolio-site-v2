import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	link: {
		padding: 0,
		paddingRight: 13,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			paddingRight: 37,
		},
	},
	icon: {
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: 48,
			height: 48,
		},
	},
}));

export default useStyles;
