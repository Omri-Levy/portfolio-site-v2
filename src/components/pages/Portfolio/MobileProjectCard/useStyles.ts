import {fade} from '@material-ui/core';
import {makeStyles} from '../../../../deps';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.contrast.main,
        width: 48,
        height: 48
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h2': {
            marginBottom: 5
        },
        '& .MuiList': {
            '&-padding': {
                padding: 0,
                minHeight: 200,
                maxHeight: 200,
                [theme.breakpoints.up('lg')]: {
                    minHeight: 'unset',
                    maxHeight: 'unset'
                },
                [theme.breakpoints.down('xs')]: {
                    minHeight: 230,
                    maxHeight: 230
                }
            },
            '&-dense': {
                padding: 0
            }
        },
        '& .MuiListItem': {
            '&-divider': {
                borderBottom: `1px solid ${fade(
                    theme.palette.contrast.main, 0.12)}`
            },
            '&-gutters': {
                paddingLeft: 0,
                paddingRight: 0
            }
        },
        '& .MuiListItemIcon-root': {
            minWidth: 25,
            '& .MuiSvgIcon-root': {
                width: 17,
                height: 17
            }
        },
        '& .MuiListItemText': {
            '&-root': {
                marginTop: 0,
                marginBottom: 0,
            },
            '&-primary': {
                color: theme.palette.text.main,
                fontSize: 12,
                fontWeight: 400,
                minWidth: 335,
                maxWidth: 335,
                [theme.breakpoints.up('lg')]: {
                    fontSize: 16
                },
                [theme.breakpoints.down('md')]: {
                    minWidth: '85vw',
                    maxWidth: '85vw'
                }
            }
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 26
    },
    body: {
        fontSize: 12,
        fontWeight: 400,
        marginBottom: 9,
        minWidth: 231,
        maxWidth: 231
    },
    carouselBackButton: {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: 'calc(50% - 24px)',
        right: theme.direction === 'rtl' ? 16 : 'unset',
        left: theme.direction === 'rtl' ? 'unset' : 16
    },
    carouselNextButton: {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: 'calc(50% - 24px)',
        right: theme.direction === 'rtl' ? 'unset' : 16,
        left: theme.direction === 'rtl' ? 16 : 'unset'
    },
    imageContainer: {
        position: 'relative',
        margin: 10,
        [theme.breakpoints.down('md')]: {
            margin: 5
        }
    },
    image: {
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 64px',
        [theme.breakpoints.down('md')]: {
            margin: '10px 64px'
        }
    },
    primaryButton: {
        width: 60,
        height: 25,
        fontSize: 12,
        fontWeight: 500,
        padding: 4,
        textTransform: 'unset'
    },
    secondaryButton: {
        width: 97,
        height: 25,
        fontSize: 12,
        fontWeight: 500,
        padding: 4,
        textTransform: 'unset'
    }
}));

export default useStyles;
