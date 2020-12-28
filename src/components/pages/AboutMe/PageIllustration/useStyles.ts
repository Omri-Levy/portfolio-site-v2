import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	pageIllustrationContainer: {
		display: `flex`,
		flexDirection: `column`,
		height: `min(35vh, 300px)`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: `100%`,
			height: `unset`,
		},
	},
	pageIllustration: {
		fill: `none`,
		marginInline: `auto`,
		marginTop: `auto`,
		width: `min(100%, 620px)`,
		padding: `0 10px`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			maxWidth: 559,
			margin: 0,
			marginLeft: `auto`,
		},
		[getCustomBreakpoints(`lg`, theme, `up`)]: {
			maxWidth: 695,
			marginBottom: 125,
		},
		[`@media(max-height: 800px)`]: {
			display: `none`,
		},
	},
}));

export default useStyles;
