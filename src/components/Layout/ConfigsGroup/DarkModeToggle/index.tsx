import { Box, Switch } from '@material-ui/core';
import { Brightness2Outlined, WbSunnyOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { shadedPrimaryColor } from '../../../../hooks/useMakeTheme/colors';
import { ThemeColors } from '../../../../context/ThemeProvider/types';


const DarkModeToggle: React.FunctionComponent = () => {
	const { isDarkMode, setIsDarkMode, setPrimaryColor } = useContext(
		ThemeContext,
	);

	const handleChange = () => {
		setIsDarkMode((prevState: boolean) => {
			localStorage.setItem(`isDarkMode`, JSON.stringify(!prevState));

			const colors = shadedPrimaryColor(!prevState);

			if (!localStorage.getItem(`primaryColor`)) {
				localStorage.setItem(`primaryColor`, `blue`);
			}

			const color = localStorage.getItem(`primaryColor`) as ThemeColors;

			setPrimaryColor({
				colorWithShade: colors[color],
				color,
			});

			return !prevState;
		});
	};

	return (
		<Box>
			<label>
				{isDarkMode ? (
					<Brightness2Outlined />
				) : (
					<WbSunnyOutlined />
				)}
				<Switch
					onChange={handleChange}
					checked={isDarkMode}
					inputProps={{ 'aria-label': `dark-mode-toggle` }}
				/>
			</label>
		</Box>
	);
};

export default DarkModeToggle;
