import React from 'react';
import { renderWithProviders } from '~/utils/testUtils';
import MobileFishingBoat from './MobileFishingBoat';

describe(`MobileFishingBoat`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(<MobileFishingBoat />);

		expect(container.querySelector(`svg`)).toBeInTheDocument();
	});
});
