import React from 'react';
import LandingPage from './LandingPage';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`LandingPage`, () => {
	it(`renders`, () => {
		renderWithProviders(<LandingPage />);

		expect(screen.getByRole(`figure`)).toBeInTheDocument();
	});
});
