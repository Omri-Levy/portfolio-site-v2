import {makeStyles} from 'src/deps';

const useStyles = makeStyles((theme) => ({
    topToolbarContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        padding: '0 20px',
        height: 59,
        [theme.breakpoints.up('lg')]: {
            top: 118
        }
    },
    button: {
        borderRadius: 5,
        fontSize: 11,
        fontWeight: 400,
        textTransform: 'unset',
        [theme.breakpoints.up('lg')]: {
            fontSize: 18,
            height: 32
        }
    }
}));

export default useStyles;
