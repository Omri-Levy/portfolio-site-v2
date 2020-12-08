import {Box, IconButton, Menu, MenuItem} from '@material-ui/core';
import {LanguageOutlined} from '@material-ui/icons';
import {makeStyles, React, useState} from '../../../deps';
import styles from './styles';


const Language: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event: Event) => {
        setAnchorEl(event.currentTarget as any);
    };
    const handleClose = () => setAnchorEl(null);
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box>
            <IconButton onClick={(event) => handleClick(event as any)}>
                <LanguageOutlined/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                MenuListProps={{className: classes.menuList}}
                open={!!anchorEl}
                onClose={handleClose}
                keepMounted
            >
                <MenuItem className={classes.menuItem}>
                    EN
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    HE
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default Language;
