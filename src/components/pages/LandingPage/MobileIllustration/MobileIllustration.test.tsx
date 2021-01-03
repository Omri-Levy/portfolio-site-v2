import React from 'react';
import MobileIllustration from './MobileIllustration';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`MobileIllustration`, () => {
	it(`renders`, () => {
		renderWithProviders(<MobileIllustration />);

		expect(screen.getByRole(`figure`)).toBeInTheDocument();
	});
});
