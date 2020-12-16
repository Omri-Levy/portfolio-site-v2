import {makeStyles} from 'src/deps';
import getCustomBreakpoints from 'src/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
    aboutMeContainer: {
        position: 'relative',
        height: '100vh',
        [getCustomBreakpoints('md', theme, 'up')]: {
            width: '90%'
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: theme.palette.primary.main,
        marginBottom: 12,
        [getCustomBreakpoints('md', theme, 'up')]: {
            fontSize: 24,
            marginBottom: 9,
            marginLeft: 80
        }
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 400,
        width: theme.direction === 'rtl' ? 140 : 189,
        marginBottom: 12,
        [getCustomBreakpoints('md', theme, 'up')]: {
            fontSize: 18,
            marginBottom: 10,
            width: 250,
            marginLeft: 80
        }
    },
    body: {
        fontSize: 12,
        fontWeight: 400,
        width: theme.direction === 'rtl' ? 215 : 245,
        [getCustomBreakpoints('md', theme, 'up')]: {
            fontSize: 16,
            width: 320,
            marginLeft: 80
        }
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [getCustomBreakpoints('md', theme, 'up')]: {
            alignItems: 'flex-start',
            textAlign: 'left'
        }
    },
    pageIllustration: {
        position: 'absolute',
        fill: 'none',
        bottom: 118,
        left: 0,
        right: 0,
        margin: '0 auto',
        maxWidth: 500,
        [getCustomBreakpoints('md', theme, 'up')]: {
            maxWidth: 559,
            bottom: 59
        },
        [getCustomBreakpoints('lg', theme, 'up')]: {
            maxWidth: 695,
            bottom: 0,
            right: -165
        },
        ['@media(max-height: 800px)']: {
            display: 'none'
        }
    }
}));

export default useStyles;
