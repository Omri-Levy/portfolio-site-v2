import React from 'react';
import ProfilePic from '.';
import { renderWithProviders } from '../../../../utils/testUtils';

describe(`ProfilePic`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(<ProfilePic />);

		const profilePic = container.querySelector(`img`);

		expect(profilePic).toBeInTheDocument();
	});
});
