import {MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import {React} from '../../../deps';
import styles from './styles';
import {Props} from './types';

const CustomNavLink: React.FC<Props> = ({to, text}) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <MenuItem className={classes.root}>
            <AnchorLink to={to}
                        className={classes.link}
            >
                {text}
            </AnchorLink>
        </MenuItem>
    );
};

export default CustomNavLink;
