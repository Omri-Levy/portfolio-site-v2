import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import Logo from './Logo';

describe(`Logo`, () => {
	beforeEach(() => renderWithProviders(<Logo />));

	it(`renders`, () => {
		renderWithProviders(<Logo />);
	});

	it(`contains 'Omri Levy Portfolio Site'`, () => {
		screen.getByRole(`link`, { name: /omri levy portfolio site/i });
	});

	it(`contains link to home page`, () => {
		const homePageLink = screen.getByRole(`link`);

		expect(homePageLink).toBeInTheDocument();
		expect(homePageLink).toHaveAttribute(`href`, `/home#portfolio`);
	});
});
