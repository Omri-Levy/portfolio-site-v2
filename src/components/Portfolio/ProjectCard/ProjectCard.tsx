import {Box, Typography} from '@material-ui/core';
import {
    KeyboardArrowLeftOutlined,
    KeyboardArrowRightOutlined
} from '@material-ui/icons';
import {ButtonBack, ButtonNext, Image, Slide} from 'pure-react-carousel';
import {makeStyles, React} from '../../../deps';
import {PrimaryButton} from '../../PrimaryButton';
import {SecondaryButton} from '../../SecondaryButton';
import styles from './styles';
import {Props} from './types';
import {Link} from 'gatsby-theme-material-ui';

const ProjectCard: React.FC<Props> = (props) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Slide index={props.index}>
            <Box className={classes.box}>
                <Box className={classes.innerBox}>
                    <Typography variant={'h2'}
                                className={classes.title}
                    >
                        {props.title}
                    </Typography>
                    <Typography variant={'body1'}
                                className={classes.body}
                    >
                        {props.text}
                    </Typography>
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
                    <Link
                        to={props.liveSite}
                        target={'_blank'}
                    >
                    <PrimaryButton text={'Live site'}
                                   className={classes.primaryButton}
                    />
                    </Link>
                    <Link
                        to={props.gitRepository}
                        target={'_blank'}
                    >
                    <SecondaryButton
                        text={'Git repository'}
                        className={classes.secondaryButton}
                    />
                    </Link>
                </Box>
            </Box>
        </Slide>
    );
};

export default ProjectCard;
