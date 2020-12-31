import React from 'react';
import ButtonLink from '../ButtonLink';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';

describe(`Primary ButtonLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<ButtonLink
				variant={`primary`}
				text={`primary test text`}
				to={`https://www.google.com`}
			/>,
		);
	});

	it(`renders`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});

	it(`renders text`, () => {
		expect(screen.getByText(/primary test text/i)).toBeInTheDocument();
	});

	it(`contains link`, () => {
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `https://www.google.com`);
	});
});
