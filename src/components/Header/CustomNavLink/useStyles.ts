import {darken} from '@material-ui/core';
import {DefaultTheme} from '@material-ui/styles';
import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme: DefaultTheme) => ({
    menuItem: {
        backgroundColor: darken(theme.palette.primary.main, 0.4),
        margin: 0,
        marginRight: 23,
        borderRadius: 15,
        padding: '0 5px',
        '&:nth-child(3)': {
            marginRight: 0
        }
    },
    link: {
        fontSize: 13,
        fontWeight: 400,
        color: '#fff',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default useStyles;
