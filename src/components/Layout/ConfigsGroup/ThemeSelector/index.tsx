import { IconButton, Popover } from '@material-ui/core';
import { PaletteOutlined } from '@material-ui/icons';
import React, { MouseEvent, useState } from 'react';
import ThemeOption from './ThemeOption';
import styled, { css } from 'styled-components';

const StyledPopover = styled(Popover)(({ theme }) => {

	return css`
    .MuiPaper-rounded {
      border-radius: 100vh;
    }
	`;
});

const ThemeSelector: React.FunctionComponent = () => {
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const handleClose = () => setAnchorEl(null);
	const handleOpen = (event: MouseEvent<HTMLButtonElement>) => (
		setAnchorEl(event.currentTarget)
	);
	const id = anchorEl ? `theme-selector` : undefined;

	return (
		<>
			<IconButton
				aria-owns={anchorEl ? `mouse-over-popover` : undefined}
				aria-haspopup={`true`}
				onClick={handleOpen}
			>
				<PaletteOutlined />
			</IconButton>
			<StyledPopover
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
			</StyledPopover>
		</>
	);
};

export default ThemeSelector;
