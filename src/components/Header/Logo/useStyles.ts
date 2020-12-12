import {darken} from '@material-ui/core';
import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme) => ({
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        margin: 0,
        marginRight: 36,
        padding: 0,
        ['@media (max-width: 350px)']: {
            display: 'none'
        }
    },
    link: {
        color: '#000',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    title: {
        color: '#000',
        fontSize: 13,
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            fontSize: 16
        }
    },
    subtitle: {
        backgroundColor: darken(theme.palette.primary.main, 0.4),
        borderRadius: 15,
        fontSize: 11,
        fontWeight: 500,
        display: 'block',
        color: '#eee',
        padding: '0 5px',
        margin: 0,
        marginTop: -1,
        marginLeft: -2,
        [theme.breakpoints.up('md')]: {
            fontSize: 14
        }
    }
}));

export default useStyles;
