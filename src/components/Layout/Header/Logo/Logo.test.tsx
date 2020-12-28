import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import Logo from './Logo';

describe(`Logo`, () => {
	beforeEach(() => renderWithProviders(<Logo />));

	it(`renders`, () => {
		renderWithProviders(<Logo />);
	});

	it(`contains 'Omri Levy Fullstack Dev'`, () => {
		screen.getByRole(`link`, { name: /omri levy fullstack dev/i });
	});

	it(`contains link to home page`, () => {
		const homePageLink = screen.getByRole(`link`);

		expect(homePageLink).toBeInTheDocument();
		expect(homePageLink).toHaveAttribute(`href`, `/home#portfolio`);
	});
});
