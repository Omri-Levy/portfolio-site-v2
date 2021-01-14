import React from 'react';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import LandingPage from '.';

describe(`LandingPage`, () => {
  it(`renders`, () => {
    renderWithProviders(<LandingPage />);

    expect(screen.getByRole(`figure`)).toBeInTheDocument();
  });
});
