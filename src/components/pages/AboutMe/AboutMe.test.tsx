import React from 'react';
import AboutMe from '.';
import { renderWithProviders, screen } from '../../../utils/testUtils';

describe(`AboutMe`, () => {
  it(`renders`, () => {
    renderWithProviders(<AboutMe />);

    expect(
      screen.getByRole(`heading`, { name: /about\sme/i }),
    ).toBeInTheDocument();
  });
});
