import React from 'react';
import AboutMe from './AboutMe';
import { renderWithProviders } from '~/utils/testUtils';

describe(`AboutMe`, () => {
	it(`renders`, () => {
		renderWithProviders(<AboutMe />);
	});
});
