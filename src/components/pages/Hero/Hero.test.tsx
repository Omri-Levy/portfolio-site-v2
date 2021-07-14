import React from 'react';
import Hero from '.';
import { renderWithProviders, screen } from '../../../utils/testUtils';

describe(`Hero`, () => {
	it(`renders`, () => {
		renderWithProviders(<Hero />);

		expect(
			screen.getByRole(`heading`, { name: /hero/i }),
		).toBeInTheDocument();
	});
});
