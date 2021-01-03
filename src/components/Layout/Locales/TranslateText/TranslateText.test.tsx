import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import TranslateText from './TranslateText';

describe(`TranslateText`, () => {
	it(`renders`, () => {
		renderWithProviders(<TranslateText text={`Portfolio`} />);

		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});
});
