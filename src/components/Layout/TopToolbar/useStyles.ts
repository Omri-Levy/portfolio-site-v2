import {DefaultTheme} from '@material-ui/core/styles';
import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'calc(100vw - 40px)',
        top: 0,
        left: 0,
        position: 'fixed',
        margin: '0 20px',
        height: 59,
        [theme.breakpoints.up('lg')]: {
            top: 108,
            margin: '0 37px',
            width: 'calc(100vw - 74px)'
        }
    },
    button: {
        width: 78,
        height: 24,
        borderRadius: 5,
        padding: 5,
        fontSize: 11,
        fontWeight: 400,
        textTransform: 'unset',
        [theme.breakpoints.up('lg')]: {
            width: 117,
            height: 32,
            fontSize: 18,
            padding: '5px 4px'
        }
    }
}));

export default useStyles;
