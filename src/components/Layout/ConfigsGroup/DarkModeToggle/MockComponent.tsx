import React from 'react';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';

const MockComponent: React.FunctionComponent = () => {
	const { isDarkMode } = useThemeContext();

	return <div>{JSON.stringify(isDarkMode)}</div>;
};

export default MockComponent;
