import {Box, Typography} from '@material-ui/core';
import {makeStyles, React} from '../../deps';
import styles from './styles';
import {Props} from './types';

const PageTitle: React.FC<Props> = ({Icon, text}) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Box className={classes.innerBox}>
                <Icon className={classes.icon}/>
                <Typography
                    className={classes.root}
                    variant={'h1'}
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default PageTitle;
