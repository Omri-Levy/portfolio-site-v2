import React from 'react';
import NavLink from './NavLink';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';

describe(`NavLink`, () => {
	beforeEach(() => {
		renderWithProviders(<NavLink text={`Portfolio`} to={`/home#portfolio`} />);
	});

	it(`renders`, () => {
		renderWithProviders(<NavLink text={`Portfolio`} to={`/home#portfolio`} />);
	});

	it(`contains 'Portfolio' in text`, () => {
		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});

	it(`contains '/home#portfolio' in href`, () => {
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `/home#portfolio`);
	});
});
