import { IconButton } from '@material-ui/core';
import { SettingsOutlined } from '@material-ui/icons';
import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import LanguageMenu from './LanguageMenu';
import ThemeSelector from './ThemeSelector';


const ConfigsGroup: React.FunctionComponent = () => {

	return (
		<>
			<IconButton>
				<SettingsOutlined />
			</IconButton>
			<div role={`group`}>
				<ThemeSelector />
				<DarkModeToggle />
				<LanguageMenu />
			</div>
		</>
	);
};

export default ConfigsGroup;
