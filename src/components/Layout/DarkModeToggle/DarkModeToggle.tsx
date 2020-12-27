import { Box, Switch } from "@material-ui/core";
import { Brightness2Outlined, WbSunnyOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { ThemeContext } from "~/context/ThemeContext";
import useStyles from "./useStyles";

const DarkModeToggle: React.FunctionComponent = () => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const handleChange = () => setIsDarkMode((prevState) => !prevState);

	return (
		<Box
			className={classes.darkModeToggleContainer}
			data-testid={`dark-mode-toggle`}
		>
			{isDarkMode ? (
				<Brightness2Outlined className={classes.icon} />
			) : (
				<WbSunnyOutlined className={classes.icon} />
			)}
			<Switch onChange={handleChange} checked={isDarkMode} />
		</Box>
	);
};

export default DarkModeToggle;
