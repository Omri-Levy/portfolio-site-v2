import React from 'react';
import { ThemeProvider } from '~/context/ThemeProvider';
import { ChildrenProps } from '~/utils/types';
import { Layout } from '../../../components/Layout';
import ThemeTopLayout from '../ThemeTopLayout/ThemeTopLayout';

// TopLayout and ThemeTopLayout are separate components due to the order of
// operations and rendering, as of writing having them merged to one
// component did not work

const TopLayout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return (
		<ThemeProvider>
			<ThemeTopLayout>
				<Layout>{children}</Layout>
			</ThemeTopLayout>
		</ThemeProvider>
	);
};

export default TopLayout;
