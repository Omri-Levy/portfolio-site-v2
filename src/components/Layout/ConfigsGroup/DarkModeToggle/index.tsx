import { Switch } from '@material-ui/core';
import { Brightness2Outlined, WbSunnyOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { shadedPrimaryColor } from '../../../../hooks/useMakeTheme/colors';
import { ThemeColors } from '../../../../context/ThemeProvider/types';
import styled, { css } from 'styled-components';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';

const StyledLabel = styled(`label`)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    display: flex;
    align-items: center;
    margin-left: ${isRTL ? `unset` : `${theme.spacing(0.05)}`};
    margin-right: ${isRTL ? `${theme.spacing(0.05)}em` : `unset`};
	`;
});
const StyledSwitch = styled(Switch)(({ theme }) => {
	return css`

	`;
});

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
		<StyledLabel>
			{isDarkMode ? (
				<Brightness2Outlined />
			) : (
				<WbSunnyOutlined />
			)}
			<StyledSwitch
				color={`primary`}
				onChange={handleChange}
				checked={isDarkMode}
				inputProps={{ 'aria-label': `dark-mode-toggle` }}
			/>
		</StyledLabel>
	);
};

export default DarkModeToggle;
