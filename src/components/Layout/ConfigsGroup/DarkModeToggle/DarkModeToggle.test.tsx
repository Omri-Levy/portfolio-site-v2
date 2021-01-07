import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import DarkModeToggle from './DarkModeToggle';
import MockComponent from './MockComponent';

describe(`DarkModeToggle`, () => {
	beforeEach(() => renderWithProviders(<DarkModeToggle />));

	it(`contains a toggle`, () => {
		const darkModeToggle = screen.getByRole(`checkbox`);

		expect(darkModeToggle).toBeInTheDocument();
	});

	it(`toggles`, () => {
		const darkModeToggle = screen.getByRole(`checkbox`);
		const { getByText } = renderWithProviders(<MockComponent />);

		darkModeToggle.click();

		expect(getByText(/false/i)).toBeInTheDocument();
	});
});
