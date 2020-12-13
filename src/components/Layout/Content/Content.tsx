import {Box} from '@material-ui/core';
import {React} from '../../../deps';
import {Props} from './types';
import useStyles from './useStyles';

const Content: React.FC<Props> = ({children}) => {
    const classes = useStyles();

    return <Box className={classes.content}>{children}</Box>;
};

export default Content;
