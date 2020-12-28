import { makeStyles } from "@material-ui/core/styles";
import getCustomBreakpoints from "~/utils/getCustomBreakpoints";

const useStyles = makeStyles((theme) => ({
	outerBox: {
		display: `flex`,
		flexDirection: `column`,
		justifyContent: `flex-start`,
		alignItems: `center`,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			marginLeft: -10,
			alignItems: `flex-start`,
			flexDirection: `row`,
		},
	},
	phoneBox: {
		display: `flex`,
		alignItems: `center`,
		marginBottom: 28,
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			marginBottom: 18,
		},
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			marginBottom: 0,
			"& .MuiIconButton-root": {
				padding: 0,
			},
		},
		marginRight: 70,
	},
	emailBox: {
		display: `flex`,
		alignItems: `center`,
		marginBottom: 28,
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			marginBottom: 18,
		},
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			marginBottom: 0,
			"& .MuiIconButton-root": {
				padding: 10,
			},
		},
	},
}));

export default useStyles;
