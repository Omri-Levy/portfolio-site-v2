import {Box} from '@material-ui/core';
import {ConfigsGroup} from 'src/components/Layout/ConfigsGroup';
import {React} from 'src/deps';
import useDevice from 'src/hooks/useDevice/useDevice';
import useStyles from './useStyles';

const BottomToolbar = () => {
    const classes = useStyles();
    const {isMobile} = useDevice();

    if (!isMobile) {
        return null;
    }

    return (
        <Box className={classes.bottomToolbarContainer}>
            <ConfigsGroup/>
        </Box>
    );
};

export default BottomToolbar;
