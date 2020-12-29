import React from 'react';
import Container from './Container';
import { renderWithProviders } from '~/utils/testUtils';

describe(`Container`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Container>
				<h1>test child</h1>
			</Container>,
		);
	});
});
