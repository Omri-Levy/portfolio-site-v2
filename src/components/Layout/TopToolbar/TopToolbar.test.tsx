import React from 'react';
import TopToolbar from '.';
import { renderWithProviders, screen } from '../../../utils/testUtils';

describe(`TopToolbar`, () => {
  it(`renders`, () => {
    renderWithProviders(<TopToolbar />);

    expect(
      screen.getByRole(`group`, { name: /external-links/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole(`button`, { name: /my\sresume/i }),
		).toBeInTheDocument();
	});
});
