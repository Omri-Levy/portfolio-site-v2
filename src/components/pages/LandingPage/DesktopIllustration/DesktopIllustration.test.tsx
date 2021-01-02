import React from 'react';
import DesktopIllustration from './DesktopIllustration';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`DesktopIllustration`, () => {
	it(`renders`, () => {
		renderWithProviders(<DesktopIllustration />);

		expect(screen.getByRole(`figure`)).toBeInTheDocument();
	});
});
