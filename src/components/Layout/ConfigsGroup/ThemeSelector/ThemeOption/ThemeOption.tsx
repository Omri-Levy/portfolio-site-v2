import { IconButton } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';
import { Props } from './types';
import useStyles from './useStyles';

const ThemeOption: React.FunctionComponent<Props> = ({ color, alt }) => {
	const classes = useStyles();
	const { setPrimaryColor } = useContext(ThemeContext);
	const handleClick = () => setPrimaryColor(color);

	return (
		<IconButton
			aria-label={`theme-option-${alt}`}
			className={classes.iconButton}
			onClick={handleClick}
		>
			<FiberManualRecord style={{ color }} />
		</IconButton>
	);
};

export default ThemeOption;
