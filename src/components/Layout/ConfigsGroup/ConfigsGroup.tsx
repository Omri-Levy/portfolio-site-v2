import { Box } from '@material-ui/core';
import { ThemeSelector } from './ThemeSelector';
import { DarkModeToggle } from './DarkModeToggle';
import { LanguageMenu } from './LanguageMenu';
import React from 'react';
import useStyles from './useStyles';

const ConfigsGroup: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Box className={classes.configContainer}>
			<ThemeSelector />
			<DarkModeToggle />
			<LanguageMenu />
		</Box>
	);
};

export default ConfigsGroup;
