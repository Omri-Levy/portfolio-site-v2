import { makeStyles } from "@material-ui/core/styles";
import getCustomBreakpoints from "~/utils/getCustomBreakpoints";

const useStyles = makeStyles((theme) => ({
	appBar: {
		display: `flex`,
		justifyContent: `center`,
		top: `unset`,
		bottom: 0,
		margin: 0,
		height: 59,
		padding: `0 19px`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			top: 0,
			padding: `0 37px`,
		},
	},
	innerBox: {
		display: `flex`,
		justifyContent: `space-between`,
		[`@media (max-width: 360px)`]: {
			justifyContent: `center`,
		},
		margin: 0,
		padding: 0,
	},
}));

export default useStyles;
