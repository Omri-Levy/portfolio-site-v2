import {Box, Switch} from '@material-ui/core';
import {Brightness2Outlined, WbSunnyOutlined} from '@material-ui/icons';
import {useContext} from 'react';
import {ThemeContext} from 'src/context/ThemeContext';
import {React} from 'src/deps';
import useStyles from './useStyles';

const DarkModeToggle: React.FunctionComponent = () => {
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);
    const classes = useStyles();
    const handleChange = () => setIsDarkMode((prevState) => !prevState);

    return (
        <Box className={classes.darkModeToggleContainer}>
            {isDarkMode ? (
                <Brightness2Outlined className={classes.icon}/>
            ) : (
                <WbSunnyOutlined className={classes.icon}/>
            )}
            <Switch
                onChange={handleChange}
                checked={isDarkMode}
            />
        </Box>
    );
};

export default DarkModeToggle;
