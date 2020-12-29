import React from 'react';
import { renderWithProviders } from '~/utils/testUtils/testUtils';
import Header from './Header';

describe(`Header`, () => {
	it(`renders`, () => {
		renderWithProviders(<Header />);
	});
});
