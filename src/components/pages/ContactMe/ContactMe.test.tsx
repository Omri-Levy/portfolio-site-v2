import React from 'react';
import ContactMe from './ContactMe';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`ContactMe`, () => {
	it(`renders`, () => {
		renderWithProviders(<ContactMe />);

		expect(
			screen.getByRole(`heading`, { name: /contact\sme/i }),
		).toBeInTheDocument();
	});
});
