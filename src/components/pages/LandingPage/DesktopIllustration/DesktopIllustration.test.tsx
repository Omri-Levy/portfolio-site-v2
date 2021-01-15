import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import DesktopIllustration from '.';

describe(`DesktopIllustration`, () => {
  it(`renders`, () => {
    renderWithProviders(<DesktopIllustration />);

    expect(screen.getByRole(`figure`)).toBeInTheDocument();
  });
});
