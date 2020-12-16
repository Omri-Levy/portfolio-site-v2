import {Box, Typography} from '@material-ui/core';
import {React} from 'src/deps';
import {TranslateText} from '../TranslateText';
import {Props} from './types';
import useStyles from './useStyles';

const PageTitle: React.FunctionComponent<Props> = ({Icon, text}) => {
    const classes = useStyles();

    return (
        <Box className={classes.pageTitleContainer}>
            <Box className={classes.innerBox}>
                <Icon className={classes.icon}/>
                <Typography
                    className={classes.typography}
                    variant={'h1'}
                >
                    <TranslateText text={text}/>
                </Typography>
            </Box>
        </Box>
    );
};

export default PageTitle;
