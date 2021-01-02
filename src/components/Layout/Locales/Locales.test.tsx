import React from 'react';
import Locales from './Locales';
import { renderWithProviders } from '~/utils/testUtils';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';
import { screen } from '~/utils/testUtils/testUtils';

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
