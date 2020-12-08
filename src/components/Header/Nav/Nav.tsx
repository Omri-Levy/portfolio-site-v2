import {MenuList, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {React} from '../../../deps';
import {CustomNavLink} from '../CustomNavLink';
import styles from './styles';

const Nav: React.FC = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Toolbar className={classes.root} disableGutters={true}>
            <MenuList className={classes.menuList}>
                <CustomNavLink to={'/home#portfolio'} text={'Portfolio'}/>
                <CustomNavLink to={'/home#about-me'} text={'About Me'}/>
                <CustomNavLink to={'/home#contact-me'} text={'Contact Me'}/>
            </MenuList>
        </Toolbar>
    );
};

export default Nav;
