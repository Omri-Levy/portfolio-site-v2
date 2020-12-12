import {Box, Switch} from '@material-ui/core';
import {Brightness2Outlined, WbSunnyOutlined} from '@material-ui/icons';
import {useTheme} from '@material-ui/styles';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {React} from '../../deps';
import useStyles from './useStyles';

const DarkModeToggle: React.FC = () => {
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.root}>
            {isDarkMode ? (
                <Brightness2Outlined
                    style={{color: theme.palette.text.main}}
                />
            ) : (
                <WbSunnyOutlined
                    style={{color: theme.palette.text.main}}
                />
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
