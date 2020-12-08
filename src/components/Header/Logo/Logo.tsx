import {Box, Typography} from '@material-ui/core';
import {Link} from 'gatsby-theme-material-ui';
import {makeStyles, React} from '../../../deps';
import styles from './styles';

const Logo: React.FC = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Link to={'/Portfolio'} className={classes.link}>
                <Typography className={classes.title}>
                    Omri Levy
                    <span className={classes.subtitle}>
                        Fullstack Dev
                    </span>
                </Typography>
            </Link>
        </Box>
    );
};

export default Logo;
