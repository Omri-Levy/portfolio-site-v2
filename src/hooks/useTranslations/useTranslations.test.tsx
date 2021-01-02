import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import MockComponent from './MockComponent';

describe(`useTranslations`, () => {
	it(`returns english`, () => {
		renderWithProviders(<MockComponent rtl={false} />);

		expect(
			screen.getByRole(`heading`, { name: /english/i }),
		).toBeInTheDocument();
		expect(
			screen.queryByRole(`heading`, { name: /עברית/i }),
		).not.toBeInTheDocument();
	});

	it(`returns hebrew`, () => {
		renderWithProviders(<MockComponent rtl={true} />);

		expect(screen.getByRole(`heading`, { name: /עברית/i })).toBeInTheDocument();
		expect(
			screen.queryByRole(`heading`, { name: /english/i }),
		).not.toBeInTheDocument();
	});
});
