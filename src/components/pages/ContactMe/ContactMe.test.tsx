import React from 'react';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import ContactMe from '.';

describe(`ContactMe`, () => {
  it(`renders`, () => {
    renderWithProviders(<ContactMe />);

    expect(
      screen.getByRole(`heading`, { name: /contact\sme/i }),
    ).toBeInTheDocument();
  });
});
