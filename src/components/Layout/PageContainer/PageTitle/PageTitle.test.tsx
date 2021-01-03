import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import PageTitle from './PageTitle';
import { Email } from '@material-ui/icons';

describe(`PageTitle`, () => {
	it(`renders`, () => {
		renderWithProviders(<PageTitle Icon={Email} text={`test title`} />);

		expect(
			screen.getByRole(`heading`, { name: /test\stitle/i }),
		).toBeInTheDocument();
	});
});
