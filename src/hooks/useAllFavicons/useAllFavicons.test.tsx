import { renderWithProviders, screen } from '~/utils/testUtils';
import MockComponent from '~/hooks/useAllFavicons/MockComponent';
import React from 'react';

describe(`useAllFavicons`, () => {
	it(`returns an empty object as fallback`, () => {
		renderWithProviders(<MockComponent />);

		expect(screen.getByText(/{}/)).toBeInTheDocument();
	});
});
