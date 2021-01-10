import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeProvider';

const MockComponent: React.FunctionComponent = () => {
	const { isDarkMode } = useContext(ThemeContext);

	return <div>{JSON.stringify(isDarkMode)}</div>;
};

export default MockComponent;
