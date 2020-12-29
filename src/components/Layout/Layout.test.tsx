import React from 'react';
import Layout from './Layout';
import { renderWithProviders } from '~/utils/testUtils';

describe(`Layout`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Layout>
				<h1>test child</h1>
			</Layout>,
		);
	});
});
