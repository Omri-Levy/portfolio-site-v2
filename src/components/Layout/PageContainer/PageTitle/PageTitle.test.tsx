import { Email } from '@material-ui/icons';
import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import PageTitle from '.';

describe(`PageTitle`, () => {
  it(`renders`, () => {
    renderWithProviders(<PageTitle Icon={Email} text={`test title`} />);

    expect(
      screen.getByRole(`heading`, { name: /test\stitle/i }),
    ).toBeInTheDocument();
  });
});
