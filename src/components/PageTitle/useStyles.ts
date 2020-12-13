import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: 24,
        fontWeight: 700,
        marginLeft: 8,
        marginBottom: 32,
        [theme.breakpoints.up('lg')]: {
            fontSize: 56
        }
    },
    pageTitleContainer: {
        display: 'inline-block',
        marginTop: 91,
        [theme.breakpoints.up('lg')]: {
            marginTop: 180
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 61
        }
    },
    innerBox: {
        display: 'flex'
    },
    icon: {
        marginTop: 2,
        [theme.breakpoints.up('lg')]: {
            marginTop: -6,
            width: 72,
            height: 72
        }
    }
}));

export default useStyles;
