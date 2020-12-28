import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	profilePic: {
		margin: `0 auto`,
		borderRadius: `100vh`,
		backgroundColor: theme.palette.primary.main,
		marginBottom: 13,
		width: 124,
		height: 124,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			width: 180,
			height: 180,
			display: `inline-block`,
			marginTop: 1,
			marginRight: 25,
		},
	},
}));

export default useStyles;
