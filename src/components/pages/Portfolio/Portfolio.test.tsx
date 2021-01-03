import React from 'react';
import Portfolio from './Portfolio';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`Portfolio`, () => {
	it(`renders`, () => {
		renderWithProviders(<Portfolio />);

		expect(
			screen.getByRole(`heading`, { name: /portfolio/i }),
		).toBeInTheDocument();
	});
});
