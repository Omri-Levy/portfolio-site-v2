import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    darkModeToggleContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        color: theme.palette.primary.main
    },
}));

export default useStyles;
