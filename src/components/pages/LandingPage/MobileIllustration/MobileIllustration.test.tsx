import React from 'react';
import MobileIllustration from './MobileIllustration';
import { renderWithProviders } from '~/utils/testUtils';

describe(`MobileIllustration`, () => {
	it(`renders`, () => {
		renderWithProviders(<MobileIllustration />);
	});
});
