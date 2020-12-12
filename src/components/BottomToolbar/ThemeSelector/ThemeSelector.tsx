import {Box} from '@material-ui/core';
import {React} from '../../../deps';
import {ThemeOption} from '../ThemeOption';
import useStyles from './useStyles';

const ThemeSelector: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ThemeOption color={'#fb3eff'}/>
            <ThemeOption/>
            <ThemeOption color={'#ff3e3e'}/>
            <ThemeOption color={'#41ff3e'}/>
        </Box>
    );
};

export default ThemeSelector;
