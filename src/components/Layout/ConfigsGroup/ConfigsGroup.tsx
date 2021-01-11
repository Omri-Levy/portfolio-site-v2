import { Box, IconButton } from '@material-ui/core';
import { SettingsOutlined } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import { LanguageMenu } from './LanguageMenu';
import { ThemeSelector } from './ThemeSelector';
import useStyles from './useStyles';

const ConfigsGroup: React.FunctionComponent = () => {
	const { configCog, configContainer, closedConfigContainer } = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen((prevState) => !prevState);
	const className = clsx({
		[configContainer]: isOpen,
		[closedConfigContainer]: !isOpen,
	});

	return (
		<>
			<IconButton className={configCog} onClick={handleClick}>
				<SettingsOutlined />
			</IconButton>
			<Box className={className} role={`group`}>
				<ThemeSelector />
				<DarkModeToggle />
				<LanguageMenu />
			</Box>
		</>
	);
};

export default ConfigsGroup;
