import React from 'react';
import { ThemeProvider } from '../../context/ThemeProvider';
import ThemeTopLayout from './ThemeTopLayout';
import { ChildrenProps } from '../../utils/types';

const TopLayout: React.FunctionComponent = ({ children }: ChildrenProps) => {
	return (
		<ThemeProvider>
			<ThemeTopLayout>{children} </ThemeTopLayout>
		</ThemeProvider>
	);
};

export default TopLayout;
