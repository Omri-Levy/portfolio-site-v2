import React from 'react';
import {ThemeProvider} from '../../context/ThemeProvider';
import ThemeTopLayout from './ThemeTopLayout';

const TopLayout = ({children}) => {
	return (
		<ThemeProvider>
			<ThemeTopLayout>
				{children}
			</ThemeTopLayout>
		</ThemeProvider>
	);
};

export default TopLayout;
