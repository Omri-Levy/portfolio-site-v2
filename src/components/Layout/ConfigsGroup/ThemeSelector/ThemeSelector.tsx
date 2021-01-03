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
			<ThemeOption color={`#fb3eff`} alt={`pink`} />
			<ThemeOption color={`#3e96ff`} alt={`blue`} />
			<ThemeOption color={`#ff3e3e`} alt={`red`} />
			<ThemeOption color={`#41ff3e`} alt={`green`} />
		</ButtonGroup>
	);
};

export default ThemeSelector;
