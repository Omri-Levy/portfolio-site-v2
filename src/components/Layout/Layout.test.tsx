import { Button } from '@material-ui/core';
import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import Layout from './Layout';

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
