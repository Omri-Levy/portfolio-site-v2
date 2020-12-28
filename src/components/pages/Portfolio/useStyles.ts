import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	portfolioContainer: {
		width: `100%`,
		[`@media (max-width: 1280px) and (min-width: 1000px)`]: {
			marginTop: 59,
		},
	},
}));

export default useStyles;
