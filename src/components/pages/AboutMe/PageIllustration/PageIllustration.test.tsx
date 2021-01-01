import React from 'react';
import { renderWithProviders } from '~/utils/testUtils';
import PageIllustration from './PageIllustration';

describe(`PageIllustration`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(<PageIllustration />);

		expect(container.querySelector(`svg`)).toBeInTheDocument();
	});
});
