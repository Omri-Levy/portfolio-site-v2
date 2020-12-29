import React from 'react';
import Locales from './Locales';
import { renderWithProviders } from '~/utils/testUtils';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';

describe(`Locales`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Locales>
				<TranslateText text={`Portfolio`} />
			</Locales>,
		);
	});
});
