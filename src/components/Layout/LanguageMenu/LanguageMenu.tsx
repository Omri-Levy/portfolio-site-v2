import {Box, IconButton, Menu, MenuItem} from '@material-ui/core';
import {LanguageOutlined} from '@material-ui/icons';
import {ThemeContext} from 'src/context/ThemeContext';
import {React, useContext, useState} from 'src/deps';
import useStyles from './useStyles';

const LanguageMenu: React.FunctionComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {setIsRTL} = useContext(ThemeContext);
    const handleClick = (event: Event) => {
        setAnchorEl(event.currentTarget as any);
    };
    const handleClose = () => setAnchorEl(null);
    const classes = useStyles();
    const handleIsRTL = (isRTL: boolean) => {
        setIsRTL(isRTL);
        setAnchorEl(null);
    };

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
                <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleIsRTL(false)}
                >
                    EN
                </MenuItem>
                <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleIsRTL(true)}
                >
                    HE
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default LanguageMenu;
