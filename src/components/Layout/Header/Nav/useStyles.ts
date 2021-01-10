import { makeStyles } from '@material-ui/core/styles';
import { getCustomBreakpoints } from '~/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	nav: {
		height: `100%`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			height: `unset`,
			width: `min(250px, 100%)`,
		},
	},
	menuList: {
		height: `30%`,
		padding: 0,
		display: `flex`,
		flexDirection: `column`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: `100%`,
			flexDirection: `row`,
		},
		justifyContent: `space-between`,
	},
}));

export default useStyles;
