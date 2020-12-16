import {makeStyles} from 'src/deps';
import getCustomBreakpoints from 'src/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
    box: {
        [getCustomBreakpoints('md', theme, 'up')]: {
            marginBottom: 15
        }
    }
}));

export default useStyles;
