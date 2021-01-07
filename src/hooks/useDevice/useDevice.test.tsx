import React from 'react';
import MockComponent from './MockComponent';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`useDevice`, () => {
	it(`isDesktop returns false`, () => {
		renderWithProviders(<MockComponent />);

		expect(screen.getByText(/false/i)).toBeInTheDocument();
	});
});
