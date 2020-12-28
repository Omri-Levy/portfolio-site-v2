import React from 'react';
import CustomNavLink from './CustomNavLink';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`CustomNavLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<CustomNavLink text={`Portfolio`} to={`/home#portfolio`} />,
		);
	});

	it(`renders`, () => {
		renderWithProviders(
			<CustomNavLink text={`Portfolio`} to={`/home#portfolio`} />,
		);
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
