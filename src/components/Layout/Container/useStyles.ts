import {makeStyles} from 'src/deps';
import getCustomBreakpoints from 'src/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        [getCustomBreakpoints('lg', theme, 'up')]: {
            textAlign: 'left',
        },
        padding: 0,
        margin: 0
    }
}));

export default useStyles;
