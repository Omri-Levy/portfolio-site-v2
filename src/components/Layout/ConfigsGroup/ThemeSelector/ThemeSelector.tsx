import { ButtonGroup } from '@material-ui/core';
import React from 'react';
import { ThemeOption } from './ThemeOption';
import useStyles from './useStyles';

const ThemeSelector: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<ButtonGroup
			className={classes.themeSelectorContainer}
			aria-label={`theme-selector`}
			id={`theme-selector`}
		>
			<ThemeOption color={`purple`} alt={`purple`} />
			<ThemeOption color={`blue`} alt={`blue`} />
			<ThemeOption color={`red`} alt={`red`} />
			<ThemeOption color={`green`} alt={`green`} />
		</ButtonGroup>
	);
};

export default ThemeSelector;
