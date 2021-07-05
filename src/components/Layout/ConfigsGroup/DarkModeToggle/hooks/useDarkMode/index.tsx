import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context/ThemeProvider';
import { shadedPrimaryColor } from '../../../../../../hooks/useMakeTheme/colors';
import { ThemeColors } from '../../../../../../context/ThemeProvider/types';

const useDarkMode = () => {
	const { isDarkMode, setIsDarkMode, setPrimaryColor } = useContext(
		ThemeContext,
	);

	const toggleDarkMode = () => {
		setIsDarkMode((prevState: boolean) => {
			localStorage.setItem(`isDarkMode`, JSON.stringify(!prevState));
			document.body.setAttribute(`data-is-dark-mode`, JSON.stringify(!isDarkMode));

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

	return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
