import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme) => ({
    topToolbarContainer: {
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
        borderRadius: 5,
        fontSize: 11,
        fontWeight: 400,
        textTransform: 'unset',
        [theme.breakpoints.up('lg')]: {
            fontSize: 18,
            height: 32,
        }
    }
}));

export default useStyles;
