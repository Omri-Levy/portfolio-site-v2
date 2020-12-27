import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		textTransform: `capitalize`,
	},
	link: {
		textDecoration: `none`,
		color: `inherit`,
		"&:visited": {
			color: `inherit`,
		},
	},
}));

export default useStyles;
