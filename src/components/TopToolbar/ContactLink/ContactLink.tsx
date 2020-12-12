import {IconButton} from 'gatsby-theme-material-ui';
import {React} from '../../../deps';
import {Props} from './types';
import useStyles from './useStyles';

const ContactLink: React.FC<Props> = ({Icon, to}) => {
    const classes = useStyles();

    return (
        <IconButton
            className={classes.button}
            to={to}
            // @ts-ignore
            target={'_blank'}
            style={{backgroundColor: 'transparent'}}
        >
            <Icon className={classes.icon}/>
        </IconButton>
    );
};

export default ContactLink;
