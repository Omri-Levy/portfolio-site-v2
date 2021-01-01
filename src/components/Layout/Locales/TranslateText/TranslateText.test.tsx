import React from 'react';
import { renderWithProviders } from '~/utils/testUtils/testUtils';
import TranslateText from './TranslateText';

describe(`TranslateText`, () => {
	beforeEach(() => renderWithProviders(<TranslateText text={`Portfolio`} />));

	it(`renders`, () => {
		renderWithProviders(<TranslateText text={`Portfolio`} />);
	});
});
