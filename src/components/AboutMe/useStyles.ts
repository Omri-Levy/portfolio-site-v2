import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    aboutMeContainer: {
        height: '100vh',
        display: 'block',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            width: '90%'
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: theme.palette.primary.main,
        marginBottom: 12,
        [theme.breakpoints.up('md')]: {
            fontSize: 24,
            marginBottom: 9,
            marginLeft: 80
        }
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 400,
        width: 189,
        marginBottom: 12,
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginBottom: 10,
            width: 250,
            marginLeft: 80
        }
    },
    body: {
        fontSize: 12,
        fontWeight: 400,
        width: 245,
        [theme.breakpoints.up('md')]: {
            fontSize: 16,
            width: 320,
            marginLeft: 80
        }
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            alignItems: 'flex-start',
        }
    },
    pageIllustration: {
        position: 'absolute',
        fill: 'none',
        bottom: 118,
        right: 0,
        [theme.breakpoints.up('md')]: {
            maxWidth: 559,
            bottom: 59,
            right: 0
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 695,
            bottom: 0,
            right: -165
        },
        ['@media(max-height: 800px)']: {
            visibility: 'hidden'
        }
    }
}));

export default useStyles;
