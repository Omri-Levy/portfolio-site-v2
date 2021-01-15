import React from 'react';
import { renderWithProviders } from '../../../utils/testUtils';
import Header from '.';

describe(`Header`, () => {
  it(`renders`, () => {
    const { container } = renderWithProviders(<Header />);
    const header = container.querySelector(`header`);

    expect(header).toBeInTheDocument();
  });
});
