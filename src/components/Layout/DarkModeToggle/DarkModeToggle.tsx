import {Box, Switch} from '@material-ui/core';
import {Brightness2Outlined, WbSunnyOutlined} from '@material-ui/icons';
import {useContext} from 'react';
import {ThemeContext} from 'src/context/ThemeContext';
import {React} from 'src/deps';
import useStyles from './useStyles';

const DarkModeToggle: React.FunctionComponent = () => {
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);
    const classes = useStyles();

    return (
        <Box className={classes.darkModeToggleContainer}>
            {isDarkMode ? (
                <Brightness2Outlined className={classes.icon}/>
            ) : (
                <WbSunnyOutlined className={classes.icon}/>
            )}
            <Switch
                onChange={() => setIsDarkMode((prevState) => (
                    !prevState
                ))}
                checked={isDarkMode}
            />
        </Box>
    );
};

export default DarkModeToggle;
