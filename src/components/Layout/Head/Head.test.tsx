import { waitFor } from '@testing-library/dom';
import React from 'react';
import { renderWithProviders } from '../../../utils/testUtils';
import Hero from '../../pages/Hero';

describe(`Head`, () => {
	it(`sets the document title`, async () => {
		renderWithProviders(<Hero />);
		const title = /omri\slevy\s-\sportfolio\ssite\s-\slanding\spage/i;

		await waitFor(() => expect(document.title).toMatch(title));
	});
});
