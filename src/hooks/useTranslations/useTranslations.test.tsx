import React from 'react';
import { renderWithProviders, screen } from '../../utils/testUtils';
import MockComponent from './MockComponent';

describe(`useTranslations`, () => {
	it(`returns english`, () => {
		renderWithProviders(<MockComponent rtl={false} />);

		expect(screen.getByText(/english/i)).toBeInTheDocument();
		expect(screen.queryByText(/עברית/i)).not.toBeInTheDocument();
	});

	it(`returns hebrew`, () => {
		renderWithProviders(<MockComponent rtl={true} />);

		expect(screen.getByText(/עברית/i)).toBeInTheDocument();
		expect(screen.queryByText(/english/i)).not.toBeInTheDocument();
	});
});
