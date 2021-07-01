import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { LanguageOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { AnchorOrButtonEvent, EventCurrentTarget } from './types';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';
import TranslateText from '../../Locales/TranslateText';


const LanguageMenu: React.FunctionComponent = () => {
	const [anchorEl, setAnchorEl] = useState<EventCurrentTarget | null>(null);
	const { setIsRTL } = useThemeContext();
	const handleClick = (event: AnchorOrButtonEvent) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => setAnchorEl(null);

	const handleIsRTL = (isRTL: boolean) => () => {
		setIsRTL(isRTL);
		setAnchorEl(null);
		localStorage.setItem(`isRTL`, JSON.stringify(isRTL));
	};

	return (
		<>
			<IconButton
				id={`language-menu`}
				aria-label={`language-menu`}
				aria-controls={`language-menu-list`}
				onClick={handleClick}

			>
				<LanguageOutlined />
			</IconButton>
			<Menu
				id={`language-menu-list`}
				aria-labelledby={`language-menu`}
				anchorEl={anchorEl}
				disableScrollLock={true}
				open={!!anchorEl}
				onClose={handleClose}
				keepMounted
			>
				<MenuItem

					aria-labelledby={`language-menu english`}
					onClick={handleIsRTL(false)}
				>
					<TranslateText text={`English`} />
				</MenuItem>
				<MenuItem

					aria-labelledby={`language-menu hebrew`}
					onClick={handleIsRTL(true)}
				>
					<TranslateText text={`Hebrew`} />
				</MenuItem>
			</Menu>
		</>
	);
};

export default LanguageMenu;
