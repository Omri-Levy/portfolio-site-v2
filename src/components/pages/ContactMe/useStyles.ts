import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	contactMeContainer: {
		height: '100vh',
		width: '100%',
		'& h1': {
			[getCustomBreakpoints('md', theme, 'down')]: {
				marginBottom: 18,
			},
		},
	},
	outerBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		[getCustomBreakpoints('lg', theme, 'up')]: {
			marginLeft: -10,
			alignItems: 'flex-start',
			flexDirection: 'row',
		},
	},
	innerBox1: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 28,
		[getCustomBreakpoints('md', theme, 'down')]: {
			marginBottom: 18,
		},
		marginRight: 70,
	},
	innerBox2: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 28,
		[getCustomBreakpoints('md', theme, 'down')]: {
			marginBottom: 18,
		},
	},
}));

export default useStyles;
