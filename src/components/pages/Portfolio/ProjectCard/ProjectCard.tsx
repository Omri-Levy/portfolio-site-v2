import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Grid, Typography} from '@material-ui/core';
import {React} from '../../../../deps';
import {PrimaryButton} from '../../../PrimaryButton';
import {SecondaryButton} from '../../../SecondaryButton';
import {Props} from './types';
import useStyles from './useStyles';

const ProjectCard: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.projectCardContainer}>
            <Grid item className={classes.innerBox}>
                <Typography variant={'h2'} className={classes.title}>
                    {props.title}
                </Typography>
                {documentToReactComponents(props.body, props.options)}
                <Grid container item className={classes.buttonsContainer}>
                    <PrimaryButton
                        text={'Live site'}
                        className={classes.primaryButton}
                        to={props.liveSiteUrl}
                    />
                    <SecondaryButton
                        text={'Git repository'}
                        className={classes.secondaryButton}
                        to={props.gitRepositoryUrl}
                    />
                </Grid>
            </Grid>
            <Grid item className={classes.imageContainer}>
                <img
                    src={props.projectGif}
                    alt={props.projectGif}
                    className={classes.image}
                />
            </Grid>
        </Grid>
    );
};

export default ProjectCard;
