import { IconButton } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import React from 'react';
import { shadedPrimaryColor } from '../../../../../hooks/useMakeTheme/colors';
import { Props } from './types';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';


const ThemeOption: React.FunctionComponent<Props> = ({ color, alt }) => {

	const {
		setPrimaryColor,
		isDarkMode,
	} = useThemeContext();
	const colors = shadedPrimaryColor(isDarkMode);

	const handleClick = () => {
		setPrimaryColor({
			colorWithShade: colors[color],
			color,
		});
		localStorage.setItem(`primaryColor`, color);
	};

	return (
		<IconButton
			aria-label={`theme-option-${alt}`}

			onClick={handleClick}
		>
			<FiberManualRecord style={{ color: colors[color] }} />
		</IconButton>
	);
};

export default ThemeOption;
