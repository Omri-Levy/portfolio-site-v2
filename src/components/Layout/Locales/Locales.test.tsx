import React from 'react';
import Locales from '.';
import { renderWithProviders, screen } from '../../../utils/testUtils';
import TranslateText from './TranslateText';

describe(`Locales`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Locales>
				<TranslateText text={`Portfolio`} />
			</Locales>,
		);

		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});
});
