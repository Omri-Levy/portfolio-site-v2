import React from 'react';
import { renderWithProviders } from '~/utils/testUtils/testUtils';
import ThemeOption from './ThemeOption';

describe(`ThemeOption`, () => {
	it(`renders`, () => {
		renderWithProviders(<ThemeOption color={`#3e96ff`} />);
	});
});
