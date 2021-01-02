import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import Content from './Content';
import { Button } from '@material-ui/core';

describe(`Content`, () => {
	it(`accepts children`, () => {
		renderWithProviders(
			<Content>
				<Button>test child</Button>
			</Content>,
		);

		expect(
			screen.getByRole(`button`, { name: /test\schild/i }),
		).toBeInTheDocument();
	});
});
