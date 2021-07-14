import { Switch } from '@material-ui/core';
import { Brightness2Outlined, WbSunnyOutlined } from '@material-ui/icons';
import React from 'react';
import { StyledLabel } from './StyledLabel';
import useDarkMode from './hooks/useDarkMode';

const DarkModeToggle: React.FunctionComponent = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();


	return (
		<StyledLabel>
			{isDarkMode ? (
				<Brightness2Outlined />
			) : (
				<WbSunnyOutlined />
			)}
			<Switch
				color={`primary`}
				onChange={toggleDarkMode}
				checked={isDarkMode}
				inputProps={{ 'aria-label': `dark-mode-toggle` }}
			/>
		</StyledLabel>
	);
};

export default DarkModeToggle;

