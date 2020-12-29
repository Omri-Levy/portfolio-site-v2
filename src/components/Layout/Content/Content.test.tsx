import React from 'react';
import { renderWithProviders } from '~/utils/testUtils';
import Content from './Content';

describe(`ConfigToolbar`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Content>
				<h1>test child</h1>
			</Content>,
		);
	});
});
