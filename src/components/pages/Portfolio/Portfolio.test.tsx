import React from 'react';
import Portfolio from './Portfolio';
import { renderWithProviders } from '~/utils/testUtils';

describe(`Portfolio`, () => {
	it(`renders`, () => {
		renderWithProviders(<Portfolio />);
	});
});
