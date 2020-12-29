import React from 'react';
import TopToolbar from './TopToolbar';
import { renderWithProviders } from '~/utils/testUtils/testUtils';

describe(`TopToolbar`, () => {
	it(`renders`, () => {
		renderWithProviders(<TopToolbar />);
	});
});
