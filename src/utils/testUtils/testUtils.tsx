import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ChildrenProps, Options, UI } from '../types';
import ThemeTopLayout from '../../gatsby-theme-material-ui-top-layout/components/ThemeTopLayout/ThemeTopLayout';
import { Locales } from '~/components/Layout/Locales';

const Providers: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return (
		<ThemeTopLayout>
			<Locales>{children}</Locales>
		</ThemeTopLayout>
	);
};

const renderWithProviders = (ui: UI, options?: Options): RenderResult =>
	render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders };
