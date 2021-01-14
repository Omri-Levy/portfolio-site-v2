import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import PageIllustration from './index';

describe(`PageIllustration`, () => {
  it(`renders`, () => {
    renderWithProviders(<PageIllustration />);

    expect(screen.getByRole(`figure`)).toBeInTheDocument();
  });
});
