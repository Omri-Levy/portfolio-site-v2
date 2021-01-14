import React from 'react';
import { renderWithProviders, screen } from '../../../../../utils/testUtils';
import ThemeOption from '.';

describe(`ThemeOption`, () => {
	it(`renders`, () => {
		renderWithProviders(<ThemeOption color={`blue`} alt={`test alt`} />);

		expect(
			screen.getByRole(`button`, { name: /test\salt/i }),
		).toBeInTheDocument();
	});
});
