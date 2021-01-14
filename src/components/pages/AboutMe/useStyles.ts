import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 16,
		fontWeight: 500,
		color: theme.palette.primary.main,
		marginBottom: 12,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			marginLeft: 80,
			fontSize: 24,
			marginBottom: 9,
		},
	},
	subtitle: {
		fontSize: 14,
		fontWeight: 400,
		width: theme.direction === `rtl` ? 140 : 189,
		marginBottom: 12,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			marginLeft: 80,
			fontSize: 18,
			marginBottom: 10,
			width: 250,
		},
	},
	body: {
		fontSize: 12,
		fontWeight: 400,
		width: theme.direction === `rtl` ? 215 : 245,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			marginLeft: 80,
			fontSize: 16,
			width: 320,
		},
	},
	outerBox: {
		flexDirection: `column`,
		justifyContent: `center`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			flexDirection: `row-reverse`,
			justifyContent: `flex-end`,
		},
	},
	innerBox: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			alignItems: `flex-start`,
			textAlign: `left`,
			marginRight: 240,
		},
	},
}));

export default useStyles;
