import React from 'react';
import TabletIllustration from './TabletIllustration';
import { renderWithProviders } from '~/utils/testUtils';

describe(`TabletIllustration`, () => {
	it(`renders`, () => {
		renderWithProviders(<TabletIllustration />);
	});
});
