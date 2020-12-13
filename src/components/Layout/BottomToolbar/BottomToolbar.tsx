import {Box} from '@material-ui/core';
import {React} from '../../../deps';
import useDevice from '../../../hooks/useDevice/useDevice';
import {DarkModeToggle} from '../DarkModeToggle';
import {Language} from '../Language';
import {ThemeSelector} from './ThemeSelector';
import useStyles from './useStyles';

const BottomToolbar = () => {
    const classes = useStyles();
    const {isMobile} = useDevice();

    return (
        <Box className={classes.bottomToolbarContainer}>
            <ThemeSelector/>
            {isMobile && (
                <Box className={classes.innerBox}>
                    <Language/>
                    <DarkModeToggle/>
                </Box>
            )}
        </Box>
    );
};

export default BottomToolbar;
