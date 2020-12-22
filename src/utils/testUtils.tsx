import { render } from '@testing-library/react';
import React from 'react';
import { Locales } from '../components/Layout/Locales';
import { ChildrenProps, Options, UI } from './types';

const Provider = ({ children }: ChildrenProps) => {
	return <Locales>{children}</Locales>;
};

const renderWithLocales = (ui: UI, options?: Options) =>
	render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithLocales };
