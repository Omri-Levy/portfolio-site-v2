import React from 'react';
import TopToolbar from './TopToolbar';
import { renderWithProviders } from '~/utils/testUtils';

describe(`TopToolbar`, () => {
	it(`renders`, () => {
		renderWithProviders(<TopToolbar />);
	});
});
