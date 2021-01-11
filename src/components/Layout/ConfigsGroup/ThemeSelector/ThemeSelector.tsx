import { IconButton, Popover } from '@material-ui/core';
import { PaletteOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { ThemeOption } from './ThemeOption';
import { Event } from './types';
import useStyles from './useStyles';

const ThemeSelector: React.FunctionComponent = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const handleClose = () => setAnchorEl(null);
	const handleOpen = (event: Event) => setAnchorEl(event.currentTarget);
	const id = anchorEl ? `theme-selector` : undefined;

	return (
		<>
			<IconButton
				aria-owns={anchorEl ? `mouse-over-popover` : undefined}
				aria-haspopup={`true`}
				onClick={handleOpen}
			>
				<PaletteOutlined className={classes.palette} />
			</IconButton>
			<Popover
				className={classes.popover}
				id={id}
				open={!!anchorEl}
				anchorEl={anchorEl}
				onClose={handleClose}
				disableScrollLock={true}
				anchorOrigin={{
					vertical: `top`,
					horizontal: `right`,
				}}
				transformOrigin={{
					vertical: `bottom`,
					horizontal: `right`,
				}}
				disableRestoreFocus
			>
				<ThemeOption color={`purple`} alt={`purple`} />
				<ThemeOption color={`blue`} alt={`blue`} />
				<ThemeOption color={`red`} alt={`red`} />
				<ThemeOption color={`green`} alt={`green`} />
			</Popover>
		</>
	);
};

export default ThemeSelector;
