import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
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
		<>
			<IconButton
				id={`language-menu`}
				aria-label={`language-menu`}
				aria-controls={`language-menu-list`}
				onClick={handleClick}
				className={classes.icon}
			>
				<LanguageOutlined />
			</IconButton>
			<Menu
				id={`language-menu-list`}
				aria-labelledby={`language-menu`}
				anchorEl={anchorEl}
				MenuListProps={{ className: classes.menuList }}
				disableScrollLock={true}
				open={!!anchorEl}
				onClose={handleClose}
				keepMounted
			>
				<MenuItem
					className={classes.menuItem}
					aria-labelledby={`language-menu english`}
					onClick={handleIsRTL(false)}
				>
					<Typography id={`english`}>English</Typography>
				</MenuItem>
				<MenuItem
					className={classes.menuItem}
					aria-labelledby={`language-menu hebrew`}
					onClick={handleIsRTL(true)}
				>
					<Typography id={`hebrew`}>Hebrew</Typography>
				</MenuItem>
			</Menu>
		</>
	);
};

export default LanguageMenu;
