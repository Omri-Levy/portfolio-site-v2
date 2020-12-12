import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: '#eee',
        width: 48,
        height: 48
    },
    projectCardContainer: {
        marginBottom: 53,
        [theme.breakpoints.up('md')]: {
            marginBottom: 30
        }
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& .MuiList': {
            '&-dense': {
                padding: 0
            }
        },
        '& .MuiListItem': {
            '&-divider': {
                borderBottom: '1px solid rgba(238, 238, 238, 0.12)'
            },
            '&-gutters': {
                paddingLeft: 0,
                paddingRight: 0
            }
        },
        '& .MuiListItemIcon-root': {
            minWidth: 35
        },
        '& .MuiListItemText-primary': {
            color: theme.palette.text.main,
            fontSize: 12,
            fontWeight: 400,
            minWidth: 335,
            maxWidth: 335,
            [theme.breakpoints.up('md')]: {
                fontSize: 16
            }
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 26,
        [theme.breakpoints.up('md')]: {
            fontSize: 24
        }
    },
    imageContainer: {
        marginTop: 4
    },
    image: {
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.up('md')]: {
            width: 500,
            height: 240,
            marginLeft: 130
        }
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 64px',
        [theme.breakpoints.up('md')]: {
            margin: '24px 0',
            justifyContent: 'flex-start'
        }
    },
    primaryButton: {
        width: 60,
        height: 25,
        fontSize: 12,
        fontWeight: 500,
        padding: 4,
        textTransform: 'unset',
        [theme.breakpoints.up('md')]: {
            marginRight: 44,
            fontSize: 18,
            width: 84,
            height: 32,
            padding: '5px 4px'
        }
    },
    secondaryButton: {
        width: 94,
        height: 25,
        fontSize: 12,
        fontWeight: 500,
        padding: 4,
        textTransform: 'unset',
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            width: 134,
            height: 32,
            padding: '5px 4px'
        }
    }
}));

export default useStyles;
