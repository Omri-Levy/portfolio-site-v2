import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import IconButtonLink from './IconButtonLink';
import { Email } from '@material-ui/icons';

describe(`IconButtonLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<IconButtonLink Icon={Email} to={`https://www.google.com`} />,
		);
	});

	it(`renders`, () => {
		renderWithProviders(
			<IconButtonLink Icon={Email} to={`https://www.google.com`} />,
		);
	});

	it(`contains icon`, () => {
		const icon = screen.getByRole(`icon`);

		expect(icon).toBeInTheDocument();
	});

	it(`contains link`, () => {
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `https://www.google.com`);
	});
});
