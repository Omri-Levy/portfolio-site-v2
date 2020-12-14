import {makeStyles} from '../../../../deps';

const useStyles = makeStyles((theme) => ({
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        margin: 0,
        marginRight: 36,
        padding: 0,
        ['@media (max-width: 360px)']: {
            display: 'none'
        }
    },
    link: {
        color: theme.palette.text.main,
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
        borderRadius: 15,
        fontSize: 11,
        fontWeight: 500,
        display: 'block',
        color: theme.palette.accent.main,
        padding: 0,
        margin: 0,
        marginTop: -5,
        [theme.breakpoints.up('md')]: {
            fontSize: 14
        }
    }
}));

export default useStyles;
