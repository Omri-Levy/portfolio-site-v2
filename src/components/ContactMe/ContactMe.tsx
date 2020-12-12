import {Box, Typography} from '@material-ui/core';
import {
    AlternateEmailOutlined,
    CallOutlined,
    PermContactCalendarOutlined
} from '@material-ui/icons';
import {IconButton} from 'gatsby-theme-material-ui';
import {React} from '../../deps';
import {PageTitle} from '../PageTitle';
import {ContactMeForm} from './ContactMeForm';
import useStyles from './useStyles';

const ContactMe: React.FC = () => {
    const classes = useStyles();

    return (
        <section
            className={classes.contactMeContainer}
            id={'contact-me'}
        >
            <PageTitle
                Icon={PermContactCalendarOutlined}
                text={'Contact Me'}
            />
            <Box className={classes.outerBox}>
                <Box className={classes.innerBox1}>
                    <IconButton to={'tel:+972052-6256647'}
                                className={classes.link}>
                        <CallOutlined className={classes.icon}/>
                        <Typography variant={'body1'}
                                    className={classes.typography}>
                            052-6256647
                        </Typography>
                    </IconButton>
                </Box>
                <Box className={classes.innerBox2}>
                    <IconButton
                        to={'mailto:omri.levy0197@gmail.com'}
                        className={classes.link}
                    >
                        <AlternateEmailOutlined className={classes.icon}/>
                        <Typography variant={'body1'}
                                    className={classes.typography}>
                            omri.levy0197@gmail.com
                        </Typography>
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <ContactMeForm/>
            </Box>
        </section>
    );
};

export default ContactMe;
