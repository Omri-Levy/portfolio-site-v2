import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import MockComponent from './MockComponent';

describe(`useRTLOrLTRComponent`, () => {
	it(`renders the ltr component`, () => {
		renderWithProviders(<MockComponent rtl={false} />);

		expect(screen.getByRole(`heading`, { name: /ltr/i })).toBeInTheDocument();
		expect(
			screen.queryByRole(`heading`, { name: /rtl/i }),
		).not.toBeInTheDocument();
	});

	it(`renders the rtl component`, () => {
		renderWithProviders(<MockComponent rtl={true} />);

		expect(screen.getByRole(`heading`, { name: /rtl/i })).toBeInTheDocument();
		expect(
			screen.queryByRole(`heading`, { name: /ltr/i }),
		).not.toBeInTheDocument();
	});
});
