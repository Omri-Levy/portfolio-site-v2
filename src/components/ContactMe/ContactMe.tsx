import {Box, Typography} from '@material-ui/core';
import {
    AlternateEmailOutlined,
    CallOutlined,
    PermContactCalendarOutlined
} from '@material-ui/icons';
import {Link} from 'gatsby-theme-material-ui';
import {makeStyles, React} from '../../deps';
import {PageTitle} from '../PageTitle';
import {ContactMeForm} from './ContactMeForm';
import styles from './styles';

const ContactMe: React.FC = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.box}
             id={'contact-me'}
        >
            <PageTitle
                Icon={PermContactCalendarOutlined}
                text={'Contact Me'}
            />
            <Box className={classes.outerBox}>
                <Box className={classes.innerBox1}>
                    <Link
                        to={'tel:+972052-6256647'}
                        className={classes.link}
                    >
                        <CallOutlined/>
                        <Typography
                            variant={'body1'}
                            className={classes.typography}
                        >
                            052-6256647
                        </Typography>
                    </Link>
                </Box>
                <Box className={classes.innerBox2}>
                    <Link
                        to={'mailto:omri.levy0197@gmail.com'}
                        className={classes.link}
                    >
                        <AlternateEmailOutlined/>
                        <Typography
                            variant={'body1'}
                            className={classes.typography}
                        >
                            omri.levy0197@gmail.com
                        </Typography>
                    </Link>
                </Box>
            </Box>
            <Box>
                <ContactMeForm/>
            </Box>
        </Box>
    );
};

export default ContactMe;
