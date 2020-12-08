import {AppBar, Box} from '@material-ui/core';
import {makeStyles, React} from '../../deps';
import {Logo} from './Logo';
import {Nav} from './Nav';
import styles from './styles';

const Header: React.FC = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Box className={classes.box}>
                <Logo/>
                <Nav/>
            </Box>
        </AppBar>
    );
};

export default Header;
