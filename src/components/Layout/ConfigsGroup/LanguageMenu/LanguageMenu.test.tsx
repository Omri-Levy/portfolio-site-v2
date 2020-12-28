import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import LanguageMenu from './LanguageMenu';

describe(`LanguageMenu`, () => {
	beforeEach(() => renderWithProviders(<LanguageMenu />));

	it(`renders`, () => {
		renderWithProviders(<LanguageMenu />);
	});

	it(`contains hebrew`, () => {
		expect(screen.getByText(/he/i)).toBeInTheDocument();
	});

	it(`contains english`, () => {
		expect(screen.getByText(/en/i)).toBeInTheDocument();
	});
});
