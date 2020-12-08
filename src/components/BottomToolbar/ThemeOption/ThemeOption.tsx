import {IconButton} from '@material-ui/core';
import {FiberManualRecord} from '@material-ui/icons';
import {makeStyles, React} from '../../../deps';
import styles from './styles';
import {Props} from './types';

const ThemeOption: React.FC<Props> = ({color}) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <IconButton className={classes.root}>
            <FiberManualRecord style={{color}}/>
        </IconButton>
    );
};

export default ThemeOption;
