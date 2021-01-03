import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import PageContainer from './PageContainer';
import { Email } from '@material-ui/icons';
import { Button } from '@material-ui/core';

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
