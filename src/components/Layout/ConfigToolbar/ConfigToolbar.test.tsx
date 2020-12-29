import React from 'react';
import ConfigToolbar from '~/components/Layout/ConfigToolbar/ConfigToolbar';
import { renderWithProviders } from '~/utils/testUtils';

describe(`ConfigToolbar`, () => {
	it(`renders`, () => {
		renderWithProviders(<ConfigToolbar />);
	});
});
