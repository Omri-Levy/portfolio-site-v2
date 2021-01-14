import React from 'react';
import TranslateText from '.';
import { renderWithProviders, screen } from '../../../../utils/testUtils';

describe(`TranslateText`, () => {
	it(`renders`, () => {
		renderWithProviders(<TranslateText text={`Portfolio`} />);

		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});
});
