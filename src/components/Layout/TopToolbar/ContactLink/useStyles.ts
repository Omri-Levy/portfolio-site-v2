import {makeStyles} from '../../../../deps';

const useStyles = makeStyles((theme) => ({
    button: {
        padding: 0,
        paddingRight: 13,
        [theme.breakpoints.up('md')]: {
            paddingRight: 37
        },
    },
    link: {
        padding: 0,
        margin: 0,
    },
    icon: {
        [theme.breakpoints.up('md')]: {
            width: 48,
            height: 48
        },
    }
}));

export default useStyles;
