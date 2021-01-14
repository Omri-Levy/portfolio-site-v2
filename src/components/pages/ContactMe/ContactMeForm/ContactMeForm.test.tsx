import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import ContactMeForm from './index';

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
