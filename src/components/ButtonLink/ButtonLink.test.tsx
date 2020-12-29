import React from 'react';
import ButtonLink from './ButtonLink';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';

describe(`ButtonLink`, () => {
	beforeEach(() => {
		renderWithProviders(
			<ButtonLink variant={`primary`} text={`primary test text`} />,
		);
	});

	it(`renders primary`, () => {
		renderWithProviders(
			<ButtonLink variant={`primary`} text={`primary test text`} />,
		);
	});

	it(`renders primary\`s text`, () => {
		expect(screen.getByText(/primary test text/i)).toBeInTheDocument();
	});
});
