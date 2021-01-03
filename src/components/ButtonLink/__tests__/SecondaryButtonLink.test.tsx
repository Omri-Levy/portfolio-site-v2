import { renderWithProviders, screen } from '~/utils/testUtils';
import ButtonLink from '../ButtonLink';
import React from 'react';

describe(`Secondary ButtonLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<ButtonLink
				variant={`secondary`}
				text={`secondary test text`}
				to={`https://www.google.com`}
			/>,
		);
	});

	it(`renders`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});

	it(`renders text`, () => {
		expect(screen.getByText(/secondary test text/i)).toBeInTheDocument();
	});

	it(`contains link`, () => {
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `https://www.google.com`);
	});
});
