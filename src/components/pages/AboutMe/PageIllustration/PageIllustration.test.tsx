import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import PageIllustration from './PageIllustration';

describe(`PageIllustration`, () => {
	it(`renders`, () => {
		renderWithProviders(<PageIllustration />);

		expect(screen.getByRole(`figure`)).toBeInTheDocument();
	});
});
