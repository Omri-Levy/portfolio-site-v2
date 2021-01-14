import { Button } from '@material-ui/core';
import React from 'react';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import Container from '.';

describe(`Container`, () => {
  it(`renders`, () => {
    renderWithProviders(
      <Container>
        <Button>test child</Button>
      </Container>,
    );

    expect(
      screen.getByRole(`button`, { name: /test\schild/i }),
    ).toBeInTheDocument();
  });
});
