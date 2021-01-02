import React from 'react';
import { renderWithProviders } from '~/utils/testUtils/testUtils';
import Header from './Header';

describe(`Header`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(<Header />);
		const header = container.querySelector(`header`);

		expect(header).toBeInTheDocument();
	});
});
