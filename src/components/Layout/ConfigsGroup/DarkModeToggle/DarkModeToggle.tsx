import { Box, Switch } from '@material-ui/core';
import { Brightness2Outlined, WbSunnyOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';
import useStyles from './useStyles';

const DarkModeToggle: React.FunctionComponent = () => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const handleChange = () => setIsDarkMode((prevState: boolean) => !prevState);

	return (
		<Box className={classes.darkModeToggleContainer}>
			{isDarkMode ? (
				<Brightness2Outlined
					className={classes.icon}
					aria-hidden={false}
					role={`icon`}
					aria-label={`moon-icon`}
				/>
			) : (
				<WbSunnyOutlined
					className={classes.icon}
					aria-hidden={false}
					role={`icon`}
					aria-label={`sun-icon`}
				/>
			)}
			<Switch
				onChange={handleChange}
				checked={isDarkMode}
				inputProps={{ 'aria-label': `dark-mode-toggle` }}
			/>
		</Box>
	);
};

export default DarkModeToggle;
