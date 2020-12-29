import React from 'react';
import ContactMeForm from './ContactMeForm';
import { renderWithProviders } from '~/utils/testUtils';

describe(`ContactMeForm`, () => {
	it(`renders`, () => {
		renderWithProviders(<ContactMeForm />);
	});
});
