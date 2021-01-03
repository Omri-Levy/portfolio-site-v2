import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ChildrenProps, Options, UI } from '../types';
import { Locales } from '~/components/Layout/Locales';
import TopLayout from '~/gatsby-theme-material-ui-top-layout/components/TopLayout/TopLayout';

const Providers: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return (
		<TopLayout>
			<Locales>{children}</Locales>
		</TopLayout>
	);
};

const renderWithProviders = (ui: UI, options?: Options): RenderResult =>
	render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders };
