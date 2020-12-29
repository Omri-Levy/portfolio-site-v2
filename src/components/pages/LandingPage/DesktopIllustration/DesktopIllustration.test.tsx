import React from 'react';
import DesktopIllustration from './DesktopIllustration';
import { renderWithProviders } from '~/utils/testUtils';

describe(`DesktopIllustration`, () => {
	it(`renders`, () => {
		renderWithProviders(<DesktopIllustration />);
	});
});
