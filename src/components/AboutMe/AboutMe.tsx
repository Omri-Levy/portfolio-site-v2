import {Box, Typography} from '@material-ui/core';
import {InfoOutlined} from '@material-ui/icons';
import {React} from '../../deps';
import {PageTitle} from '../PageTitle';
import PageIllustration from './PageIllustration';
import {ProfilePic} from './ProfilePic';
import useStyles from './useStyles';

const AboutMe = () => {
    const classes = useStyles();

    return (
        <section
            className={classes.aboutMeContainer}
            id={'about-me'}
        >
            <PageTitle
                Icon={InfoOutlined}
                text={'About Me'}
            />
            <Box>
                <ProfilePic/>
                <Box className={classes.innerBox}>
                    <Typography
                        variant={'h1'}
                        className={classes.title}
                    >
                        Who am I?
                    </Typography>
                    <Typography
                        variant={'body1'}
                        className={classes.subtitle}
                    >
                        Hi! My name is Omri Levy, I’m 24 year old from
                        Tel-Aviv.
                    </Typography>
                    <Typography
                        variant={'body1'}
                        className={classes.body}
                    >
                        I began programming in May of 2019, ever since I’ve
                        been programming
                        from the moment I wake up and until I go to bed.
                    </Typography>
                </Box>
            </Box>
            <PageIllustration classes={classes}/>
        </section>
    );
};

export default AboutMe;
