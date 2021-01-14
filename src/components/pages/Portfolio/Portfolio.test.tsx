import React from 'react';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import Portfolio from '.';

describe(`Portfolio`, () => {
  it(`renders`, () => {
    renderWithProviders(<Portfolio />);

    expect(
      screen.getByRole(`heading`, { name: /portfolio/i }),
    ).toBeInTheDocument();
  });
});
