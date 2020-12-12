import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    menuList: {
        backgroundColor: theme.palette.primary.main,
    },
    menuItem: {
        '&:hover': {
            color: theme.palette.secondary.secondary,
        },
        backgroundColor: theme.palette.primary.secondary,
        borderTop: `1px solid ${theme.palette.text.main}`,
        borderBottom: `1px solid ${theme.palette.text.main}`,
        '&:nth-child(1)': {
            borderTop: `1px solid ${theme.palette.text.main}`,
            borderBottom: 'none'
        },
    }
}));

export default useStyles;
