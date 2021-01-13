import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import NavLink from './NavLink';

describe(`NavLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<NavLink
				text={`Portfolio`}
				to={`/home#portfolio`}
			/>,
		);
	});

	it(`contains link`, () => {
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `/home#portfolio`);
	});

	it(`contains 'Portfolio' in text`, () => {
		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});
});
