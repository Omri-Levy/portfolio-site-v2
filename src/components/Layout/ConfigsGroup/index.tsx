import { ClickAwayListener, Fade } from '@material-ui/core';
import { SettingsOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LanguageMenu from './LanguageMenu';
import ThemeSelector from './ThemeSelector';
import { StyledBox, StyledConfigContainer, StyledIconButton } from './styled';

const ConfigsGroup: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleIsOpen = () => setIsOpen((prevState) => !prevState);
	const onClickAway = () => setIsOpen(false);

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<StyledBox>
				<StyledIconButton onClick={toggleIsOpen}>
					<SettingsOutlined fontSize={`inherit`} />
				</StyledIconButton>
				<Fade in={isOpen}>
					<StyledConfigContainer role={`group`}>
						<ThemeSelector />
						<DarkModeToggle />
						<LanguageMenu />
					</StyledConfigContainer>
				</Fade>
			</StyledBox>
		</ClickAwayListener>
	);
};

export default ConfigsGroup;
