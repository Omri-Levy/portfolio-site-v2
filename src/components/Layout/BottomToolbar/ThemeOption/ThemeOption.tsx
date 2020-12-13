import {IconButton} from '@material-ui/core';
import {FiberManualRecord} from '@material-ui/icons';
import {useContext} from 'react';
import {ThemeContext} from '../../../../context/ThemeContext';
import {React} from '../../../../deps';
import {Props} from './types';
import useStyles from './useStyles';

const ThemeOption: React.FC<Props> = ({color}) => {
    const classes = useStyles();
    const {setPrimaryColor} = useContext(ThemeContext);
    const handleClick = () => setPrimaryColor(color!);

    return (
        <IconButton
            className={classes.root}
            onClick={handleClick}
        >
            <FiberManualRecord style={{color}}/>
        </IconButton>
    );
};

export default ThemeOption;
