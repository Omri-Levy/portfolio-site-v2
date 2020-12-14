import {makeStyles} from '../../../../deps';

const useStyles = makeStyles((theme) => ({
    contactMeFormContainer: {
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '0 7px'
        }
    },
    fullName: {
        width: 'calc(100vw - 10px)',
        marginBottom: 15,
        [theme.breakpoints.up('lg')]: {
            marginRight: 15,
            width: 395
        }
    },
    email: {
        width: 'calc(100vw - 10px)',
        marginBottom: 15,
        [theme.breakpoints.up('lg')]: {
            width: 479
        }
    },
    message: {
        width: 'calc(100vw - 10px)',
        fontSize: 11,
        [theme.breakpoints.up('lg')]: {
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
        [theme.breakpoints.up('lg')]: {
            marginRight: 0,
            width: 72,
            height: 39,
            fontSize: 24
        }
    }
}));

export default useStyles;
