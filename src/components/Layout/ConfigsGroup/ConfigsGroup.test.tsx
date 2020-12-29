import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import ConfigsGroup from './ConfigsGroup';

describe(`ConfigsGroup`, () => {
	beforeEach(() => renderWithProviders(<ConfigsGroup />));

	it(`renders`, () => {
		renderWithProviders(<ConfigsGroup />);
	});

	it(`contains theme selector`, () => {
		expect(screen.getByRole(`theme-selector`)).toBeInTheDocument();
	});

	it(`contains dark mode toggle`, () => {
		expect(screen.getByRole(`dark-mode-toggle`)).toBeInTheDocument();
	});

	it(`contains language menu`, () => {
		expect(screen.getByRole(`language-menu`)).toBeInTheDocument();
	});
});
