import React from 'react';
import { renderWithProviders } from '~/utils/testUtils/testUtils';
import PageContainer from './PageContainer';
import { Email } from '@material-ui/icons';

describe(`PageContainer`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<PageContainer Icon={Email} text={`test title`} id={`test-id`}>
				<h1>Test child</h1>
			</PageContainer>,
		);
	});
});
