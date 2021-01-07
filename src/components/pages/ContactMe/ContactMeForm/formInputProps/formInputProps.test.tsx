import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import MockComponent from './MockComponent';

describe(`formInputProps`, () => {
	it(`has maxLength`, () => {
		renderWithProviders(<MockComponent />);

		expect(screen.getByRole(`textbox`)).toHaveAttribute(`maxlength`, `640`);
	});
});
