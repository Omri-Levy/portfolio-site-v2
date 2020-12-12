import {Container as MuiContainer} from '@material-ui/core';
import {React} from '../../deps';
import {Props} from './types';
import useStyles from './useStyles';

const Container: React.FC<Props> = ({children}) => {
    const classes = useStyles();

    return (
        <MuiContainer
            className={classes.mainContainer}
            maxWidth={false}
        >
            {children}
        </MuiContainer>
    );
};

export default Container;
