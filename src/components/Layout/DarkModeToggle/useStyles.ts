import {makeStyles} from 'src/deps';

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
