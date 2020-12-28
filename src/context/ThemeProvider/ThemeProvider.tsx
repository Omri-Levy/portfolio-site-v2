import { ChildrenProps } from '~/utils/types';
import { ThemeContext } from '../ThemeContext';
import { primaryColor as initialColor } from '~/hooks/useMakeTheme/colors';
import React, { useState } from 'react';

const ThemeProvider: React.FunctionComponent<ChildrenProps> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [primaryColor, setPrimaryColor] = useState(initialColor);
	const [isRTL, setIsRTL] = useState(false);

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode,
				setIsDarkMode,
				primaryColor,
				setPrimaryColor,
				isRTL,
				setIsRTL,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
