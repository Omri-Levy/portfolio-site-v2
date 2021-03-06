import { Email } from '@material-ui/icons';
import React from 'react';
import { renderWithProviders, screen } from '../../utils/testUtils';
import IconLink from '.';

describe(`IconLink`, () => {
  it(`contains link`, () => {
    renderWithProviders(
      <IconLink
        Icon={Email}
        to={`https://www.google.com`}
        alt={`email-icon`}
      />,
    );

    const link = screen.getByRole(`link`);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(`href`, `https://www.google.com`);
  });

  it(`contains icon`, () => {
    const { container } = renderWithProviders(
      <IconLink
        Icon={Email}
        to={`https://www.google.com`}
        alt={`email-icon`}
      />,
    );

    const icon = container.querySelector(`svg`);

    expect(icon).toBeInTheDocument();
  });
});
