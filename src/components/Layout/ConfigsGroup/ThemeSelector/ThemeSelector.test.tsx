import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import ThemeSelector from './ThemeSelector';

describe(`ThemeSelector`, () => {
	beforeEach(() => renderWithProviders(<ThemeSelector />));

	it(`renders`, () => {
		expect(
			screen.getByRole(`group`, { name: /theme-selector/i }),
		).toBeInTheDocument();
	});

	it(`contains options`, () => {
		const themeOptions = screen.getAllByRole(`button`);

		themeOptions.forEach((themeOption) => {
			expect(themeOption).toBeInTheDocument();
		});
	});
});
