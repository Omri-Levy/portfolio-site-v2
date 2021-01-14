import React from 'react';
import Head from '../../../components/Layout/Head';
import Locales from '../../../components/Layout/Locales';
import { AppProvider } from '../../../context/AppProvider';
import { ThemeProvider } from '../../../context/ThemeProvider';
import { ChildrenProps } from '../../../utils/types';
import ThemeTopLayout from '../ThemeTopLayout';

// TopLayout and ThemeTopLayout are separate components due to the order of
// operations and rendering, as of writing having them merged to one
// component did not work

const TopLayout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <AppProvider>
        <ThemeTopLayout>
					<Locales>
						<Head />
						{children}
					</Locales>
				</ThemeTopLayout>
			</AppProvider>
		</ThemeProvider>
	);
};

export default TopLayout;
