import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Locales } from '../components/Layout/Locales';
import { ChildrenProps, Options, UI } from './types';

const Provider: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return <Locales>{children}</Locales>;
};

const renderWithLocales = (ui: UI, options?: Options): RenderResult =>
	render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithLocales };
