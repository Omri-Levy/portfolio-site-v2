import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import MobileIllustration from '.';

describe(`MobileIllustration`, () => {
  it(`renders`, () => {
    renderWithProviders(<MobileIllustration />);

    expect(screen.getByRole(`figure`)).toBeInTheDocument();
  });
});
