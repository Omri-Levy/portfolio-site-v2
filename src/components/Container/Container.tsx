import {Container as MuiContainer} from '@material-ui/core';
import {React} from '../../deps';
import {makeStyles} from '../../deps';
import styles from './styles';
import {Props} from './types';

const Container: React.FC<Props> = ({children}) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <MuiContainer className={classes.root}>
            {children}
        </MuiContainer>
    );
};

export default Container;
