import React from 'react';
import { FormattedMessage } from 'react-intl';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';

describe(`testUtils`, () => {
	it(`gives access to locales`, () => {
		renderWithProviders(<FormattedMessage id={`portfolio`} />);

		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});
});
