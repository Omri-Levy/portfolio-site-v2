import React from 'react';
import Button from '../';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';

describe(`Primary Button`, () => {
	beforeEach(() => {
		renderWithProviders(
			<Button
				variant={`primary`}
				text={`primary test text`}
			/>,
		);
	});

	it(`renders`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});

	it(`renders text`, () => {
		expect(screen.getByText(/primary test text/i)).toBeInTheDocument();
	});
});
