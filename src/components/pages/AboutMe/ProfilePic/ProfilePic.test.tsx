import React from 'react';
import ProfilePic from './ProfilePic';
import { renderWithProviders } from '~/utils/testUtils';

describe(`ProfilePic`, () => {
	it(`renders`, () => {
		renderWithProviders(<ProfilePic />);
	});
});
