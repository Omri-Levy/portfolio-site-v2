import React from 'react';
import { renderWithProviders, screen } from '../../utils/testUtils';
import MockComponent from './MockComponent';

describe(`useDevice`, () => {
	it(`isDesktop returns false`, () => {
		renderWithProviders(<MockComponent />);

		expect(screen.getByText(/false/i)).toBeInTheDocument();
	});
});
