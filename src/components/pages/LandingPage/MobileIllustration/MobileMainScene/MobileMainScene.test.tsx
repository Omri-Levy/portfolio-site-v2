import React from 'react';
import { renderWithProviders } from '../../../../../utils/testUtils';
import MobileMainScene from '.';

describe(`MobileMainScene`, () => {
  it(`renders`, () => {
    const { container } = renderWithProviders(<MobileMainScene />);

    expect(container.querySelector(`svg`)).toBeInTheDocument();
  });
});
