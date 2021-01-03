import React from 'react';
import Layout from './Layout';
import { renderWithProviders, screen } from '~/utils/testUtils';
import { Button } from '@material-ui/core';

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
