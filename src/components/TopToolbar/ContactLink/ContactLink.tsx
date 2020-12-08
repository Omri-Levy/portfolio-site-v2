import {IconButton} from '@material-ui/core';
import {Link} from 'gatsby-theme-material-ui';
import {makeStyles, React} from '../../../deps';
import styles from './styles';
import {Props} from './types';

const ContactLink: React.FC<Props> = ({icon, to}) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Link to={to}
              target='_blank'
              className={classes.link}
        >
            <IconButton className={classes.button}>
                {icon}
            </IconButton>
        </Link>
    );
};

export default ContactLink;
