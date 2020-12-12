import {IconButton} from '@material-ui/core';
import {FiberManualRecord} from '@material-ui/icons';
import {React} from '../../../deps';
import {Props} from './types';
import useStyles from './useStyles';

const ThemeOption: React.FC<Props> = ({color}) => {
    const classes = useStyles();

    return (
        <IconButton className={classes.root}>
            <FiberManualRecord style={{color}}/>
        </IconButton>
    );
};

export default ThemeOption;
