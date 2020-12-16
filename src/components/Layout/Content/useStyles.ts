import {makeStyles} from 'src/deps';
import getCustomBreakpoints from 'src/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
    content: {
        [getCustomBreakpoints('md', theme, 'up')]: {
            width: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    }
}));

export default useStyles;
