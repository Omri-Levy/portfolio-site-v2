import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ChildrenProps, Options, UI } from './types';
import ThemeTopLayout from '../gatsby-theme-material-ui-top-layout/components/ThemeTopLayout';

const AllProviders: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return <ThemeTopLayout>{children}</ThemeTopLayout>;
};

const renderWithProviders = (ui: UI, options?: Options): RenderResult =>
	render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders };
