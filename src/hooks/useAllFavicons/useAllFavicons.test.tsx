import React from 'react';
import { renderWithProviders, screen } from '../../utils/testUtils';
import MockComponent from './MockComponent';

describe(`useAllFavicons`, () => {
  it(`returns an empty object as fallback`, () => {
    renderWithProviders(<MockComponent />);

    expect(screen.getByText(/{}/)).toBeInTheDocument();
  });
});
