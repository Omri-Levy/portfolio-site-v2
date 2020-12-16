import {makeStyles} from 'src/deps';
import getCustomBreakpoints from 'src/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
    contactMeFormContainer: {
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        [getCustomBreakpoints('xs', theme, 'down')]: {
            margin: '0 7px'
        }
    },
    fullName: {
        width: 'calc(100vw - 10px)',
        marginBottom: 15,
        [getCustomBreakpoints('lg', theme, 'up')]: {
            marginRight: 15,
            width: 395
        }
    },
    email: {
        width: 'calc(100vw - 10px)',
        marginBottom: 15,
        [getCustomBreakpoints('lg', theme, 'up')]: {
            width: 479
        }
    },
    message: {
        width: 'calc(100vw - 10px)',
        fontSize: 11,
        [getCustomBreakpoints('lg', theme, 'up')]: {
            width: 889
        }
    },
    button: {
        width: 39,
        height: 23,
        fontSize: 11,
        fontWeight: 400,
        textTransform: 'unset',
        marginTop: 10,
        [getCustomBreakpoints('lg', theme, 'up')]: {
            marginRight: 0,
            width: 72,
            height: 39,
            fontSize: 24
        }
    }
}));

export default useStyles;
