import { Button } from '@material-ui/core';
import React from 'react';
import Layout from '.';
import { renderWithProviders, screen } from '../../utils/testUtils';

describe(`Layout`, () => {
  it(`accepts children`, () => {
    renderWithProviders(
      <Layout>
        <Button>test child</Button>
      </Layout>,
    );

    expect(
			screen.getByRole(`button`, { name: /test child/i }),
		).toBeInTheDocument();
	});
});
