import {Box} from '@material-ui/core';
import {React} from 'src/deps';
import {ThemeOption} from '../ThemeOption';
import useStyles from './useStyles';

const ThemeSelector: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.themeSelectorContainer}>
            <ThemeOption color={'#fb3eff'}/>
            <ThemeOption color={'#3e96ff'}/>
            <ThemeOption color={'#ff3e3e'}/>
            <ThemeOption color={'#41ff3e'}/>
        </Box>
    );
};

export default ThemeSelector;
