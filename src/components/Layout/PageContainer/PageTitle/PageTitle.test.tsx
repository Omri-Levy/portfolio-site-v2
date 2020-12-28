import React from 'react';
import { renderWithProviders } from '~/utils/testUtils';
import PageTitle from './PageTitle';
import { Email } from '@material-ui/icons';

describe(`PageTitle`, () => {
	it(`renders`, () => {
		renderWithProviders(<PageTitle Icon={Email} text={`test title`} />);
	});
});
