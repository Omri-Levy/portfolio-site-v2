import { Box, Switch } from "@material-ui/core";
import { Brightness2Outlined, WbSunnyOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { ThemeContext } from "~/context/ThemeContext";
import useStyles from "./useStyles";

const DarkModeToggle: React.FunctionComponent = () => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const handleChange = () => setIsDarkMode((prevState: boolean) => !prevState);

	return (
		<Box className={classes.darkModeToggleContainer} role={`dark-mode-toggle`}>
			{isDarkMode ? (
				<Brightness2Outlined
					className={classes.icon}
					role={`moon-icon`}
					aria-hidden={false}
				/>
			) : (
				<WbSunnyOutlined
					className={classes.icon}
					role={`sun-icon`}
					aria-hidden={false}
				/>
			)}
			<Switch onChange={handleChange} checked={isDarkMode} />
		</Box>
	);
};

export default DarkModeToggle;
