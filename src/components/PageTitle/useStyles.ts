import { makeStyles } from "@material-ui/core/styles";
import getCustomBreakpoints from "~/utils/getCustomBreakpoints";

const useStyles = makeStyles((theme) => ({
	typography: {
		fontSize: 24,
		fontWeight: 700,
		marginLeft: 8,
		marginBottom: 32,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			fontSize: 56,
		},
	},
	pageTitleContainer: {
		display: `inline-block`,
		marginLeft: -5,
		marginTop: 91,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			marginTop: 180,
		},
		[getCustomBreakpoints(`sm`, theme, `down`)]: {
			marginTop: 61,
		},
	},
	innerBox: {
		display: `flex`,
	},
	icon: {
		marginTop: 2,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			marginTop: -6,
			width: 72,
			height: 72,
		},
	},
}));

export default useStyles;
