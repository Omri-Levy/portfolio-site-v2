import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import ThemeSelector from './ThemeSelector';

describe(`ThemeSelector`, () => {
	beforeEach(() => renderWithProviders(<ThemeSelector />));

	it(`renders`, () => {
		screen.getAllByRole(`button`)[0].click();

		expect(screen.getByRole(`presentation`)).toBeInTheDocument();
	});

	it(`contains options`, () => {
		const themeOptions = screen.getAllByRole(`button`);

		themeOptions.forEach((themeOption) => {
			expect(themeOption).toBeInTheDocument();
		});
	});
});
