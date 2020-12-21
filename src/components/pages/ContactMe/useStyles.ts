import {makeStyles} from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
    contactMeContainer: {
        height: '100vh',
        [getCustomBreakpoints('lg', theme, 'up')]: {
            width: '90%'
        },
        '& h1': {
            [getCustomBreakpoints('md', theme, 'down')
                ]: {
                marginBottom: 18
            }
        }
    },
    outerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [getCustomBreakpoints('lg', theme, 'up')]: {
            alignItems: 'flex-start',
            flexDirection: 'row'
        }
    },
    innerBox1: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 28,
        [getCustomBreakpoints('md', theme, 'down')]: {
            marginBottom: 18
        },
        marginRight: 70
    },
    innerBox2: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 28,
        [getCustomBreakpoints('md', theme, 'down')]: {
            marginBottom: 18
        }
    },
    typography: {
        fontSize: 12,
        fontWeight: 400,
        marginLeft: 10,
        marginTop: 3,
        [getCustomBreakpoints('lg', theme, 'up')]: {
            fontSize: 16,
            marginLeft: 37
        }
    },
    link: {
        display: 'flex',
        padding: 0,
        margin: 0,
        [getCustomBreakpoints('lg', theme, 'up')]: {
            marginLeft: 5
        }
    },
    icon: {
        [getCustomBreakpoints('lg', theme, 'up')]: {
            width: 48,
            height: 48
        }
    }
}));

export default useStyles;
