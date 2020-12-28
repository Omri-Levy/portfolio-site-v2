import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import Nav from './Nav';

describe(`Nav`, () => {
	beforeEach(() => renderWithProviders(<Nav />));

	it(`renders`, () => {
		renderWithProviders(<Nav />);
	});

	it(`contains links`, () => {
		const links = screen.getAllByRole(`link`);

		links.forEach((link) => {
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute(`href`);
		});
	});
});
