import {Box, Switch} from '@material-ui/core';
import {Brightness2Outlined, WbSunnyOutlined} from '@material-ui/icons';
import {useState} from 'react';
import {makeStyles, React} from '../../../deps';
import styles from './styles';

const DarkModeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {isDarkMode
                ? <WbSunnyOutlined style={{color: '#eee'}}/>
                : <Brightness2Outlined style={{color: '#222831'}}/>
            }
            <Switch onChange={() => setIsDarkMode(
                (prevState) => !prevState)
            }
                    checked={isDarkMode}
            />
        </Box>
    );
};

export default DarkModeToggle;
