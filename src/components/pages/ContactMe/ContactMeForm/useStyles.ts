import { makeStyles } from "@material-ui/core/styles";
import getCustomBreakpoints from "~/utils/getCustomBreakpoints";

const sharedProps = {
	width: `100%`,
	marginBottom: 10,
};

const useStyles = makeStyles((theme) => ({
	contactMeFormContainer: {
		margin: `10px 0`,
		display: `flex`,
		justifyContent: `center`,
		width: `min(100% - 10px, 1000px)`,
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			margin: `0 7px`,
		},
		"& label": {
			marginLeft: 10,
		},
	},
	formGridContainer: {
		width: `100%`,
	},
	form: {
		width: `100%`,
	},
	fullNameGridItem: {
		width: `100%`,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			width: `40%`,
		},
	},
	fullName: {
		...sharedProps,
		paddingRight: 2,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			paddingRight: 10,
		},
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			marginBottom: 5,
		},
	},
	emailGridItem: {
		width: `100%`,
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			width: `60%`,
		},
	},
	email: {
		...sharedProps,
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			marginBottom: 5,
		},
	},
	messageGridItem: {
		width: `100%`,
	},
	message: {
		...sharedProps,
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			marginBottom: 5,
		},
	},
	sendButtonContainer: {},
}));

export default useStyles;
