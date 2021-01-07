import { IconButton } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';
import { colorsObj } from '../../../../../hooks/useMakeTheme/colors';
import { Props } from './types';
import useStyles from './useStyles';

const ThemeOption: React.FunctionComponent<Props> = ({ color, alt }) => {
	const classes = useStyles();
	const { setPrimaryColor, isDarkMode } = useContext(ThemeContext);
	const colors = colorsObj(isDarkMode);

	const handleClick = () => {
		setPrimaryColor(colors[color]);
		localStorage.setItem(`primaryColor`, color);
	};

	return (
		<IconButton
			aria-label={`theme-option-${alt}`}
			className={classes.iconButton}
			onClick={handleClick}
		>
			<FiberManualRecord style={{ color: colors[color] }} />
		</IconButton>
	);
};

export default ThemeOption;
