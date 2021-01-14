import { Button } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import React from 'react';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import PageContainer from '.';

describe(`PageContainer`, () => {
  it(`renders`, () => {
    renderWithProviders(
      <PageContainer Icon={Email} text={`test title`} id={`test-id`}>
        <Button>test child</Button>
      </PageContainer>,
    );

    expect(
			screen.getByRole(`button`, { name: /test\schild/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole(`heading`, { name: /test\stitle/i }),
		).toBeInTheDocument();
	});
});
