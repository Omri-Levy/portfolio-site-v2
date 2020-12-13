import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme) => ({
    contactMeContainer: {
        height: '100vh',
        [theme.breakpoints.up('lg')]: {
            width: '90%'
        },
        '& h1': {
            [theme.breakpoints.down('md')]: {
                marginBottom: 18
            }
        }
    },
    outerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
            alignItems: 'flex-start',
            flexDirection: 'row'
        }
    },
    innerBox1: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 28,
        [theme.breakpoints.down('md')]: {
            marginBottom: 18
        },
        marginRight: 70
    },
    innerBox2: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 28,
        [theme.breakpoints.down('md')]: {
            marginBottom: 18
        }
    },
    typography: {
        fontSize: 12,
        fontWeight: 400,
        marginLeft: 10,
        marginTop: 3,
        [theme.breakpoints.up('lg')]: {
            fontSize: 16,
            marginLeft: 37
        }
    },
    link: {
        display: 'flex',
        padding: 0,
        margin: 0,
        [theme.breakpoints.up('lg')]: {
            marginLeft: 5
        }
    },
    icon: {
        [theme.breakpoints.up('lg')]: {
            width: 48,
            height: 48
        }
    }
}));

export default useStyles;
