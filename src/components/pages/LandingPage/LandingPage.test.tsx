import React from 'react';
import LandingPage from './LandingPage';
import { renderWithProviders } from '~/utils/testUtils';

describe(`LandingPage`, () => {
	it(`renders`, () => {
		renderWithProviders(<LandingPage />);
	});
});
