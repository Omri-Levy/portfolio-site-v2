import {Box, Typography} from '@material-ui/core';
import {InfoOutlined} from '@material-ui/icons';
import {React} from 'src/deps';
import {PageTitle} from 'src/components/PageTitle';
import {TranslateText} from 'src/components/TranslateText';
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
                       <TranslateText text={'whoAmITitle'}/>
                    </Typography>
                    <Typography
                        variant={'body1'}
                        className={classes.subtitle}
                    >
                        <TranslateText text={'whoAmISubtitle'}/>
                    </Typography>
                    <Typography
                        variant={'body1'}
                        className={classes.body}
                    >
                        <TranslateText text={'whoAmIBody'}/>
                    </Typography>
                </Box>
            </Box>
            <PageIllustration classes={classes}/>
        </section>
    );
};

export default AboutMe;
