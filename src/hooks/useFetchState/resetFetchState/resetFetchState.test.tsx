import React from 'react';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import MockComponent from './MockComponent';

describe(`resetFetchState`, () => {
	it(`doesn't render alert`, async () => {
		renderWithProviders(<MockComponent />);

		screen.getByRole(`button`).click();

		expect(screen.queryByText(/test\salert/i)).not.toBeInTheDocument();
	});
});
