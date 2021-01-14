import React from 'react';
import Index from '../';
import { renderWithProviders, screen } from '../../utils/testUtils';

describe(`index page`, () => {
  it(`renders`, () => {
    renderWithProviders(<Index />);

    expect(screen.getByRole(`figure`)).toBeInTheDocument();
    expect(screen.getByRole(`link`, { name: /dive\sin/i })).toBeInTheDocument();
  });
});
