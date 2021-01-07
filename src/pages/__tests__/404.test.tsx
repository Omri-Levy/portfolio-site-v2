import { renderWithProviders, screen } from '~/utils/testUtils';
import PageNotFound from '../404';
import React from 'react';

describe(`404 page`, () => {
	it(`renders`, () => {
		renderWithProviders(<PageNotFound />);

		expect(
			screen.getByRole(`heading`, { name: /not found/i }),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				/You just hit a route that doesn`t exist... the sadness./i,
			),
		).toBeInTheDocument();
	});
});
