import React from 'react';
import ContactMe from './ContactMe';
import { renderWithProviders } from '~/utils/testUtils';

describe(`ContactMe`, () => {
	it(`renders`, () => {
		renderWithProviders(<ContactMe />);
	});
});
