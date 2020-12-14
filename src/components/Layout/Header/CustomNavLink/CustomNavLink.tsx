import {MenuItem} from '@material-ui/core';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import {React} from '../../../../deps';
import {TranslateText} from '../../../TranslateText';
import {Props} from './types';
import useStyles from './useStyles';

const CustomNavLink: React.FC<Props> = ({to, text}) => {
    const classes = useStyles();

    return (
        <MenuItem className={classes.menuItem}>
            <AnchorLink to={to} className={classes.link}>
                <TranslateText text={text}/>
            </AnchorLink>
        </MenuItem>
    );
};

export default CustomNavLink;
