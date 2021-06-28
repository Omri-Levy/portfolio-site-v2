import React from 'react';
import { renderWithProviders, screen } from '../../../../../utils/testUtils';
import NavLink from '.';

describe(`NavLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<NavLink
				text={`Portfolio`}
				to={`/#portfolio`}
			/>,
		);
	});

	it(`contains link`, () => {
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `/#portfolio`);
	});

	it(`contains 'Portfolio' in text`, () => {
		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});
});
