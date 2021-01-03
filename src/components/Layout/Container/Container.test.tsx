import React from 'react';
import Container from './Container';
import { renderWithProviders, screen } from '~/utils/testUtils';
import { Button } from '@material-ui/core';

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
