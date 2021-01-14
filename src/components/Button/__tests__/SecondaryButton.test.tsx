import React from 'react';

import Button from '../';
import { renderWithProviders, screen } from '../../../utils/testUtils';

describe(`Primary Button`, () => {
	beforeEach(() => {
		renderWithProviders(
			<Button
				variant={`secondary`}
				text={`secondary test text`}
			/>,
		);
	});

	it(`renders`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});

	it(`renders text`, () => {
		expect(screen.getByText(/secondary test text/i)).toBeInTheDocument();
	});
});
