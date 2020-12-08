import {Box} from '@material-ui/core';
import {makeStyles, React} from '../../deps';
import {DarkModeToggle} from './DarkModeToggle';
import {Language} from './Language';
import styles from './styles';
import {ThemeSelector} from './ThemeSelector';

const BottomToolbar = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <ThemeSelector/>
            <Box className={classes.innerBox}>
                <Language/>
                <DarkModeToggle/>
            </Box>
        </Box>
    );
};

export default BottomToolbar;
