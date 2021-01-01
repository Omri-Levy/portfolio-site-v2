import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { primaryBorderColor, primaryColor } from '~/hooks/useMakeTheme/colors';
import { Button } from '@material-ui/core';

describe(`testUtils`, () => {
	it(`gives access to locales`, () => {
		renderWithProviders(<FormattedMessage id={`portfolio`} />);

		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});

	it(`gives access to theme`, () => {
		renderWithProviders(<Button color={`primary`} variant={`contained`} />);

		expect(screen.getByRole(`button`)).toHaveStyle({
			'border-top-color': primaryBorderColor(primaryColor),
		});
	});
});
