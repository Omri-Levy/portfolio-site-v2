import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	content: {
		[getCustomBreakpoints('md', theme, 'up')]: {
			width: 1000,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
}));

export default useStyles;
