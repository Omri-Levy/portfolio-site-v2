import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	box: {
		[getCustomBreakpoints('md', theme, 'up')]: {
			marginBottom: 15,
		},
	},
}));

export default useStyles;
