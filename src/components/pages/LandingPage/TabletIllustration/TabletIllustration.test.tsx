import React from 'react';
import TabletIllustration from '.';
import { renderWithProviders, screen } from '../../../../utils/testUtils';

describe(`TabletIllustration`, () => {
	it(`renders`, () => {
		renderWithProviders(<TabletIllustration />);

		expect(screen.getByRole(`figure`)).toBeInTheDocument();
	});
});
