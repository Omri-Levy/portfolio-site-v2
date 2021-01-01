import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import MockComponent from './MockComponent';

describe(`useBreakpoints`, () => {
	it(`returns md up media query`, () => {
		renderWithProviders(<MockComponent />);

		expect(
			screen.getByText(/"@media \(min-width:1000px\)"/i),
		).toBeInTheDocument();
	});
});
