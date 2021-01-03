import React from 'react';
import NavLink from './NavLink';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';

describe(`NavLink`, () => {
	const setIsActiveLink = jest.fn();

	beforeEach(() => {
		renderWithProviders(
			<NavLink
				text={`Portfolio`}
				to={`/home#portfolio`}
				isActiveLink={`portfolio`}
				setIsActiveLink={setIsActiveLink}
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
