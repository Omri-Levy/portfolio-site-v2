import React from 'react';
import LinkedinBrand from './LinkedinBrand';
import { renderWithProviders } from '~/utils/testUtils';

describe(`LinkedinBrand`, () => {
	it(`renders`, () => {
		renderWithProviders(<LinkedinBrand className={`test class`} />);
	});
});
