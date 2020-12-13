import {Box, Typography} from '@material-ui/core';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import {React} from '../../../../deps';
import useStyles from './useStyles';

const Logo: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.logoContainer}>
            <AnchorLink to={'/home#portfolio'} className={classes.link}>
                <Typography className={classes.title}>
                    Omri Levy
                    <span className={classes.subtitle}>Fullstack Dev</span>
                </Typography>
            </AnchorLink>
        </Box>
    );
};

export default Logo;
