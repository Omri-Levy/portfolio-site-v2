import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import DesktopIllustration from './index';

describe(`DesktopIllustration`, () => {
  it(`renders`, () => {
    renderWithProviders(<DesktopIllustration />);

    expect(screen.getByRole(`figure`)).toBeInTheDocument();
  });
});
