import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import IconLink from './IconLink';
import { Email } from '@material-ui/icons';

describe(`IconLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<IconLink
				Icon={Email}
				to={`https://www.google.com`}
				alt={`email-icon`}
			/>,
		);
	});

	it(`renders`, () => {
		renderWithProviders(
			<IconLink
				Icon={Email}
				to={`https://www.google.com`}
				alt={`email-icon`}
			/>,
		);
	});

	it(`contains icon`, () => {
		const icon = screen.getByRole(`link`, { name: `email-icon` });

		expect(icon).toBeInTheDocument();
	});

	it(`contains link`, () => {
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `https://www.google.com`);
	});
});
