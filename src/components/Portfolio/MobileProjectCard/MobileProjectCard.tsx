import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Box, Typography} from '@material-ui/core';
import {
    KeyboardArrowLeftOutlined,
    KeyboardArrowRightOutlined
} from '@material-ui/icons';
import {ButtonBack, ButtonNext, Image, Slide} from 'pure-react-carousel';
import {React} from '../../../deps';
import {PrimaryButton} from '../../PrimaryButton';
import {SecondaryButton} from '../../SecondaryButton';
import {Props} from './types';
import useStyles from './useStyles';

const MobileProjectCard: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <Slide index={props.index}>
            <Box className={classes.slideInnerBox}>
                <Box className={classes.innerBox}>
                    <Typography variant={'h2'} className={classes.title}>
                        {props.title}
                    </Typography>
                    {documentToReactComponents(props.body, props.options)}
                </Box>
                <Box className={classes.imageContainer}>
                    <ButtonBack className={classes.carouselBackButton}>
                        <KeyboardArrowLeftOutlined className={classes.icon}/>
                    </ButtonBack>
                    <Image
                        src={props.projectGif}
                        alt={props.projectGif}
                        hasMasterSpinner={false}
                        className={classes.image}
                    />
                    <ButtonNext className={classes.carouselNextButton}>
                        <KeyboardArrowRightOutlined className={classes.icon}/>
                    </ButtonNext>
                </Box>
                <Box className={classes.buttonsContainer}>
                    <PrimaryButton
                        text={'Live site'}
                        className={classes.primaryButton}
                        to={props.liveSite}
                    />
                    <SecondaryButton
                        text={'Git repository'}
                        className={classes.secondaryButton}
                        to={props.gitRepository}
                    />
                </Box>
            </Box>
        </Slide>
    );
};

export default MobileProjectCard;
