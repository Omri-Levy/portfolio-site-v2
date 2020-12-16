import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Box, Typography} from '@material-ui/core';
import {
    KeyboardArrowLeftOutlined,
    KeyboardArrowRightOutlined
} from '@material-ui/icons';
import {ButtonBack, ButtonNext, Image, Slide} from 'pure-react-carousel';
import {PrimaryButton} from 'src/components/PrimaryButton';
import {SecondaryButton} from 'src/components/SecondaryButton';
import {React, useTheme} from 'src/deps';
import {useRTLOrLTRComponent} from 'src/hooks/useRTLOrLTRComponent';
import {ProjectProps} from 'src/utils/types';
import useStyles from './useStyles';

const MobileProjectCard: React.FunctionComponent<ProjectProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const backButton = useRTLOrLTRComponent(
        <KeyboardArrowRightOutlined
            className={classes.icon}
        />,
        <KeyboardArrowLeftOutlined
            className={classes.icon}
        />
    );
    const nextButton = useRTLOrLTRComponent(
        <KeyboardArrowLeftOutlined
            className={classes.icon}
        />,
        <KeyboardArrowRightOutlined
            className={classes.icon}
        />
    );

    return (
        <Slide index={props.index}>
            <Box dir={theme.direction}>
                <Box className={classes.innerBox}>
                    <Typography variant={'h2'} className={classes.title}>
                        {props.title}
                    </Typography>
                    {documentToReactComponents(props.body, props.options)}
                </Box>
                <Box className={classes.imageContainer}>
                    <ButtonBack className={classes.carouselBackButton}>
                        {backButton}
                    </ButtonBack>
                    <Image
                        src={props.projectGif}
                        alt={props.projectGif}
                        hasMasterSpinner={false}
                        className={classes.image}
                    />
                    <ButtonNext className={classes.carouselNextButton}>
                        {nextButton}
                    </ButtonNext>
                </Box>
                <Box className={classes.buttonsContainer}>
                    <PrimaryButton
                        text={'Live Site'}
                        className={classes.primaryButton}
                        to={props.liveSiteUrl}
                    />
                    <SecondaryButton
                        text={'Git Repository'}
                        className={classes.secondaryButton}
                        to={props.gitRepositoryUrl}
                    />
                </Box>
            </Box>
        </Slide>
    );
};

export default MobileProjectCard;
