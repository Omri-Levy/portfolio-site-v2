import React from 'react';
import Head from './Head';
import { renderWithProviders } from '~/utils/testUtils';

describe(`Head`, () => {
	it(`renders`, () => {
		renderWithProviders(<Head />);
	});
});
