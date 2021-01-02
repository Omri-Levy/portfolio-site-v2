import React from 'react';
import ContactMeForm from './ContactMeForm';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`ContactMeForm`, () => {
	it(`renders`, () => {
		renderWithProviders(<ContactMeForm />);

		expect(
			screen.getByRole(`textbox`, { name: /full\sname/i }),
		).toBeInTheDocument();
		expect(screen.getByRole(`textbox`, { name: /email/i })).toBeInTheDocument();
		expect(
			screen.getByRole(`textbox`, { name: /message/i }),
		).toBeInTheDocument();
		expect(screen.getByRole(`button`, { name: /send/i })).toBeInTheDocument();
	});
});
