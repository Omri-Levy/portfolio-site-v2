import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuList: {
        backgroundColor: theme.palette.primary.main,
    },
    menuItem: {
        '&:hover': {
            color: theme.palette.secondary,
        },
        backgroundColor: theme.palette.primary.dark,
        borderTop: `1px solid ${theme.palette.text.primary}`,
        borderBottom: `1px solid ${theme.palette.text.primary}`,
        '&:nth-child(1)': {
            borderTop: `1px solid ${theme.palette.text.primary}`,
            borderBottom: 'none'
        },
    }
}));

export default useStyles;
