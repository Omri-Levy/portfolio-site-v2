import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import { LanguageOutlined } from '@material-ui/icons';
import { ThemeContext } from '~/context/ThemeContext';
import { AnchorOrButtonEvent, EventCurrentTarget } from './types';
import useStyles from './useStyles';
import React, { useContext, useState } from 'react';

const LanguageMenu: React.FunctionComponent = () => {
	const [anchorEl, setAnchorEl] = useState<EventCurrentTarget | null>(null);
	const { setIsRTL } = useContext(ThemeContext);
	const handleClick = (event: AnchorOrButtonEvent) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => setAnchorEl(null);
	const classes = useStyles();
	const handleIsRTL = (isRTL: boolean) => () => {
		setIsRTL(isRTL);
		setAnchorEl(null);
	};

	return (
		<Box role={`language-menu`}>
			<IconButton onClick={handleClick}>
				<LanguageOutlined />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				MenuListProps={{ className: classes.menuList }}
				open={!!anchorEl}
				onClose={handleClose}
				keepMounted
			>
				<MenuItem className={classes.menuItem} onClick={handleIsRTL(false)}>
					EN
				</MenuItem>
				<MenuItem className={classes.menuItem} onClick={handleIsRTL(true)}>
					HE
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default LanguageMenu;
