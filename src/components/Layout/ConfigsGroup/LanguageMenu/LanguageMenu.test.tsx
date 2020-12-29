import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import LanguageMenu from './LanguageMenu';

describe(`LanguageMenu`, () => {
	beforeEach(() => {
		renderWithProviders(<LanguageMenu />);
		screen.getByRole(`button`).click();
	});

	it(`renders`, () => {
		renderWithProviders(<LanguageMenu />);
	});

	it(`contains hebrew`, () => {
		expect(screen.getByRole(`menuitem`, { name: /he/i })).toBeInTheDocument();
	});

	it(`contains english`, () => {
		expect(screen.getByRole(`menuitem`, { name: /en/i })).toBeInTheDocument();
	});
});
