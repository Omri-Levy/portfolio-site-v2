import { Switch } from '@material-ui/core';
import { Brightness2Outlined, WbSunnyOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { shadedPrimaryColor } from '../../../../hooks/useMakeTheme/colors';
import { ThemeColors } from '../../../../context/ThemeProvider/types';
import styled, { css } from 'styled-components';
import Color from 'color';

const StyledLabel = styled(`label`)(({ theme }) => {

	return css`
    display: flex;
    align-items: center;
    margin-left: ${theme.spacing(0.05)}em;
	`;
});
const StyledSwitch = styled(Switch)(({ theme }) => {
	const rgbPrimaryColor = new Color(theme.palette.primary.main);
	const lightMode = rgbPrimaryColor.alpha(0.5).string();
	const darkMode = rgbPrimaryColor.alpha(0.3).string();

	return css`
    .MuiSwitch-track, .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
      background-color: ${theme.palette.primary.main};
      opacity: 1;
    }

    .MuiSwitch-thumb {
      background-color: ${theme.palette.text.primary};
    }

    .MuiSwitch-colorPrimary.Mui-checked:hover {
      background-color: ${darkMode};
    }

    .MuiIconButton-root:hover {
      background-color: ${lightMode};
    }
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
