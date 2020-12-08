import {Box} from '@material-ui/core';
import {makeStyles, React} from '../../../deps';
import {ThemeOption} from '../ThemeOption';
import styles from './styles';

const ThemeSelector: React.FC = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ThemeOption color={'#FB3EFF'}/>
            <ThemeOption/>
            <ThemeOption color={'#FF3E3E'}/>
            <ThemeOption color={'#41FF3E'}/>
        </Box>
    );
};

export default ThemeSelector;
