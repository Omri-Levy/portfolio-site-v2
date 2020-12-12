import {Box, Typography} from '@material-ui/core';
import {React} from '../../deps';
import {Props} from './types';
import useStyles from './useStyles';

const PageTitle: React.FC<Props> = ({Icon, text}) => {
    const classes = useStyles();

    return (
        <Box className={classes.pageTitleContainer}>
            <Box className={classes.innerBox}>
                <Icon className={classes.icon}/>
                <Typography className={classes.typography} variant={'h1'}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default PageTitle;
