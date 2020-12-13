import {makeStyles} from '../../../../deps';

const useStyles = makeStyles((theme) => ({
    contactMeFormContainer: {
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            margin: '0 20px'
        }
    },
    fullName: {
        width: 110,
        marginRight: 15,
        marginBottom: 15,
        [theme.breakpoints.up('lg')]: {
            width: 395
        },
        [theme.breakpoints.down('md')]: {
            width: '95vw',
            marginRight: 0
        }
    },
    email: {
        width: 193,
        marginBottom: 15,
        [theme.breakpoints.up('lg')]: {
            width: 479
        },
        [theme.breakpoints.down('md')]: {
            width: '95vw'
        }
    },
    message: {
        width: 318,
        fontSize: 11,
        [theme.breakpoints.up('lg')]: {
            width: 889
        },
        [theme.breakpoints.down('md')]: {
            width: '95vw'
        }
    },
    button: {
        width: 39,
        height: 23,
        fontSize: 11,
        fontWeight: 400,
        textTransform: 'unset',
        marginLeft: 'auto',
        marginTop: 10,
        [theme.breakpoints.up('lg')]: {
            width: 72,
            height: 39,
            fontSize: 24
        }
    }
}));

export default useStyles;
