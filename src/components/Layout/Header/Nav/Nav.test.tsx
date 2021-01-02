import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import Nav from './Nav';

describe(`Nav`, () => {
	beforeEach(() => renderWithProviders(<Nav />));

	it(`renders`, () => {
		const { container } = renderWithProviders(<Nav />);
		const nav = container.querySelector(`nav`);

		expect(nav).toBeInTheDocument();
	});

	it(`contains links`, () => {
		const links = screen.getAllByRole(`link`);

		links.forEach((link) => {
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute(`href`);
		});
	});
});
