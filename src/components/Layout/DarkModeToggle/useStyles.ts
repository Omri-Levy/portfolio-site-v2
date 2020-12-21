import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    darkModeToggleContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 15
    },
    icon: {
        color: theme.palette.primary.main
    },
}));

export default useStyles;
