import {Box} from '@material-ui/core';
import {React} from 'src/deps';
import {ChildrenProps} from 'src/utils/types';
import useStyles from './useStyles';

const Content: React.FunctionComponent<ChildrenProps> = ({children}) => {
    const classes = useStyles();

    return <Box className={classes.content}>{children}</Box>;
};

export default Content;
