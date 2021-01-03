import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import LanguageMenu from './LanguageMenu';

describe(`LanguageMenu`, () => {
	beforeEach(() => {
		renderWithProviders(<LanguageMenu />);
		screen.getByRole(`button`).click();
	});

	it(`renders`, () => {
		expect(screen.getByRole(`menu`)).toBeInTheDocument();
	});

	it(`contains hebrew`, () => {
		expect(
			screen.getByRole(`menuitem`, { name: /hebrew/i }),
		).toBeInTheDocument();
	});

	it(`contains english`, () => {
		expect(
			screen.getByRole(`menuitem`, { name: /english/i }),
		).toBeInTheDocument();
	});
});
