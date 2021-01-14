import React from 'react';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import ConfigsGroup from './index';

describe(`ConfigsGroup`, () => {
	beforeEach(() => renderWithProviders(<ConfigsGroup />));

	it(`contains theme selector`, () => {
		expect(screen.getByRole(`group`)).toBeInTheDocument();
	});

	it(`contains dark mode toggle`, () => {
		expect(
			screen.getByRole(`checkbox`, { name: `dark-mode-toggle` }),
		).toBeInTheDocument();
	});

	it(`contains language menu`, () => {
		expect(
			screen.getByRole(`button`, { name: `language-menu` }),
		).toBeInTheDocument();
	});
});
