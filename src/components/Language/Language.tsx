import {Box, IconButton, Menu, MenuItem} from '@material-ui/core';
import {LanguageOutlined} from '@material-ui/icons';
import {React, useState} from '../../deps';
import useStyles from './useStyles';

const Language: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event: Event) => {
        setAnchorEl(event.currentTarget as any);
    };
    const handleClose = () => setAnchorEl(null);
    const classes = useStyles();

    return (
        <Box className={classes.languageContainer}>
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
                <MenuItem className={classes.menuItem}>EN</MenuItem>
                <MenuItem className={classes.menuItem}>HE</MenuItem>
            </Menu>
        </Box>
    );
};

export default Language;
